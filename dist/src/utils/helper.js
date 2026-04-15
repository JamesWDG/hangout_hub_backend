import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const comparePassword = async (password, hashedPassword) => {
    return await bcrypt.compare(password, hashedPassword);
};
export const hashPassword = async (password) => {
    return await bcrypt.hash(password, 10);
};
export const verifyToken = async (token) => {
    const secret = process.env.JWT_SECRET;
    if (!secret) {
        return null;
    }
    try {
        return jwt.verify(token, secret);
    }
    catch {
        return null;
    }
};
export const generateToken = async (userData) => {
    return await jwt.sign({ userData }, process.env.JWT_SECRET, { expiresIn: "1d" });
};
export const generateOtp = async (userId) => {
    // const otp = Math.floor(100000 + Math.random() * 900000);
    // return otp;
    return "1234";
};
//# sourceMappingURL=helper.js.map