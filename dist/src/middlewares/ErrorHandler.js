export const ErrorHandler = (err, req, res, next) => {
    res.status(err.statusCode || 500).send({
        message: err.message,
        stack: err.stack,
        data: null,
        success: false,
    });
};
export default ErrorHandler;
//# sourceMappingURL=ErrorHandler.js.map