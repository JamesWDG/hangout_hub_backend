import { NotificationType, PostType } from "../../generated/prisma/enums.js";
type CreatePostType = "SIMPLE" | "EVENT" | "POLL";
type EventRoleInput = {
    roleName: string;
    roleDescription: string;
};
type CreatePostInput = {
    userId: string;
    groupId: string;
    type: CreatePostType;
    taggedUserIds: string[];
    simplePost?: {
        content: string;
        image?: string;
    };
    eventPost?: {
        eventName: string;
        eventDescription: string;
        eventStartDate: Date;
        eventEndDate: Date;
        eventLocation: Record<string, unknown>;
        notificationType: NotificationType;
        eventImage?: string;
        notes?: string;
        eventRoles?: EventRoleInput[];
    };
    poll?: {
        pollQuestion: string;
        pollEndDate: Date;
        pollOptions: string[];
    };
};
export declare const createPostService: (input: CreatePostInput) => Promise<({
    user: {
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
    };
    group: {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        image: string;
        description: string;
        category: string;
    };
    simplePost: {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        image: string | null;
        content: string;
        postId: string;
    } | null;
    eventPost: ({
        eventRoles: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            roleName: string;
            roleDescription: string;
            eventPostId: string;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        postId: string;
        eventName: string;
        eventDescription: string;
        eventStartDate: Date;
        eventEndDate: Date;
        eventLocation: import("@prisma/client/runtime/client").JsonValue;
        notificationType: NotificationType;
        eventImage: string | null;
        notes: string | null;
    }) | null;
    poll: ({
        pollOptions: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            option: string;
            pollId: string;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        postId: string;
        pollQuestion: string;
        pollEndDate: Date;
    }) | null;
    taggedUsers: {
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
    type: PostType;
    userId: string;
    groupId: string;
}) | null>;
export declare const getSinglePostService: (postId: string) => Promise<({
    user: {
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
    };
    group: {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        image: string;
        description: string;
        category: string;
    };
    simplePost: {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        image: string | null;
        content: string;
        postId: string;
    } | null;
    eventPost: ({
        eventRoles: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            roleName: string;
            roleDescription: string;
            eventPostId: string;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        postId: string;
        eventName: string;
        eventDescription: string;
        eventStartDate: Date;
        eventEndDate: Date;
        eventLocation: import("@prisma/client/runtime/client").JsonValue;
        notificationType: NotificationType;
        eventImage: string | null;
        notes: string | null;
    }) | null;
    poll: ({
        pollOptions: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            option: string;
            pollId: string;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        postId: string;
        pollQuestion: string;
        pollEndDate: Date;
    }) | null;
    taggedUsers: {
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
    type: PostType;
    userId: string;
    groupId: string;
}) | null>;
export declare const getPostsService: (page: number, limit: number, groupId?: string, postType?: string) => Promise<{
    posts: ({
        user: {
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
        };
        group: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            image: string;
            description: string;
            category: string;
        };
        simplePost: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            image: string | null;
            content: string;
            postId: string;
        } | null;
        eventPost: ({
            eventRoles: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                roleName: string;
                roleDescription: string;
                eventPostId: string;
            }[];
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            postId: string;
            eventName: string;
            eventDescription: string;
            eventStartDate: Date;
            eventEndDate: Date;
            eventLocation: import("@prisma/client/runtime/client").JsonValue;
            notificationType: NotificationType;
            eventImage: string | null;
            notes: string | null;
        }) | null;
        poll: ({
            pollOptions: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                option: string;
                pollId: string;
            }[];
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            postId: string;
            pollQuestion: string;
            pollEndDate: Date;
        }) | null;
        taggedUsers: {
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
        type: PostType;
        userId: string;
        groupId: string;
    })[];
    pagination: {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
    };
}>;
export declare const getAuthUserPostsService: (userId: string, page: number, limit: number) => Promise<{
    posts: ({
        user: {
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
        };
        group: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            image: string;
            description: string;
            category: string;
        };
        simplePost: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            image: string | null;
            content: string;
            postId: string;
        } | null;
        eventPost: ({
            eventRoles: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                roleName: string;
                roleDescription: string;
                eventPostId: string;
            }[];
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            postId: string;
            eventName: string;
            eventDescription: string;
            eventStartDate: Date;
            eventEndDate: Date;
            eventLocation: import("@prisma/client/runtime/client").JsonValue;
            notificationType: NotificationType;
            eventImage: string | null;
            notes: string | null;
        }) | null;
        poll: ({
            pollOptions: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                option: string;
                pollId: string;
            }[];
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            postId: string;
            pollQuestion: string;
            pollEndDate: Date;
        }) | null;
        taggedUsers: {
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
        type: PostType;
        userId: string;
        groupId: string;
    })[];
    pagination: {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
    };
}>;
export {};
//# sourceMappingURL=post.service.d.ts.map