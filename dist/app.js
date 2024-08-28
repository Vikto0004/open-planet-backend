"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const node_fs_1 = __importDefault(require("node:fs"));
const cors_1 = __importDefault(require("cors"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
require("express-async-errors");
const body_parser_1 = require("body-parser");
const errorHandler_1 = __importDefault(require("./helpers/errors/errorHandler"));
const routers_1 = __importDefault(require("./routes/routers"));
const handleSchemaValidationErrors_1 = __importDefault(require("./helpers/errors/handleSchemaValidationErrors"));
dotenv_1.default.config();
const { CLIENT_URL } = process.env;
exports.app = (0, express_1.default)();
const swaggerDocument = JSON.parse(node_fs_1.default.readFileSync("./swagger.json", "utf-8"));
exports.app.set("trust proxy", 1);
exports.app.use((0, cors_1.default)({
    credentials: true,
    allowedHeaders: [
        "Authorization",
        "Content-Type",
        "Access-Control-Allow-Origin",
    ],
    origin: [CLIENT_URL, "http://localhost:3000"],
    methods: ["GET", "PUT", "POST", "DELETE", "OPTIONS"],
}));
exports.app.use((0, body_parser_1.json)());
exports.app.use("/api", routers_1.default);
swagger_ui_express_1.default.setup(swaggerDocument);
exports.app.use(handleSchemaValidationErrors_1.default);
exports.app.use(errorHandler_1.default);
exports.app.all("*", () => {
    throw new Error("Page not found");
});
//# sourceMappingURL=app.js.map