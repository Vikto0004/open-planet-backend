import express from "express";

import { loginSchema, registrationSchema } from "../../models/userModel";
import validationBody from "../../middlewares/validationBody";
import ctrlWrapper from "../../controllers/ctrlWrapper";
import login from "../../controllers/auth/login";
import register from "../../controllers/auth/registration";

const router = express.Router();

router.post(
  "/register",
  validationBody(registrationSchema),
  ctrlWrapper(register),
);

router.post("/login", validationBody(loginSchema), ctrlWrapper(login));

export default router;
