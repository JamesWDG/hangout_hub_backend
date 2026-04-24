import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { AsyncHandler } from "../middlewares/AsyncHandler.js";
import { addUserToGroupService, createGroupService, deleteGroupService, editUserInGroupService, getAllGroupsService, getAuthUserGroupsService, getGroupService, getMyJoinRequestsService, leaveGroupService, removeUserFromGroupService, updateGroupService } from "../services/group.services.js";
import { SuccessHandler } from "../middlewares/SuccessHandler.js";
import { applicationConfig } from "../constant.js";
function flattenPartsIntoOut(parts, out) {
    if (!Array.isArray(parts)) {
        return;
    }
    for (const item of parts) {
        if (Array.isArray(item) && item.length >= 2) {
            out[String(item[0])] = item[1];
        }
    }
}
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
    const out = { ...raw };
    if (nested && typeof nested === "object" && nested !== null && "_parts" in nested) {
        flattenPartsIntoOut(nested._parts, out);
        return out;
    }
    if ("_parts" in raw && raw["_parts"] != null) {
        flattenPartsIntoOut(raw["_parts"], out);
        return out;
    }
    if (nested && typeof nested === "object" && nested !== null && !("_parts" in nested)) {
        return { ...raw, ...nested };
    }
    return raw;
}
function getImageCandidateFromFlat(flat) {
    return (flat["image"] ??
        flat["Image"] ??
        flat["coverPhoto"] ??
        flat["CoverPhoto"] ??
        flat["groupImage"] ??
        flat["GroupImage"] ??
        flat["profilePicture"] ??
        flat["ProfilePicture"]);
}
function looksLikeSerializedRnFormData(req) {
    const b = req.body;
    if (!b || typeof b !== "object") {
        return false;
    }
    const d = b.data;
    if (d && typeof d === "object" && d !== null && "_parts" in d) {
        return true;
    }
    return "_parts" in b;
}
async function saveBase64ImageToUploads(dataUrl) {
    const trimmed = dataUrl.trim().replace(/\s/g, "");
    const match = /^data:image\/([\w+.@-]+);base64,(.+)$/i.exec(trimmed);
    const extRaw = match?.[1];
    const b64 = match?.[2];
    if (extRaw === undefined || b64 === undefined) {
        throw new Error("Invalid image data URL");
    }
    let ext = extRaw.toLowerCase();
    if (ext === "jpeg") {
        ext = "jpg";
    }
    ext = ext.replace(/[^a-z0-9]/g, "") || "jpg";
    const buf = Buffer.from(b64, "base64");
    if (!buf.length) {
        throw new Error("Empty image data");
    }
    const name = `${Date.now()}-group.${ext}`;
    await mkdir("uploads", { recursive: true });
    await writeFile(path.join("uploads", name), buf);
    const base = (applicationConfig.BASE_URL ?? "").replace(/\/$/, "");
    return base ? `${base}/${name}` : `/${name}`;
}
function buildMissingImageMessage(req, flat) {
    const img = getImageCandidateFromFlat(flat);
    const emptyAppend = typeof img === "object" &&
        img !== null &&
        !Array.isArray(img) &&
        Object.keys(img).length === 0;
    if (emptyAppend) {
        return 'formData.append("image", {}) is invalid: use React Native { uri, type, name } for the file, and send FormData as the raw request body (not JSON / not { data: formData }) so Content-Type is multipart/form-data with a boundary.';
    }
    if (looksLikeSerializedRnFormData(req)) {
        return "Body looks like FormData serialized as JSON (data._parts). Use axios.put(url, formData) or fetch(..., { body: formData }) without wrapping FormData in an object; only set Authorization (do not set Content-Type) so the client adds multipart boundaries.";
    }
    return 'Image required: multipart field "image" (or coverPhoto / groupImage / profilePicture), or JSON URL / { uri: "https://..." } / data:image/...;base64,...';
}
async function resolveGroupImageUrl(req, flat) {
    if (req.file?.filename) {
        const base = (applicationConfig.BASE_URL ?? "").replace(/\/$/, "");
        return base ? `${base}/${req.file.filename}` : `/${req.file.filename}`;
    }
    const img = getImageCandidateFromFlat(flat);
    if (img == null || img === "") {
        return "";
    }
    if (typeof img === "string") {
        const t = img.trim();
        if (!t) {
            return "";
        }
        if (t.startsWith("data:image")) {
            return await saveBase64ImageToUploads(t);
        }
        return t;
    }
    if (typeof img === "object" && img !== null && !Array.isArray(img)) {
        const rec = img;
        if ("uri" in rec) {
            const u = String(rec.uri ?? "").trim();
            if (u.startsWith("http://") || u.startsWith("https://")) {
                return u;
            }
            if (u.startsWith("data:image")) {
                return await saveBase64ImageToUploads(u);
            }
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
    let image;
    try {
        image = await resolveGroupImageUrl(req, flat);
    }
    catch {
        return next({
            statusCode: 400,
            message: "Invalid image (bad base64 data URL or corrupt payload)",
            stack: new Error().stack,
            status: "400",
        });
    }
    const { name, description, category, groupAdmins, groupMembers } = flat;
    if (!image) {
        return next({
            statusCode: 400,
            message: buildMissingImageMessage(req, flat),
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
    let imageUrl;
    try {
        imageUrl = await resolveGroupImageUrl(req, flat);
    }
    catch {
        return next({
            statusCode: 400,
            message: "Invalid image (bad base64 data URL or corrupt payload)",
            stack: new Error().stack,
            status: "400",
        });
    }
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
    const userId = req.user.id;
    const group = await getGroupService(id, userId);
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
    const { userId, reason } = req.body;
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
    const userId = req.user.id;
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const category = typeof req.query.category === "string" ? req.query.category : "";
    const search = typeof req.query.search === "string" ? req.query.search : "";
    const groups = await getAllGroupsService(page, limit, category, search, userId);
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
export const leaveGroupController = AsyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const userId = req.user.id;
    const group = await leaveGroupService(userId, id);
    if (!group) {
        return next({
            statusCode: 400,
            message: "Failed to leave group",
            stack: new Error().stack,
            status: "400",
        });
    }
    return SuccessHandler(res, { group }, "Group left successfully", "200");
});
export const getMyJoinGroupsController = AsyncHandler(async (req, res, next) => {
    const userId = req.user.id;
    const groups = await getMyJoinRequestsService(userId);
    return SuccessHandler(res, { groups }, "Join requests fetched successfully", "200");
});
//# sourceMappingURL=group.controllers.js.map