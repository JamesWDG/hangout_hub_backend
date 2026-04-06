import { Router } from "express";
import { createUserController, loginUserController } from "../controllers/user.controllers.js";

const userRoutes = Router();

userRoutes.post("/", createUserController);
userRoutes.post("/login", loginUserController);
export default userRoutes;