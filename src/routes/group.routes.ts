import { Router } from "express";
import { createGroupController, deleteGroupController, getGroupController, addUserToGroupController, removeUserFromGroupController, getAuthUserGroupsController, editUserInGroupController } from "../controllers/group.controllers.js";
import { AuthHandler } from "../middlewares/AuthHandler.js";
import { upload } from "../config/fileUpload.js";

const router = Router();

router.use(AuthHandler);
router.get("/:id", getGroupController);
router.get("/get-auth-user-groups/groups", getAuthUserGroupsController);
router.post("/create",upload.single("image"),createGroupController);
router.delete("/:id", deleteGroupController);
router.post("/:id/add-user", addUserToGroupController);
router.post("/:id/remove-user", removeUserFromGroupController);
router.post("/:id/edit-user", upload.single("image"), editUserInGroupController);
export default router;