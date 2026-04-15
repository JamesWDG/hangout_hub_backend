import { AsyncHandler } from "./AsyncHandler.js";
import { verifyToken } from "../utils/helper.js";
const unauthorized = (message = "Unauthorized") => ({
    statusCode: 401,
    message,
    stack: new Error().stack,
    status: "401",
});
export const AuthHandler = AsyncHandler(async (req, _res, next) => {
    const authHeader = req.headers.authorization;
    const token = typeof authHeader === "string" && authHeader.startsWith("Bearer ")
        ? authHeader.slice("Bearer ".length).trim()
        : undefined;
    if (!token) {
        return next(unauthorized());
    }
    const decoded = await verifyToken(token);
    if (!decoded || typeof decoded === "string") {
        return next(unauthorized());
    }
    const payload = decoded;
    if (!payload.userData) {
        return next(unauthorized());
    }
    req.user = payload.userData;
    return next();
});
//# sourceMappingURL=AuthHandler.js.map