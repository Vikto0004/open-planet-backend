"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = exports.loginSchema = exports.registrationSchema = void 0;
const mongoose_1 = require("mongoose");
const joi_1 = __importDefault(require("joi"));
const emailRegexp = /^[\w.]+@[\w]+.[\w]+$/;
const userSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: true,
        match: emailRegexp,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    role: {
        type: String,
        enum: ["mainAdmin", "admin"],
        default: "admin",
    },
}, { versionKey: false, timestamps: true });
exports.registrationSchema = joi_1.default.object({
    email: joi_1.default.string().pattern(emailRegexp).required(),
    password: joi_1.default.string().min(6).required(),
    consfirmPassword: joi_1.default.ref("password"),
});
exports.loginSchema = joi_1.default.object({
    email: joi_1.default.string().pattern(emailRegexp).required(),
    password: joi_1.default.string().min(6).required(),
});
exports.UserModel = (0, mongoose_1.model)("user", userSchema);
exports.default = userSchema;
//# sourceMappingURL=userModel.js.map