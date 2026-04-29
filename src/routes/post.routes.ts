import { Router } from "express";
import {
  createPostController,
  getAuthUserPostsController,
  getPostsController,
  getSinglePostController,
} from "../controllers/post.controllers.js";
import { AuthHandler } from "../middlewares/AuthHandler.js";
import { optionalImageUpload } from "../config/fileUpload.js";

const router = Router();

router.use(AuthHandler);
router.post("/create", optionalImageUpload, createPostController);
router.get("/list", getPostsController);
router.get("/me", getAuthUserPostsController);
router.get("/:id", getSinglePostController);

export default router;
