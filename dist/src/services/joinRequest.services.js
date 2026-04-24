import { prisma } from "../lib/prisma.js";
export const createJoinRequestService = async (userId, groupId, status) => {
    const joinRequest = await prisma.joinRequest.create({
        data: { userId, groupId, status: status ?? "pending" },
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
/** Resolve by join-request id, or by group id + applicant userId (same `:id` as GET /join/:id). */
export const acceptOrRejectJoinRequestService = async (id, status, applicantUserId) => {
    let row = (await prisma.joinRequest.findUnique({ where: { id } })) ??
        (applicantUserId
            ? await prisma.joinRequest.findFirst({
                where: { groupId: id, userId: applicantUserId },
            })
            : null);
    if (!row) {
        return null;
    }
    const joinRequest = await prisma.joinRequest.update({
        where: { id: row.id },
        data: { status },
    });
    if (status === "accepted") {
        await prisma.group.update({
            where: { id: joinRequest.groupId },
            data: { members: { connect: { id: joinRequest.userId } } },
        });
    }
    if (status === "rejected") {
        await prisma.group.update({
            where: { id: joinRequest.groupId },
            data: { members: { disconnect: { id: joinRequest.userId } } },
        });
    }
    return joinRequest;
};
export const deleteJoinRequestService = async (id) => {
    const joinRequest = await prisma.joinRequest.delete({
        where: { id },
    });
    return joinRequest;
};
export const leaveGroupService = async (userId, groupId) => {
    const existing = await prisma.joinRequest.findFirst({
        where: { userId, groupId },
    });
    if (!existing) {
        return null;
    }
    return prisma.joinRequest.delete({
        where: { id: existing.id },
    });
};
export const leaveAdminFromGroupService = async (userId, groupId) => {
    const existing = await prisma.joinRequest.findFirst({
        where: { userId, groupId },
    });
    if (!existing) {
        return null;
    }
    return prisma.joinRequest.delete({
        where: { id: existing.id },
    });
};
//# sourceMappingURL=joinRequest.services.js.map