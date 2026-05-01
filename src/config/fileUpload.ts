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

/** Accepts any field name for the create-post image (clients vary: `file`, `image`, RN blobs, etc.). */
const optionalImageParser = multer({
    storage,
    limits: {
        files: 12,
        fileSize: 15 * 1024 * 1024,
    },
});

function pickOptionalUploadFile(files: Express.Multer.File[] | undefined): Express.Multer.File | undefined {
    if (!files?.length) {
        return undefined;
    }
    const image = files.find((f) => f.mimetype.startsWith("image/"));
    return image ?? files[0];
}

/** Skip multer for JSON/urlencoded so POST/PUT update works with `application/json`. */
export const optionalImageUpload = (req: Request, res: Response, next: NextFunction) => {
    const ct = req.headers["content-type"] ?? "";
    if (typeof ct === "string" && ct.includes("multipart/form-data")) {
        return optionalImageParser.any()(req, res, (err) => {
            if (err) {
                return next(err);
            }
            const files = req.files as Express.Multer.File[] | undefined;
            const file = pickOptionalUploadFile(files);
            if (file) {
                (req as Request & { file: Express.Multer.File }).file = file;
            }
            return next();
        });
    }
    next();
};
