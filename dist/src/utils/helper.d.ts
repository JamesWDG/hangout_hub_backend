import jwt from "jsonwebtoken";
import type { User } from "../types/user.types.js";
export declare const comparePassword: (password: string, hashedPassword: string) => Promise<boolean>;
export declare const hashPassword: (password: string) => Promise<string>;
export declare const verifyToken: (token: string) => Promise<string | jwt.JwtPayload | null>;
export declare const generateToken: (userData: Omit<User, "password"> & {
    id: string;
}) => Promise<string>;
export declare const generateOtp: (userId: string) => Promise<string>;
//# sourceMappingURL=helper.d.ts.map