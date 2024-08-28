"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = __importDefault(require("./api/auth"));
const routers = (0, express_1.Router)();
routers.use("/auth", auth_1.default);
exports.default = routers;
//# sourceMappingURL=routers.js.map