export const AsyncHandler = (fn) => {
    return async (req, res, next) => {
        try {
            await fn(req, res, next);
        }
        catch (error) {
            console.log("error ===>", error);
            next(error);
        }
    };
};
//# sourceMappingURL=AsyncHandler.js.map