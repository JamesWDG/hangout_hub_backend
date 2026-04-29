import { AsyncHandler } from "../middlewares/AsyncHandler.js";
import { SuccessHandler } from "../middlewares/SuccessHandler.js";
import { createPostService, getAuthUserPostsService, getPostsService, getSinglePostService, } from "../services/post.service.js";
import { applicationConfig } from "../constant.js";
const parseTaggedUsers = (raw) => {
    if (raw == null || raw === "") {
        return [];
    }
    const resolved = (() => {
        if (typeof raw === "string") {
            try {
                return JSON.parse(raw);
            }
            catch {
                return [];
            }
        }
        return raw;
    })();
    if (!Array.isArray(resolved)) {
        return [];
    }
    return resolved
        .map((item) => {
        if (typeof item === "string") {
            return item;
        }
        if (item &&
            typeof item === "object" &&
            "id" in item &&
            typeof item.id === "string") {
            return item.id;
        }
        return "";
    })
        .filter((id) => id.trim() !== "");
};
const normalizeType = (value) => {
    if (typeof value !== "string") {
        return null;
    }
    const normalized = value.toUpperCase();
    if (normalized === "SIMPLE" || normalized === "EVENT" || normalized === "POLL") {
        return normalized;
    }
    return null;
};
export const createPostController = AsyncHandler(async (req, res, next) => {
    const userId = req.user.id;
    const body = req.body;
    const groupId = typeof body.groupId === "string" ? body.groupId : "";
    const type = normalizeType(body.type);
    if (!groupId || !type) {
        return next({
            statusCode: 400,
            message: "groupId and valid type (SIMPLE | EVENT | POLL) are required",
            stack: new Error().stack,
            status: "400",
        });
    }
    const taggedUserIds = parseTaggedUsers(body.taggedUsers);
    const imageFromUpload = req.file?.filename
        ? `${applicationConfig.BASE_URL ?? ""}/${req.file.filename}`
        : undefined;
    if (type === "SIMPLE") {
        const content = body.simplePost?.content;
        const image = body.simplePost?.image ?? imageFromUpload;
        if (!content || !content.trim()) {
            return next({
                statusCode: 400,
                message: "simplePost.content is required for SIMPLE post",
                stack: new Error().stack,
                status: "400",
            });
        }
        const post = await createPostService({
            userId,
            groupId,
            type,
            taggedUserIds,
            simplePost: {
                content: content.trim(),
                ...(image ? { image } : {}),
            },
        });
        return SuccessHandler(res, { post }, "Post created successfully", "201");
    }
    if (type === "EVENT") {
        const eventPost = body.eventPost;
        const requiredFields = [
            eventPost?.eventName,
            eventPost?.eventDescription,
            eventPost?.eventStartDate,
            eventPost?.eventEndDate,
            eventPost?.eventLocation,
        ];
        if (requiredFields.some((value) => typeof value !== "string" || !value.trim())) {
            return next({
                statusCode: 400,
                message: "eventPost.eventName, eventDescription, eventStartDate, eventEndDate, eventLocation are required",
                stack: new Error().stack,
                status: "400",
            });
        }
        const roles = Array.isArray(eventPost?.eventRoles) && eventPost.eventRoles.length > 0
            ? eventPost.eventRoles
                .filter((role) => typeof role.roleName === "string" &&
                role.roleName.trim() !== "" &&
                typeof role.roleDescription === "string" &&
                role.roleDescription.trim() !== "")
                .map((role) => ({
                roleName: role.roleName.trim(),
                roleDescription: role.roleDescription.trim(),
            }))
            : [];
        const post = await createPostService({
            userId,
            groupId,
            type,
            taggedUserIds,
            eventPost: {
                eventName: eventPost.eventName.trim(),
                eventDescription: eventPost.eventDescription.trim(),
                eventStartDate: new Date(eventPost.eventStartDate),
                eventEndDate: new Date(eventPost.eventEndDate),
                eventLocation: eventPost.eventLocation.trim(),
                ...(eventPost?.eventImage || imageFromUpload
                    ? { eventImage: eventPost?.eventImage ?? imageFromUpload }
                    : {}),
                ...(typeof eventPost?.notes === "string" && eventPost.notes.trim()
                    ? { notes: eventPost.notes.trim() }
                    : {}),
                ...(roles.length > 0 ? { eventRoles: roles } : {}),
            },
        });
        return SuccessHandler(res, { post }, "Post created successfully", "201");
    }
    const pollQuestion = body.poll?.pollQuestion;
    const pollOptions = body.poll?.pollOptions;
    if (!pollQuestion || !pollQuestion.trim() || !Array.isArray(pollOptions) || pollOptions.length < 2) {
        return next({
            statusCode: 400,
            message: "poll.pollQuestion and at least 2 poll.pollOptions are required",
            stack: new Error().stack,
            status: "400",
        });
    }
    const normalizedOptions = pollOptions
        .filter((option) => typeof option === "string" && option.trim() !== "")
        .map((option) => option.trim());
    if (normalizedOptions.length < 2) {
        return next({
            statusCode: 400,
            message: "poll.pollOptions must include at least 2 non-empty options",
            stack: new Error().stack,
            status: "400",
        });
    }
    const post = await createPostService({
        userId,
        groupId,
        type,
        taggedUserIds,
        poll: {
            pollQuestion: pollQuestion.trim(),
            pollOptions: normalizedOptions,
        },
    });
    return SuccessHandler(res, { post }, "Post created successfully", "201");
});
export const getSinglePostController = AsyncHandler(async (req, res, next) => {
    const id = typeof req.params.id === "string" ? req.params.id : "";
    if (!id) {
        return next({
            statusCode: 400,
            message: "Post id is required",
            stack: new Error().stack,
            status: "400",
        });
    }
    const post = await getSinglePostService(id);
    if (!post) {
        return next({
            statusCode: 404,
            message: "Post not found",
            stack: new Error().stack,
            status: "404",
        });
    }
    return SuccessHandler(res, { post }, "Post fetched successfully", "200");
});
export const getPostsController = AsyncHandler(async (req, res) => {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const groupId = typeof req.query.groupId === "string" ? req.query.groupId.trim() : "";
    const result = await getPostsService(page, limit, groupId || undefined);
    return SuccessHandler(res, result, "Posts fetched successfully", "200");
});
export const getAuthUserPostsController = AsyncHandler(async (req, res) => {
    const userId = req.user.id;
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const result = await getAuthUserPostsService(userId, page, limit);
    return SuccessHandler(res, result, "Auth user posts fetched successfully", "200");
});
//# sourceMappingURL=post.controllers.js.map