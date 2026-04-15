import { AsyncHandler } from "../middlewares/AsyncHandler.js";
import { addUserToGroupService, createGroupService, deleteGroupService, editUserInGroupService, getAllGroupsService, getAuthUserGroupsService, getGroupService, removeUserFromGroupService, updateGroupService } from "../services/group.services.js";
import { SuccessHandler } from "../middlewares/SuccessHandler.js";
import { applicationConfig } from "../constant.js";
/**
 * React Native often serializes FormData as JSON: `{ data: { _parts: [['name', v], ...] } }`.
 * That is not multipart, so multer never runs — flatten so fields + image `{ uri }` are readable.
 */
function flattenRequestBody(req) {
    const raw = req.body;
    if (!raw || typeof raw !== "object") {
        return {};
    }
    const nested = raw["data"];
    if (nested && typeof nested === "object" && nested !== null && "_parts" in nested) {
        const parts = nested._parts;
        const out = { ...raw };
        if (Array.isArray(parts)) {
            for (const item of parts) {
                if (Array.isArray(item) && item.length >= 2) {
                    out[String(item[0])] = item[1];
                }
            }
        }
        return out;
    }
    if (nested && typeof nested === "object" && nested !== null && !("_parts" in nested)) {
        return { ...raw, ...nested };
    }
    return raw;
}
function pickGroupImageUrl(req, flat) {
    if (req.file?.filename) {
        const base = applicationConfig.BASE_URL ?? "";
        return `${base}/${req.file.filename}`;
    }
    const img = flat["image"] ?? flat["Image"];
    if (typeof img === "string" && img.trim()) {
        return img.trim();
    }
    if (img && typeof img === "object" && "uri" in img) {
        const u = String(img.uri ?? "").trim();
        if (u.startsWith("http://") || u.startsWith("https://")) {
            return u;
        }
    }
    return "";
}
/** FormData sends JSON fields as strings; JSON bodies send arrays — support both */
function parseUserConnectList(raw) {
    if (raw == null || raw === "") {
        return [];
    }
    try {
        const parsed = typeof raw === "string" ? JSON.parse(raw) : raw;
        if (!Array.isArray(parsed)) {
            return [];
        }
        return parsed.map((item) => ({ id: item.id }));
    }
    catch {
        return [];
    }
}
export const createGroupController = AsyncHandler(async (req, res, next) => {
    const flat = flattenRequestBody(req);
    const image = pickGroupImageUrl(req, flat);
    const { name, description, category, groupAdmins, groupMembers } = flat;
    if (!image) {
        return next({
            statusCode: 400,
            message: 'Image required: send multipart field "image", or JSON with image URL string / { "uri": "https://..." }',
            stack: new Error().stack,
            status: "400",
        });
    }
    const data = {
        name,
        description,
        category,
        image,
        admins: { connect: parseUserConnectList(groupAdmins) },
        members: { connect: parseUserConnectList(groupMembers) },
    };
    const group = await createGroupService(data);
    return SuccessHandler(res, { group }, "Group created successfully", "201");
});
export const updateGroupController = AsyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const flat = flattenRequestBody(req);
    const imageUrl = pickGroupImageUrl(req, flat);
    const { name, description, category, groupAdmins, groupMembers } = flat;
    const data = {
        name,
        description,
        category,
        ...(imageUrl ? { image: imageUrl } : {}),
        admins: { connect: parseUserConnectList(groupAdmins) },
        members: { connect: parseUserConnectList(groupMembers) },
    };
    const group = await updateGroupService(id, data);
    if (!group) {
        return next({
            statusCode: 400,
            message: "Failed to update group",
            stack: new Error().stack,
            status: "400",
        });
    }
    return SuccessHandler(res, { group }, "Group updated successfully", "200");
});
export const getGroupController = AsyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const group = await getGroupService(id);
    if (!group) {
        return next({
            statusCode: 400,
            message: "Group not found",
            stack: new Error().stack,
            status: "400",
        });
    }
    return SuccessHandler(res, { group }, "Group fetched successfully", "200");
});
export const deleteGroupController = AsyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const group = await deleteGroupService(id);
    if (!group) {
        return next({
            statusCode: 400,
            message: "Group not found",
            stack: new Error().stack,
            status: "400",
        });
    }
    return SuccessHandler(res, { group }, "Group deleted successfully", "200");
});
export const addUserToGroupController = AsyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const { userIds } = req.body;
    const group = await addUserToGroupService(id, userIds);
    if (!group) {
        return next({
            statusCode: 400,
            message: "Failed to add user to group",
            stack: new Error().stack,
            status: "400",
        });
    }
    return SuccessHandler(res, { group }, "User added to group successfully", "200");
});
export const removeUserFromGroupController = AsyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const { userId } = req.body;
    const group = await removeUserFromGroupService(id, userId);
    if (!group) {
        return next({
            statusCode: 400,
            message: "Failed to remove user from group",
            stack: new Error().stack,
            status: "400",
        });
    }
    return SuccessHandler(res, { group }, "User removed from group successfully", "200");
});
export const getAuthUserGroupsController = AsyncHandler(async (req, res, next) => {
    const userId = req.user.id;
    const groups = await getAuthUserGroupsService(userId);
    if (!groups) {
        return next({
            statusCode: 400,
            message: "Failed to fetch groups",
            stack: new Error().stack,
            status: "400",
        });
    }
    return SuccessHandler(res, { groups }, "Groups fetched successfully", "200");
});
export const editUserInGroupController = AsyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const userId = req.user?.id;
    const data = req.body;
    if (req.file && req.file.filename) {
        data.image = `${process.env.BASE_URL}/${req.file.filename}`;
    }
    const group = await editUserInGroupService(id, data);
    if (!group) {
        return next({
            statusCode: 400,
            message: "Failed to edit user in group",
            stack: new Error().stack,
            status: "400",
        });
    }
    return SuccessHandler(res, { group }, "User edited in group successfully", "200");
});
export const getAllGroupsController = AsyncHandler(async (req, res, next) => {
    console.log(req.query, "DSfbdiuy");
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const category = typeof req.query.category === "string" ? req.query.category : "";
    const search = typeof req.query.search === "string" ? req.query.search : "";
    const groups = await getAllGroupsService(page, limit, category, search);
    if (!groups) {
        return next({
            statusCode: 400,
            message: "Failed to fetch groups",
            stack: new Error().stack,
            status: "400",
        });
    }
    return SuccessHandler(res, { groups }, "Groups fetched successfully", "200");
});
//# sourceMappingURL=group.controllers.js.map