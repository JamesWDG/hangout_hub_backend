import { AsyncHandler } from "../middlewares/AsyncHandler.js";
import { SuccessHandler } from "../middlewares/SuccessHandler.js";
import { acceptOrRejectJoinRequestService, createJoinRequestService, deleteJoinRequestService, getAllJoinRequestsForAGroupService, leaveGroupService } from "../services/joinRequest.services.js";
export const createJoinRequestController = AsyncHandler(async (req, res, next) => {
    const { userId, groupId, status } = req.body;
    const joinRequest = await createJoinRequestService(userId, groupId, status);
    return SuccessHandler(res, { joinRequest }, "Join request created successfully", "201");
});
export const leaveGroupController = AsyncHandler(async (req, res, next) => {
    const { userId, groupId } = req.body;
    console.log(userId, groupId);
    const joinRequest = await leaveGroupService(userId, groupId);
    console.log(joinRequest);
    if (!joinRequest) {
        return next({
            statusCode: 400,
            message: "Failed to leave group",
            stack: new Error().stack,
            status: "400",
        });
    }
    return SuccessHandler(res, { joinRequest }, "Group left successfully", "200");
});
export const getAllJoinRequestsForAGroupController = AsyncHandler(async (req, res, next) => {
    const { id } = req.params;
    if (!id) {
        return next({
            statusCode: 400,
            message: "Group ID is required",
            stack: new Error().stack,
            status: "400",
        });
    }
    const joinRequests = await getAllJoinRequestsForAGroupService(id);
    return SuccessHandler(res, { joinRequests }, "All join requests fetched successfully", "200");
});
export const acceptOrRejectJoinRequestController = AsyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const { status } = req.body;
    const joinRequest = await acceptOrRejectJoinRequestService(id, status);
    if (!joinRequest) {
        return next({
            statusCode: 400,
            message: "Failed to accept or reject join request",
            stack: new Error().stack,
            status: "400",
        });
    }
    await deleteJoinRequestService(id);
    return SuccessHandler(res, { joinRequest }, "Join request accepted or rejected successfully", "200");
});
//# sourceMappingURL=joinRequest.controllers.js.map