"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeToken = exports.saveTokens = exports.generateTokens = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
const tokenMode_1 = require("../models/tokenMode");
dotenv_1.default.config();
const { SECRET_TOKEN_KEY } = process.env;
const generateTokens = async (payload) => {
    const token = jsonwebtoken_1.default.sign(payload, SECRET_TOKEN_KEY, {
        expiresIn: "30d",
    });
    return {
        token,
    };
};
exports.generateTokens = generateTokens;
const saveTokens = async (userId, token) => {
    const tokenData = await tokenMode_1.TokenModel.findOne({ user: userId });
    if (tokenData) {
        tokenData.token = token;
        return tokenData.save();
    }
    const token = Tokens.create({ user: userId, refreshToken });
    return token;
};
exports.saveTokens = saveTokens;
const removeToken = async (token) => {
    const tokenData = await tokenMode_1.TokenModel.deleteOne({ token });
    return tokenData;
};
exports.removeToken = removeToken;
//# sourceMappingURL=tokenService.js.map