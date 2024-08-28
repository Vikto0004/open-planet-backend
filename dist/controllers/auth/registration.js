"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const userModel_1 = require("../../models/userModel");
const requestError_1 = __importDefault(require("../../helpers/errors/requestError"));
const register = async (req, res) => {
    const { email, password } = req.body;
    const user = await userModel_1.UserModel.findOne({ email });
    const hashPassword = await bcryptjs_1.default.hash(password, 10);
    if (user) {
        throw (0, requestError_1.default)(409, "Email already exist");
    }
    const result = await userModel_1.UserModel.create({
        email,
        password: hashPassword,
    });
    res.status(201).json({
        user: {
            email: result.email,
            id: result._id,
        },
    });
};
exports.default = register;
//# sourceMappingURL=registration.js.map