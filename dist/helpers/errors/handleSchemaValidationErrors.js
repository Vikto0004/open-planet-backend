"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isConflict = ({ name, code }) => name === "MongoServerError" && code === 11000;
const handleSchemaValidationErrors = (error, req, res, next) => {
    error.status = isConflict(error) ? 409 : 400;
    next(error);
};
exports.default = handleSchemaValidationErrors;
//# sourceMappingURL=handleSchemaValidationErrors.js.map