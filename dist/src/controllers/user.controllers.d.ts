import type { NextFunction, Response, Request } from "express";
export declare const createUserController: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const loginUserController: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const getUserController: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const forgetPasswordController: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const verifyOtpController: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const resendOtpController: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const resetPasswordController: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const changePasswordController: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const updateUserController: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const deleteUserController: (req: Request, res: Response, next: NextFunction) => Promise<void>;
//# sourceMappingURL=user.controllers.d.ts.map