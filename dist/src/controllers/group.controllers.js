import { AsyncHandler } from "../middlewares/AsyncHandler.js";
import { addUserToGroupService, createGroupService, deleteGroupService, editUserInGroupService, getAuthUserGroupsService, getGroupService, removeUserFromGroupService, updateGroupService } from "../services/group.services.js";
import { SuccessHandler } from "../middlewares/SuccessHandler.js";
import { applicationConfig } from "../constant.js";
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
    let image = "";
    if (req.file && req.file.filename) {
        image = `${applicationConfig.BASE_URL}/${req.file.filename}`;
    }
    const { name, description, category, groupAdmins, groupMembers } = req.body;
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
    let image = "";
    if (req.file && req.file.filename) {
        image = `${applicationConfig.BASE_URL}/${req.file.filename}`;
    }
    const { name, description, category, groupAdmins, groupMembers } = req.body;
    const data = {
        name,
        description,
        category,
        image,
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
//# sourceMappingURL=group.controllers.js.map