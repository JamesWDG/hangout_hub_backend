import { prisma } from "../lib/prisma.js";

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
    eventLocation: string;
    eventImage?: string;
    notes?: string;
    eventRoles?: EventRoleInput[];
  };
  poll?: {
    pollQuestion: string;
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
          eventLocation: input.eventPost.eventLocation,
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

export const getPostsService = async (page: number, limit: number, groupId?: string) => {
  const safePage = Math.max(1, page);
  const safeLimit = Math.max(1, limit);
  const skip = (safePage - 1) * safeLimit;

  const where = groupId ? { groupId } : null;
  const [posts, total] = await Promise.all([
    prisma.post.findMany({
      ...(where ? { where } : {}),
      skip,
      take: safeLimit,
      orderBy: { createdAt: "desc" },
      include: postInclude,
    }),
    prisma.post.count({
      ...(where ? { where } : {}),
    }),
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
