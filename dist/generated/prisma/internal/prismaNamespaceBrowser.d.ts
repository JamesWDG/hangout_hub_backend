import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly User: "User";
    readonly Otp: "Otp";
    readonly Group: "Group";
    readonly JoinRequest: "JoinRequest";
    readonly Post: "Post";
    readonly SimplePost: "SimplePost";
    readonly EventPost: "EventPost";
    readonly EventRoles: "EventRoles";
    readonly Poll: "Poll";
    readonly PollOption: "PollOption";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly email: "email";
    readonly password: "password";
    readonly firstName: "firstName";
    readonly lastName: "lastName";
    readonly phone: "phone";
    readonly profilePicture: "profilePicture";
    readonly isVerified: "isVerified";
    readonly bio: "bio";
    readonly eventsOfInterest: "eventsOfInterest";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const OtpScalarFieldEnum: {
    readonly id: "id";
    readonly email: "email";
    readonly otp: "otp";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type OtpScalarFieldEnum = (typeof OtpScalarFieldEnum)[keyof typeof OtpScalarFieldEnum];
export declare const GroupScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly description: "description";
    readonly category: "category";
    readonly image: "image";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type GroupScalarFieldEnum = (typeof GroupScalarFieldEnum)[keyof typeof GroupScalarFieldEnum];
export declare const JoinRequestScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly groupId: "groupId";
    readonly status: "status";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type JoinRequestScalarFieldEnum = (typeof JoinRequestScalarFieldEnum)[keyof typeof JoinRequestScalarFieldEnum];
export declare const PostScalarFieldEnum: {
    readonly id: "id";
    readonly type: "type";
    readonly userId: "userId";
    readonly groupId: "groupId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum];
export declare const SimplePostScalarFieldEnum: {
    readonly id: "id";
    readonly content: "content";
    readonly image: "image";
    readonly postId: "postId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type SimplePostScalarFieldEnum = (typeof SimplePostScalarFieldEnum)[keyof typeof SimplePostScalarFieldEnum];
export declare const EventPostScalarFieldEnum: {
    readonly id: "id";
    readonly eventName: "eventName";
    readonly eventDescription: "eventDescription";
    readonly eventStartDate: "eventStartDate";
    readonly eventEndDate: "eventEndDate";
    readonly eventLocation: "eventLocation";
    readonly eventImage: "eventImage";
    readonly notes: "notes";
    readonly postId: "postId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type EventPostScalarFieldEnum = (typeof EventPostScalarFieldEnum)[keyof typeof EventPostScalarFieldEnum];
export declare const EventRolesScalarFieldEnum: {
    readonly id: "id";
    readonly roleName: "roleName";
    readonly roleDescription: "roleDescription";
    readonly eventPostId: "eventPostId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type EventRolesScalarFieldEnum = (typeof EventRolesScalarFieldEnum)[keyof typeof EventRolesScalarFieldEnum];
export declare const PollScalarFieldEnum: {
    readonly id: "id";
    readonly pollQuestion: "pollQuestion";
    readonly postId: "postId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type PollScalarFieldEnum = (typeof PollScalarFieldEnum)[keyof typeof PollScalarFieldEnum];
export declare const PollOptionScalarFieldEnum: {
    readonly id: "id";
    readonly option: "option";
    readonly pollId: "pollId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type PollOptionScalarFieldEnum = (typeof PollOptionScalarFieldEnum)[keyof typeof PollOptionScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
//# sourceMappingURL=prismaNamespaceBrowser.d.ts.map