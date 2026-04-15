import { Router } from "express";
import { createGroupController, deleteGroupController, getGroupController, addUserToGroupController, removeUserFromGroupController, getAuthUserGroupsController, editUserInGroupController, updateGroupController, getAllGroupsController } from "../controllers/group.controllers.js";
import { AuthHandler } from "../middlewares/AuthHandler.js";
import { optionalImageUpload, upload } from "../config/fileUpload.js";
const router = Router();
router.use(AuthHandler);
router.get("/get-auth-user-groups/groups", getAuthUserGroupsController);
router.post("/create", optionalImageUpload, createGroupController);
router.put("/update/:id", optionalImageUpload, updateGroupController);
router.post("/update/:id", optionalImageUpload, updateGroupController);
router.post("/:id/add-user", addUserToGroupController);
router.post("/:id/remove-user", removeUserFromGroupController);
router.post("/:id/edit-user", upload.single("image"), editUserInGroupController);
router.get("/:id", getGroupController);
router.put("/:id", optionalImageUpload, updateGroupController);
router.delete("/:id", deleteGroupController);
router.get("/public/get/get-all-groups-with-search", getAllGroupsController);
export default router;
//# sourceMappingURL=group.routes.js.map