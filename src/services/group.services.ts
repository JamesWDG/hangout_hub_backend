import type { GroupType } from "../types/group.types.js";
import type { Prisma } from "../../generated/prisma/client.js";
import { prisma } from "../lib/prisma.js";
export const createGroupService = async (groupData: GroupType) => {
    const group = await prisma.group.create({
        data: groupData,
    });
    return group;
};

export const updateGroupService = async (id: string, groupData: GroupType) => {
    const group = await prisma.group.update({
        where: { id },
        data: groupData,
    });
    return group;
};
export const getGroupService = async (id: string, userId: string) => {
    const [group, joinRequest] = await Promise.all([
        prisma.group.findUnique({
            where: { id },
            include: {
                admins: true,
                members: true,
            },
        }),
        prisma.joinRequest.findFirst({
            where: { userId, groupId: id },
            select: { status: true },
        }),
    ]);
    if (!group) {
        return null;
    }
    return {
        ...group,
        isMemberOrAdmin: group.admins.some((a) => a.id === userId) ||
        group.members.some((m) => m.id === userId),
        myJoinRequestStatus:  group.admins.some((a) => a.id === userId) ||
        group.members.some((m) => m.id === userId) ? true:joinRequest?.status ?? false,
    };
};

export const deleteGroupService = async (id: string) => {
    const group = await prisma.group.delete({
        where: { id },
    });
    return group;
};

export const addUserToGroupService = async (id: string, userIds: {id: string}[]) => {
    const group = await prisma.group.update({
        where: { id },
        data: { members: { connect: userIds.map((user: {id: string}) => ({ id: user.id })) } },
    });
    return group;
};


export const removeUserFromGroupService = async (id: string, userId: string) => {
    const group = await prisma.group.update({
        where: { id },
        data: { members: { disconnect: { id: userId } } },
    });
    return group;
};

export const getAuthUserGroupsService = async (userId: string) => {

    const groups = await prisma.group.findMany({
        where: { admins: { some: { id: userId } } },
        include: {
            admins: true,
            members: true,
        },
    });
    return groups;
};


export const editUserInGroupService = async (id: string, data: any) => {
    const group = await prisma.group.update({
        where: { id },
        data,
    });
    return group;
};

export const getAllGroupsService = async (
    page: number,
    limit: number,
    category: string,
    search: string,
    userId: string,
) => {
    const skip = (page - 1) * limit;
    const whereClause: Prisma.GroupWhereInput = {};
    if (category) {
        whereClause.category = { contains: category, mode: "insensitive" };
    }
    if (userId) {
        whereClause.admins = { none: { id: userId } };
    }
    if (search) {
        whereClause.OR = [
            { name: { contains: search, mode: "insensitive" } },
            { description: { contains: search, mode: "insensitive" } },
            { category: { contains: search, mode: "insensitive" } },
        ];
    }

    const groups = await prisma.group.findMany({
        where: whereClause,
        skip,
        take: limit,
        include: {
            admins: true,
            members: true,
        },
    });
    const total = await prisma.group.count({ where: whereClause });

    const groupsWithMembership = await Promise.all(groups.map(async (group) => {
        const joinRequest = await prisma.joinRequest.findFirst({
            where: { userId, groupId: group.id },
            select: { status: true },
        })
        return {
            ...group,
            isMemberOrAdmin:
                group.admins.some((a) => a.id === userId) ||
                group.members.some((m) => m.id === userId),
            myJoinRequestStatus:  group.admins.some((a) => a.id === userId) ||
            group.members.some((m) => m.id === userId) ? true:joinRequest?.status ?? false,
        };
    })) ;
    return groupsWithMembership;
};

export const leaveGroupService = async (userId: string, groupId: string) => {
    const group = await prisma.group.update({
        where: { id: groupId },
        data: { members: { disconnect: { id: userId } } },
    });
    return group;
};

export const getMyJoinRequestsService = async (userId: string) => {
   const groups = await prisma.group.findMany({
    where: { members: { some: { id: userId } } },
    include: {
        admins: true,
        members: true,
    },
   });
   return groups;
};