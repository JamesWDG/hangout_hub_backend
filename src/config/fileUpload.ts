import type { NextFunction, Request, Response } from "express";
import multer from "multer";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        const unique = `${Date.now()}-${file.originalname}`;
        cb(null, unique);
    },
});

export const upload = multer({ storage });

/** Skip multer for JSON/urlencoded so POST/PUT update works with `application/json`. */
export const optionalImageUpload = (req: Request, res: Response, next: NextFunction) => {
    const ct = req.headers["content-type"] ?? "";
    if (typeof ct === "string" && ct.includes("multipart/form-data")) {
        return upload.single("image")(req, res, next);
    }
    next();
};