"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userModel_1 = require("../../models/userModel");
const validationBody_1 = __importDefault(require("../../middlewares/validationBody"));
const registration_1 = __importDefault(require("../../controllers/auth/registration"));
const ctrlWrapper_1 = __importDefault(require("../../controllers/ctrlWrapper"));
const router = express_1.default.Router();
router.post("/register", (0, validationBody_1.default)(userModel_1.registrationSchema), (0, ctrlWrapper_1.default)(registration_1.default));
exports.default = router;
//# sourceMappingURL=auth.js.map