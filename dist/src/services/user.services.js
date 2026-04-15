import { prisma } from "../lib/prisma.js";
export const createUser = async (userData) => {
    const user = await prisma.user.create({
        data: userData,
    });
    return user;
};
export const getUserByEmail = async (email) => {
    const user = await prisma.user.findUnique({
        where: { email },
    });
    return user;
};
export const getUserById = async (id) => {
    const user = await prisma.user.findUnique({
        where: { id },
    });
    return user;
};
export const updateUserService = async (id, data) => {
    const user = await prisma.user.update({
        where: { id },
        data,
    });
    return user;
};
export const createOtpService = async (email, otp) => {
    const otpData = await prisma.otp.create({
        data: {
            email,
            otp,
        },
    });
    return otpData;
};
export const deleteOtpService = async (email) => {
    const otpData = await prisma.otp.delete({
        where: { email },
    });
    return otpData;
};
export const getOtpBtEmail = async (email) => {
    const otpData = await prisma.otp.findUnique({
        where: { email },
    });
    return otpData;
};
export const deleteUserService = async (id) => {
    const user = await prisma.user.delete({
        where: { id },
    });
    return user;
};
export const getUserWithSearchService = async (search) => {
    const users = await prisma.user.findMany({
        where: {
            OR: [
                { firstName: { contains: search, mode: "insensitive" } },
                { lastName: { contains: search, mode: "insensitive" } },
                { email: { contains: search, mode: "insensitive" } },
                { phone: { contains: search, mode: "insensitive" } },
            ],
        },
    });
    return users;
};
//# sourceMappingURL=user.services.js.map