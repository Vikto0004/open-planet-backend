import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import "express-async-errors";
import fs from "node:fs";
import swaggerUi from "swagger-ui-express";

import { json } from "body-parser";
import errorHandler from "./helpers/errors/errorHandler";
import routers from "./routes/routers";

dotenv.config();
const { CLIENT_URL } = process.env;

export const app = express();

const swaggerDocument = JSON.parse(fs.readFileSync("./swagger.json", "utf-8"));

swaggerUi.setup(swaggerDocument);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.set("trust proxy", 1);

app.use(
  cors({
    credentials: true,
    allowedHeaders: [
      "Authorization",
      "Content-Type",
      "Access-Control-Allow-Origin",
    ],
    origin: [CLIENT_URL!, "http://localhost:3000"],
    methods: ["GET", "PUT", "POST", "DELETE", "OPTIONS"],
  }),
);
app.use(json());

app.use(express.json());

app.use("/api", routers);

app.use(errorHandler);
