import { Schema, model } from "mongoose";
import Joi from "joi";
import handleSchemaValidationErrors from "../helpers/errors/handleSchemaValidationErrors";

const emailRegexp = /^[\w.]+@[\w]+.[\w]+$/;

// interface IUser {
//   email: string;
//   password: string;
//   isActivated: boolean;
//   activationLink?: string;
//   role?: string;
// }

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
    isActivated: {
      type: Boolean,
      default: false,
    },
    activationLink: {
      type: String,
    },
    role: {
      type: String,
      default: "",
    },
  },
  { versionKey: false, timestamps: true },
);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(userSchema as any).post("save", handleSchemaValidationErrors);

export const registrationSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
  repeat_password: Joi.ref("password"),
});

export const loginSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
});

export const User = model("user", userSchema);

export default userSchema;
