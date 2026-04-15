import { prisma } from "../lib/prisma.js";
export const createGroupService = async (groupData) => {
    const group = await prisma.group.create({
        data: groupData,
    });
    return group;
};
export const updateGroupService = async (id, groupData) => {
    const group = await prisma.group.update({
        where: { id },
        data: groupData,
    });
    return group;
};
export const getGroupService = async (id) => {
    const group = await prisma.group.findUnique({
        where: { id },
        include: {
            admins: true,
            members: true,
        },
    });
    return group;
};
export const deleteGroupService = async (id) => {
    const group = await prisma.group.delete({
        where: { id },
    });
    return group;
};
export const addUserToGroupService = async (id, userIds) => {
    const group = await prisma.group.update({
        where: { id },
        data: { members: { connect: userIds.map((user) => ({ id: user.id })) } },
    });
    return group;
};
export const removeUserFromGroupService = async (id, userId) => {
    const group = await prisma.group.update({
        where: { id },
        data: { members: { disconnect: { id: userId } } },
    });
    return group;
};
export const getAuthUserGroupsService = async (userId) => {
    const groups = await prisma.group.findMany({
        where: { admins: { some: { id: userId } } },
        include: {
            admins: true,
            members: true,
        },
    });
    return groups;
};
export const editUserInGroupService = async (id, data) => {
    const group = await prisma.group.update({
        where: { id },
        data,
    });
    return group;
};
export const getAllGroupsService = async (page, limit, category, search) => {
    const skip = (page - 1) * limit;
    const whereClause = {
        ...(category ? { category: { contains: category, mode: "insensitive" } } : {}),
        ...(search ? {
            OR: [
                { name: { contains: search, mode: "insensitive" } },
                { description: { contains: search, mode: "insensitive" } },
                { category: { contains: search, mode: "insensitive" } },
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
//# sourceMappingURL=group.services.js.map