import { Router } from "express";
import { createGroupController, deleteGroupController, getGroupController, addUserToGroupController, removeUserFromGroupController, getAuthUserGroupsController } from "../controllers/group.controllers.js";
import { AuthHandler } from "../middlewares/AuthHandler.js";

const router = Router();

router.use(AuthHandler);
router.post("/create", createGroupController);
router.get("/:id", getGroupController);
router.delete("/:id", deleteGroupController);
router.post("/:id/add-user", addUserToGroupController);
router.post("/:id/remove-user", removeUserFromGroupController);
router.get("/get-auth-user-groups", getAuthUserGroupsController);
export default router;