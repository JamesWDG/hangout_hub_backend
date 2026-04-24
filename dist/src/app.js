import express from "express";
import ErrorHandler from "./middlewares/ErrorHandler.js";
import userRoutes from "./routes/user.routes.js";
import groupRoutes from "./routes/group.routes.js";
import joinRequestRoutes from "./routes/joinRequest.routes.js";
const app = express();
app.use(express.json({ limit: "12mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static('uploads'));
const mountApi = (base) => {
    app.use(`${base}/user`, userRoutes);
    app.use(`${base}/group`, groupRoutes);
    app.use(`${base}/join`, joinRequestRoutes);
};
// Full path: /api/v1/...
mountApi("/api/v1");
// // If nginx uses `proxy_pass http://127.0.0.1:PORT/;` the /api prefix is stripped and Node sees /v1/... only
// mountApi("/v1");
app.use(ErrorHandler);
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Not found",
        method: req.method,
        path: req.path,
        originalUrl: req.originalUrl,
    });
});
export default app;
//# sourceMappingURL=app.js.map