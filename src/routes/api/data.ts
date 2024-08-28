import express from "express";

import ctrlWrapper from "../../controllers/ctrlWrapper";
import data from "../../controllers/data/data";

const router = express.Router();

router.get("/", ctrlWrapper(data));

export default router;
