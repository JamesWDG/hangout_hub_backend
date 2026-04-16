import { prisma } from "../lib/prisma.js";

export const createJoinRequestService = async (userId: string, groupId: string, status: string) => {
    const joinRequest = await prisma.joinRequest.create({
        data: { userId, groupId, status },
    });
    return joinRequest;
};

export const getAllJoinRequestsForAGroupService = async (groupId: string) => {
    const joinRequests = await prisma.joinRequest.findMany({
        where: { groupId },
        include: {
            user: true,
            group: true,
        },
    });
    return joinRequests;
};
export const acceptOrRejectJoinRequestService = async (id: string, status: string) => {
    const joinRequest = await prisma.joinRequest.update({
        where: { id },
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

export const deleteJoinRequestService = async (id: string) => {
    const joinRequest = await prisma.joinRequest.delete({
        where: { id },
    });
    return joinRequest;
};

export const leaveGroupService = async (userId: string, groupId: string) => {
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

export const leaveAdminFromGroupService = async (userId: string, groupId: string) => {
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