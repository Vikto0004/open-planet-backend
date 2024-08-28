"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler = (err, req, res) => {
    const status = err.status || 500;
    const message = err.message || "Internal Server Error";
    console.log(message, status);
    res.status(status).json({
        status,
        message,
    });
};
exports.default = errorHandler;
//# sourceMappingURL=errorHandler.js.map