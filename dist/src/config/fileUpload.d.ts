import type { NextFunction, Request, Response } from "express";
import multer from "multer";
export declare const upload: multer.Multer;
/** Skip multer for JSON/urlencoded so POST/PUT update works with `application/json`. */
export declare const optionalImageUpload: (req: Request, res: Response, next: NextFunction) => unknown;
//# sourceMappingURL=fileUpload.d.ts.map