import { Router } from "express";
import authRouter from "./api/auth";
import data from "./api/data";

const routers = Router();

routers.use("/auth", authRouter);
routers.use("/", data);

export default routers;
