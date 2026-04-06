export const SuccessHandler = (res, data, message, status = "200") => {
    const newStatus = status ? parseInt(status, 10) : 200;
    return res.status(newStatus).send({
        message,
        data,
        success: true,
    });
};
//# sourceMappingURL=SuccessHandler.js.map