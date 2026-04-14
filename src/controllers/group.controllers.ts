import type { NextFunction  , Response , Request} from "express";
import { AsyncHandler } from "../middlewares/AsyncHandler.js";
import type { GroupType } from "../types/group.types.js";
import { addUserToGroupService, createGroupService, deleteGroupService, editUserInGroupService, getAuthUserGroupsService, getGroupService, removeUserFromGroupService, updateGroupService } from "../services/group.services.js";
import { SuccessHandler } from "../middlewares/SuccessHandler.js";
import { applicationConfig } from "../constant.js";

export const createGroupController = AsyncHandler(async (req: Request, res: Response , next: NextFunction) => {

    let image = "";
    if (req.file && req.file.filename) {
      image = `${applicationConfig.BASE_URL}/${req.file.filename}`;
    }
    const { name, description, category  , groupAdmins , groupMembers} : GroupType = req.body as GroupType;
    const data = {
        name ,
        description,
        category,
        image,
        admins:{connect : JSON.parse(groupAdmins as unknown as any).map((admin: any) => ({id: admin.id}))},
        members:{connect : JSON.parse(groupMembers as unknown as any).map((member: any) => ({id: member.id}))},
    }
    const group = await createGroupService(data as unknown as GroupType);
    return SuccessHandler(res, { group }, "Group created successfully", "201");
});

export const updateGroupController = AsyncHandler(async (req: Request, res: Response , next: NextFunction) => {
    const { id } = req.params;
    let image = "";
    if (req.file && req.file.filename) {
        image = `${applicationConfig.BASE_URL}/${req.file.filename}`;
    }
    const { name, description, category, groupAdmins, groupMembers } : GroupType = req.body as GroupType;
    const data = {
        name,
        description,
        category,
        image,
        admins:{connect : JSON.parse(groupAdmins as unknown as any).map((admin: any) => ({id: admin.id}))},
        members:{connect : JSON.parse(groupMembers as unknown as any).map((member: any) => ({id: member.id}))},
    }
    const group = await updateGroupService(id as string, data as unknown as GroupType);
    if(!group){
        return next({
            statusCode: 400,
            message: "Failed to update group",
            stack: new Error().stack,
            status: "400",
        });
    }
    return SuccessHandler(res, { group }, "Group updated successfully", "200");
});

export const getGroupController = AsyncHandler(async (req: Request, res: Response , next: NextFunction) => {
    const { id } = req.params;
    const group = await getGroupService (id as string);
    if(!group){
        return next({
            statusCode: 400,
            message: "Group not found",
            stack: new Error().stack,
            status: "400",
        });
    }
    return SuccessHandler(res, { group }, "Group fetched successfully", "200");
});

export const deleteGroupController = AsyncHandler(async (req: Request, res: Response , next: NextFunction) => {
    const { id } = req.params;
    const group = await deleteGroupService(id as string);
    if(!group){
        return next({
            statusCode: 400,
            message: "Group not found",
            stack: new Error().stack,
            status: "400",
        });
    }
    return SuccessHandler(res, { group }, "Group deleted successfully", "200");
});

export const addUserToGroupController = AsyncHandler(async (req: Request, res: Response , next: NextFunction) => {
    const { id } = req.params;
    const { userIds } : {userIds: {id: string}[]} = req.body as {userIds: {id: string}[]};
    const group = await addUserToGroupService(id as string, userIds);
    if(!group){
        return next({
            statusCode: 400,
            message: "Failed to add user to group",
            stack: new Error().stack,
            status: "400",
        });
    }
    return SuccessHandler(res, { group }, "User added to group successfully", "200");
});

export const removeUserFromGroupController = AsyncHandler(async (req: Request, res: Response , next: NextFunction) => {
    const { id } = req.params;
    const { userId } = req.body;
    const group = await removeUserFromGroupService(id as string, userId as string);
    if(!group){
        return next({
            statusCode: 400,
            message: "Failed to remove user from group",
            stack: new Error().stack,
            status: "400",
        });
    }
    return SuccessHandler(res, { group }, "User removed from group successfully", "200");
});

export const getAuthUserGroupsController = AsyncHandler(async (req: Request, res: Response , next: NextFunction) => {
    const userId = (req as Request & { user: { id: string } }).user.id;
   
    const groups = await getAuthUserGroupsService(userId);
    if(!groups){
        return next({
            statusCode: 400,
            message: "Failed to fetch groups",
            stack: new Error().stack,
            status: "400",
        });
    }
    return SuccessHandler(res, { groups }, "Groups fetched successfully", "200");
});


export const editUserInGroupController = AsyncHandler(async (req: Request, res: Response , next: NextFunction) => {
    const { id } = req.params;
    const  userId  = (req as any).user?.id;
    const data =  req.body


    if(req.file && req.file.filename){
        data.image = `${process.env.BASE_URL}/${req.file.filename}`;
    }
    const group = await editUserInGroupService(id as string,data);
    if(!group){
        return next({
            statusCode: 400,
            message: "Failed to edit user in group",
            stack: new Error().stack,
            status: "400",
        });
    }    return SuccessHandler(res, { group }, "User edited in group successfully", "200");
});