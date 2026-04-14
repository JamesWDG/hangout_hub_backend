import { Router } from "express";
import {  changePasswordController, createUserController, deleteUserController, forgetPasswordController, getUserController, getUserWithSearchController, loginUserController, resendOtpController, resetPasswordController, updateUserController, verifyOtpController } from "../controllers/user.controllers.js";
import { AuthHandler } from "../middlewares/AuthHandler.js";
import { upload } from "../config/fileUpload.js";


const router = Router();

router.post("/register", createUserController);
router.post("/login", loginUserController);
router.post("/forget-password", forgetPasswordController);
router.post("/verify-otp", verifyOtpController);
router.post("/resend-otp", resendOtpController);
router.post("/reset-password", resetPasswordController);

router.get("/get-user-with-search", getUserWithSearchController);
router.use(AuthHandler);
router.delete("/delete-user", deleteUserController);
router.get("/get-auth-user", getUserController);
router.put("/change-password",  changePasswordController);
router.put("/update-user", upload.single("profilePicture"), updateUserController);
export default router;