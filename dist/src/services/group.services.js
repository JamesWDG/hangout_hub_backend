import { prisma } from "../lib/prisma.js";
export const createGroupService = async (groupData) => {
    const group = await prisma.group.create({
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
export const addUserToGroupService = async (id, userId) => {
    const group = await prisma.group.update({
        where: { id },
        data: { members: { connect: { id: userId } } },
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
//# sourceMappingURL=group.services.js.map