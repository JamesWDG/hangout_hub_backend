import type { User } from "../types/user.types.js";
export declare const createUser: (userData: User) => Promise<{
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
}>;
export declare const getUserByEmail: (email: string) => Promise<{
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
} | null>;
export declare const getUserById: (id: string) => Promise<{
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
} | null>;
export declare const updateUserService: (id: string, data: Partial<User>) => Promise<{
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
}>;
export declare const createOtpService: (email: string, otp: string) => Promise<{
    id: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
    otp: string;
}>;
export declare const deleteOtpService: (email: string) => Promise<{
    id: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
    otp: string;
}>;
export declare const getOtpBtEmail: (email: string) => Promise<{
    id: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
    otp: string;
} | null>;
export declare const deleteUserService: (id: string) => Promise<{
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
}>;
export declare const getUserWithSearchService: (search: string) => Promise<{
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
}[]>;
//# sourceMappingURL=user.services.d.ts.map