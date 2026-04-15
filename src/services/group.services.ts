import type { GroupType } from "../types/group.types.js";
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
export const getGroupService = async (id: string) => {
    const group = await prisma.group.findUnique({
        where: { id },
        include: {
            admins: true,
            members: true,
        },
    });
    return group;
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

export const getAllGroupsService = async (page: number, limit: number, category: string , search: string) => {
    const skip = (page - 1) * limit;
    const whereClause = {
        ...(category ? { category: { contains: category, mode: "insensitive" as const } } : {}),
        ...(search ? {
            OR: [
                { name: { contains: search, mode: "insensitive" as const } },
                { description: { contains: search, mode: "insensitive" as const } },
                { category: { contains: search, mode: "insensitive" as const } },
            ],
        } : {}),
    };

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

    return {
        groups,
        total,
        page,
        limit,
    };
};