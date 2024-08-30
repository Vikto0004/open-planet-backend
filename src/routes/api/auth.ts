import express from "express";

import login from "../../controllers/auth/login";
import register from "../../controllers/auth/registration";
import ctrlWrapper from "../../controllers/ctrlWrapper";
import validationBody from "../../middlewares/validationBody";
import { loginSchema, registrationSchema } from "../../models/userModel";

const router = express.Router();

router.post(
  "/register",
  validationBody(registrationSchema),
  ctrlWrapper(register),
);

router.post("/login", validationBody(loginSchema), ctrlWrapper(login));

export default router;
