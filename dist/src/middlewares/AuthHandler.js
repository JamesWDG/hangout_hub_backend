import { AsyncHandler } from "./AsyncHandler.js";
import { verifyToken } from "../utils/helper.js";
export const AuthHandler = AsyncHandler(async (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
        return next({
            statusCode: 401,
            message: "Unauthorized",
            stack: new Error().stack,
            status: "401",
        });
    }
    const decoded = await verifyToken(token);
    if (!decoded) {
        return next({
            statusCode: 401,
            message: "Unauthorized",
            stack: new Error().stack,
            status: "401",
        });
    }
    req.user = decoded.userData;
    return next();
});
//# sourceMappingURL=AuthHandler.js.map