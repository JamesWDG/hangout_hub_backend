import { AsyncHandler } from "../middlewares/AsyncHandler.js";
import { addUserToGroupService, createGroupService, deleteGroupService, getGroupService, removeUserFromGroupService } from "../services/group.services.js";
import { SuccessHandler } from "../middlewares/SuccessHandler.js";
export const createGroupController = AsyncHandler(async (req, res, next) => {
    const { name, description, category, image, groupAdmins, groupMembers } = req.body;
    const data = {
        name,
        description,
        category,
        image,
        admins: { connect: groupAdmins.map((admin) => ({ id: admin.id })) },
        members: { connect: groupMembers.map((member) => ({ id: member.id })) },
    };
    const group = await createGroupService(data);
    return SuccessHandler(res, { group }, "Group created successfully", "201");
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
    const { userId } = req.body;
    const group = await addUserToGroupService(id, userId);
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
//# sourceMappingURL=group.controllers.js.map