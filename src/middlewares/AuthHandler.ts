import type { NextFunction, Request, Response } from "express";
import { AsyncHandler } from "./AsyncHandler.js";
import { verifyToken } from "../utils/helper.js";
import type { DecodedToken } from "../types/auth.types.js";

const unauthorized = (message = "Unauthorized") => ({
    statusCode: 401,
    message,
    stack: new Error().stack,
    status: "401",
});

export const AuthHandler = AsyncHandler(async (req: Request, _res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    const token =
        typeof authHeader === "string" && authHeader.startsWith("Bearer ")
            ? authHeader.slice("Bearer ".length).trim()
            : undefined;

    if (!token) {
        return next(unauthorized());
    }

    const decoded = await verifyToken(token);
    if (!decoded || typeof decoded === "string") {
        return next(unauthorized());
    }

    const payload = decoded as DecodedToken;
    if (!payload.userData) {
        return next(unauthorized());
    }

    (req as Request & { user: DecodedToken["userData"] }).user = payload.userData;
    return next();
});