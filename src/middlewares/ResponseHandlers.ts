import type { NextFunction, Response } from "express";

export const SuccessHandler = (data: any, message: string, statusCode: number = 200 , res: Response) => {
    return res.status(statusCode).json({
        success: true,
        message: message,
        data: data,
    });
};
export const ErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    return res.status(parseInt(err.statusCode as string) || 500).json({
        success: false,
        message: err.message,
        data: null,
    });
};