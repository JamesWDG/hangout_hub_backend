import type { GroupType } from "../types/group.types.js";
export declare const createGroupService: (groupData: GroupType) => Promise<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    description: string;
    category: string;
    image: string;
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
    description: string;
    category: string;
    image: string;
}) | null>;
export declare const deleteGroupService: (id: string) => Promise<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    description: string;
    category: string;
    image: string;
}>;
export declare const addUserToGroupService: (id: string, userId: string) => Promise<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    description: string;
    category: string;
    image: string;
}>;
export declare const removeUserFromGroupService: (id: string, userId: string) => Promise<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    description: string;
    category: string;
    image: string;
}>;
//# sourceMappingURL=group.services.d.ts.map