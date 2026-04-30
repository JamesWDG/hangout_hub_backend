import { prisma } from "../lib/prisma.js";
import { NotificationType, PostType } from "../../generated/prisma/enums.js";
import { Prisma } from "../../generated/prisma/client.js";

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

const postInclude = {
  user: true,
  group: true,
  taggedUsers: true,
  simplePost: true,
  eventPost: {
    include: {
      eventRoles: true,
    },
  },
  poll: {
    include: {
      pollOptions: true,
    },
  },
} as const;

const normalizePostType = (postType?: string): PostType | undefined => {
  if (!postType) {
    return undefined;
  }
  const normalized = postType.toUpperCase();
  if (normalized === PostType.SIMPLE || normalized === PostType.EVENT || normalized === PostType.POLL) {
    return normalized as PostType;
  }
  return undefined;
};

export const createPostService = async (input: CreatePostInput) => {
  const createdPost = await prisma.$transaction(async (tx) => {
    const post = await tx.post.create({
      data: {
        userId: input.userId,
        groupId: input.groupId,
        type: input.type,
        ...(input.taggedUserIds.length > 0
          ? { taggedUsers: { connect: input.taggedUserIds.map((id) => ({ id })) } }
          : {}),
      },
    });

    if (input.type === "SIMPLE") {
      if (!input.simplePost) {
        throw new Error("Simple post details are required");
      }
      await tx.simplePost.create({
        data: {
          postId: post.id,
          content: input.simplePost.content,
          ...(input.simplePost.image ? { image: input.simplePost.image } : {}),
        },
      });
    }

    if (input.type === "EVENT") {
      if (!input.eventPost) {
        throw new Error("Event post details are required");
      }
      await tx.eventPost.create({
        data: {
          postId: post.id,
          eventName: input.eventPost.eventName,
          eventDescription: input.eventPost.eventDescription,
          eventStartDate: input.eventPost.eventStartDate,
          eventEndDate: input.eventPost.eventEndDate,
          eventLocation: input.eventPost.eventLocation as Prisma.InputJsonObject,
          notificationType: input.eventPost.notificationType,
          ...(input.eventPost.eventImage ? { eventImage: input.eventPost.eventImage } : {}),
          ...(input.eventPost.notes ? { notes: input.eventPost.notes } : {}),
          ...(input.eventPost.eventRoles && input.eventPost.eventRoles.length > 0
            ? {
                eventRoles: {
                  create: input.eventPost.eventRoles.map((role) => ({
                    roleName: role.roleName,
                    roleDescription: role.roleDescription,
                  })),
                },
              }
            : {}),
        },
      });
    }

    if (input.type === "POLL") {
      if (!input.poll) {
        throw new Error("Poll details are required");
      }
      await tx.poll.create({
        data: {
          postId: post.id,
          pollQuestion: input.poll.pollQuestion,
          pollEndDate: input.poll.pollEndDate,
          pollOptions: {
            create: input.poll.pollOptions.map((option) => ({ option })),
          },
        },
      });
    }

    return tx.post.findUnique({
      where: { id: post.id },
      include: postInclude,
    });
  });

  return createdPost;
};

export const getSinglePostService = async (postId: string) => {
  return prisma.post.findUnique({
    where: { id: postId },
    include: postInclude,
  });
};

export const getPostsService = async (page: number, limit: number, groupId?: string, postType?: string) => {
  const safePage = Math.max(1, page);
  const safeLimit = Math.max(1, limit);
  const skip = (safePage - 1) * safeLimit;
  const normalizedType = normalizePostType(postType);

  const where = {
    ...(groupId ? { groupId } : {}),
    ...(normalizedType ? { type: normalizedType } : {}),
  };

  const [posts, total] = await Promise.all([
    prisma.post.findMany({
      where,
      include: postInclude,
      skip,
      take: safeLimit,
      orderBy: { createdAt: "desc" },
    }),
    prisma.post.count({ where }),
  ]);

  return {
    posts,
    pagination: {
      page: safePage,
      limit: safeLimit,
      total,
      totalPages: Math.ceil(total / safeLimit),
    },
  };
};

export const getAuthUserPostsService = async (userId: string, page: number, limit: number) => {
  const safePage = Math.max(1, page);
  const safeLimit = Math.max(1, limit);
  const skip = (safePage - 1) * safeLimit;

  const where = { userId };
  const [posts, total] = await Promise.all([
    prisma.post.findMany({
      where,
      skip,
      take: safeLimit,
      orderBy: { createdAt: "desc" },
      include: postInclude,
    }),
    prisma.post.count({ where }),
  ]);

  return {
    posts,
    pagination: {
      page: safePage,
      limit: safeLimit,
      total,
      totalPages: Math.ceil(total / safeLimit),
    },
  };
};
