import { Schema, model } from "mongoose";
import Joi from "joi";

const emailRegexp = /^[\w.]+@[\w]+.[\w]+$/;

const userSchema = new Schema(
  {
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
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
  consfirmPassword: Joi.ref("password"),
});

export const loginSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
});

export const UserModel = model("user", userSchema);

export default userSchema;
