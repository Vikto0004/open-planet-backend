"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const requestError = async (status, message) => {
    const error = new Error(message);
    error.status = status;
    console.log("req", status, message);
    return error;
};
exports.default = requestError;
//# sourceMappingURL=requestError.js.map