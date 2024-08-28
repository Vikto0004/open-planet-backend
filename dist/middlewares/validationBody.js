"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validationBody = (schema) => {
    return (req, res, next) => {
        const { error } = schema.validate(req.body);
        if (error) {
            const missed = error.message;
            const err = Object.assign(new Error(`missing required ${missed} field`), {
                status: 400,
            });
            return next(err);
        }
        next();
    };
};
exports.default = validationBody;
//# sourceMappingURL=validationBody.js.map