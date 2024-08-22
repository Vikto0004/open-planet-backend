import express from "express";

import { registrationSchema } from "../../models/user";
import validationBody from "../../middlewares/validationBody";

const router = express.Router();

router.post(
  "/register",
  validationBody(registrationSchema),
  ctrlWrapper(register),
);

export default router;
