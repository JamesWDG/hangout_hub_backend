export declare const createJoinRequestService: (userId: string, groupId: string, status: string) => Promise<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    status: string;
    userId: string;
    groupId: string;
}>;
export declare const getAllJoinRequestsForAGroupService: (groupId: string) => Promise<({
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
} & {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    status: string;
    userId: string;
    groupId: string;
})[]>;
export declare const acceptOrRejectJoinRequestService: (id: string, status: string) => Promise<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    status: string;
    userId: string;
    groupId: string;
}>;
export declare const deleteJoinRequestService: (id: string) => Promise<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    status: string;
    userId: string;
    groupId: string;
}>;
//# sourceMappingURL=joinRequest.services.d.ts.map