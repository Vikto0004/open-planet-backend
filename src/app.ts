import express from "express";
import dotenv from "dotenv";
import fs from "node:fs";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import "express-async-errors";

import { json } from "body-parser";
import errorHandler from "./helpers/errors/errorHandler";
import routers from "./routes/routers";

dotenv.config();
const { CLIENT_URL } = process.env;

export const app = express();

const swaggerDocument = JSON.parse(fs.readFileSync("./swagger.json", "utf-8"));

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

swaggerUi.setup(swaggerDocument);

app.use(errorHandler);
