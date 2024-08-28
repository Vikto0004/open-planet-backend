"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ctrlWrapper = (ctrl) => {
    const func = (req, res, next) => {
        try {
            ctrl(req, res, next);
        }
        catch (error) {
            next(error);
        }
    };
    return func;
};
exports.default = ctrlWrapper;
//# sourceMappingURL=ctrlWrapper.js.map