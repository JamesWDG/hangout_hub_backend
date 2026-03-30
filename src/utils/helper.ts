import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { applicationConstants } from "../constants.js";
export const hashPassword = async (password: string) : Promise<string> => {
    return await bcrypt.hash(password, 10);
};

export const comparePassword = async (password: string, hashedPassword: string) => {
    return await bcrypt.compare(password, hashedPassword);
};

export const generateToken = (userData:{
    id:string,
    email:string 
}) => {
    return jwt.sign({ userData }, applicationConstants.jwtSecret as string, { expiresIn: "1h" });
};