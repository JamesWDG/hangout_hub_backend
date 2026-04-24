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
const groupImageMultipart = upload.fields([
    { name: "image", maxCount: 1 },
    { name: "coverPhoto", maxCount: 1 },
    { name: "groupImage", maxCount: 1 },
    { name: "profilePicture", maxCount: 1 },
]);
function pickFirstGroupImageFile(files) {
    if (!files || typeof files !== "object" || Array.isArray(files)) {
        return undefined;
    }
    const record = files;
    return (record.image?.[0] ??
        record.coverPhoto?.[0] ??
        record.groupImage?.[0] ??
        record.profilePicture?.[0]);
}
/** Skip multer for JSON/urlencoded so POST/PUT works with `application/json`. */
export const optionalImageUpload = (req, res, next) => {
    const ct = req.headers["content-type"] ?? "";
    if (typeof ct === "string" && ct.includes("multipart/form-data")) {
        return groupImageMultipart(req, res, (err) => {
            if (err) {
                return next(err);
            }
            const file = pickFirstGroupImageFile(req.files);
            if (file) {
                Object.assign(req, { file });
            }
            next();
        });
    }
    next();
};
//# sourceMappingURL=fileUpload.js.map