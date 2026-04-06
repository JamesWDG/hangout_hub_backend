import { prisma } from "../lib/prisma.js";
export const createJoinRequestService = async (userId, groupId, status) => {
    const joinRequest = await prisma.joinRequest.create({
        data: { userId, groupId, status },
    });
    return joinRequest;
};
export const getAllJoinRequestsForAGroupService = async (groupId) => {
    const joinRequests = await prisma.joinRequest.findMany({
        where: { groupId },
        include: {
            user: true,
            group: true,
        },
    });
    return joinRequests;
};
export const acceptOrRejectJoinRequestService = async (id, status) => {
    const joinRequest = await prisma.joinRequest.update({
        where: { id },
        data: { status },
    });
    return joinRequest;
};
export const deleteJoinRequestService = async (id) => {
    const joinRequest = await prisma.joinRequest.delete({
        where: { id },
    });
    return joinRequest;
};
//# sourceMappingURL=joinRequest.services.js.map