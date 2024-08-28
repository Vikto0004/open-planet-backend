import express from "express";

import { registrationSchema } from "../../models/userModel";
import validationBody from "../../middlewares/validationBody";
import register from "../../controllers/auth/registration";
import ctrlWrapper from "../../controllers/ctrlWrapper";

const router = express.Router();

router.post(
  "/register",
  validationBody(registrationSchema),
  ctrlWrapper(register),
);

export default router;
