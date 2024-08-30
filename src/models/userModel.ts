import Joi from "joi";
import { Schema, model } from "mongoose";

const emailRegexp = /^[\w.]+@[\w]+.[\w]+$/;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      match: emailRegexp,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    role: {
      type: String,
      enum: ["mainAdmin", "admin"],
      default: "admin",
    },
  },
  { versionKey: false, timestamps: true },
);

export const registrationSchema = Joi.object({
  username: Joi.string().required(),
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
  confirmPassword: Joi.ref("password"),
});

export const loginSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
});

export const UserModel = model("user", userSchema);

export default userSchema;
