import type { GroupType } from "../types/group.types.js";
import { prisma } from "../lib/prisma.js";
export const createGroupService = async (groupData: GroupType) => {
    const group = await prisma.group.create({
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