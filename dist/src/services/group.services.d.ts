import type { GroupType } from "../types/group.types.js";
export declare const createGroupService: (groupData: GroupType) => Promise<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    image: string;
    description: string;
    category: string;
}>;
export declare const updateGroupService: (id: string, groupData: GroupType) => Promise<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    image: string;
    description: string;
    category: string;
}>;
export declare const getGroupService: (id: string) => Promise<({
    admins: {
        id: string;
        email: string;
        password: string;
        firstName: string;
        lastName: string;
        phone: string;
        profilePicture: string | null;
        isVerified: boolean;
        bio: string | null;
        eventsOfInterest: string | null;
        createdAt: Date;
        updatedAt: Date;
    }[];
    members: {
        id: string;
        email: string;
        password: string;
        firstName: string;
        lastName: string;
        phone: string;
        profilePicture: string | null;
        isVerified: boolean;
        bio: string | null;
        eventsOfInterest: string | null;
        createdAt: Date;
        updatedAt: Date;
    }[];
} & {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    image: string;
    description: string;
    category: string;
}) | null>;
export declare const deleteGroupService: (id: string) => Promise<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    image: string;
    description: string;
    category: string;
}>;
export declare const addUserToGroupService: (id: string, userIds: {
    id: string;
}[]) => Promise<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    image: string;
    description: string;
    category: string;
}>;
export declare const removeUserFromGroupService: (id: string, userId: string) => Promise<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    image: string;
    description: string;
    category: string;
}>;
export declare const getAuthUserGroupsService: (userId: string) => Promise<({
    admins: {
        id: string;
        email: string;
        password: string;
        firstName: string;
        lastName: string;
        phone: string;
        profilePicture: string | null;
        isVerified: boolean;
        bio: string | null;
        eventsOfInterest: string | null;
        createdAt: Date;
        updatedAt: Date;
    }[];
    members: {
        id: string;
        email: string;
        password: string;
        firstName: string;
        lastName: string;
        phone: string;
        profilePicture: string | null;
        isVerified: boolean;
        bio: string | null;
        eventsOfInterest: string | null;
        createdAt: Date;
        updatedAt: Date;
    }[];
} & {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    image: string;
    description: string;
    category: string;
})[]>;
export declare const editUserInGroupService: (id: string, data: any) => Promise<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    image: string;
    description: string;
    category: string;
}>;
export declare const getAllGroupsService: (page: number, limit: number, category: string, search: string) => Promise<({
    admins: {
        id: string;
        email: string;
        password: string;
        firstName: string;
        lastName: string;
        phone: string;
        profilePicture: string | null;
        isVerified: boolean;
        bio: string | null;
        eventsOfInterest: string | null;
        createdAt: Date;
        updatedAt: Date;
    }[];
    members: {
        id: string;
        email: string;
        password: string;
        firstName: string;
        lastName: string;
        phone: string;
        profilePicture: string | null;
        isVerified: boolean;
        bio: string | null;
        eventsOfInterest: string | null;
        createdAt: Date;
        updatedAt: Date;
    }[];
} & {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    image: string;
    description: string;
    category: string;
})[]>;
//# sourceMappingURL=group.services.d.ts.map