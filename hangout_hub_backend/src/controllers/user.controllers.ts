import type { NextFunction, Response, Request } from "express";
import { ErrorHandler, SuccessHandler } from "../middlewares/ResponseHandlers.js";
import { createUserService, getUserService } from "../services/user.services.js";
import type { CreateUserBody, LoginUserBody } from "../types/user.types.js";
import AsynHandler from "../utils/AsynHandler.js";
import { comparePassword, generateToken } from "../utils/helper.js";

export const createUserController = AsynHandler(async (req: Request, res: Response , next: NextFunction) => {
    const body = req.body as CreateUserBody | null;
   
    if(!body) {
        return next({
            message: "Body is Required !",
            statusCode: 400,
            res,
            next,
        })
    }
    const { firstName, lastName, phone, email, password } = body ;


    const existingUser = await getUserService(email);
    if(existingUser) {
        return next({
            message: "User already exists !",
            statusCode: 400,
            res,
            
        })
    }


    const user = await createUserService(firstName, lastName, phone, email, password);
    return SuccessHandler(user, "User created successfully", 201, res);
});


export const loginUserController = AsynHandler(async (req: Request, res: Response, next: NextFunction) => {
    const body = req.body as LoginUserBody;

    console.log(req.body)
    if(!body) {
        return next({
            message: "Body is Required !",
            statusCode: 400,
        })
    }
    const { email, password } = body;
    const user = await getUserService(email);
    if(!user) {
        return next({
            message: "User not found !",
            statusCode: 404,
        })
    }
    const isPasswordCorrect = await comparePassword(password, user.password);
    if(!isPasswordCorrect) {
        return next({
            message: "Invalid password !",
            statusCode: 400,
        })
    }

    const token = generateToken({ id: user.id, email: user.email });
    return SuccessHandler({ user, token }, "User logged in successfully", 200, res);
});

export default {createUserController};