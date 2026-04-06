import { prisma } from "../lib/prisma.js";
import { hashPassword } from "../utils/helper.js";

export const createUserService = async (firstName: string, lastName: string, phone: string, email: string, password: string) => {
    const hashedPassword = await hashPassword(password);
    const user = await prisma.user.create({
        data: { firstName, lastName, phone, email, password: hashedPassword },
    });
    return user;
};


export const getUserService = async (email: string) => {
    const user = await prisma.user.findUnique({
        where: { email },
    });
    return user;
};