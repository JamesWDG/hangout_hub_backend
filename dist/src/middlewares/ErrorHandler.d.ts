import type { NextFunction, Response, Request } from "express";
import type { ErrorType } from "../types/error.types.js";
export declare const ErrorHandler: (err: Error | ErrorType, req: Request, res: Response, next: NextFunction) => void;
export default ErrorHandler;
//# sourceMappingURL=ErrorHandler.d.ts.map