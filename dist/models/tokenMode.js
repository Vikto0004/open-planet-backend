"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenModel = void 0;
const mongoose_1 = require("mongoose");
const TokenSchema = new mongoose_1.Schema({
    user: { type: mongoose_1.Schema.Types.ObjectId, ref: "user" },
    Token: { type: String, require: true },
});
exports.TokenModel = (0, mongoose_1.model)("token", TokenSchema);
exports.default = TokenSchema;
//# sourceMappingURL=tokenMode.js.map