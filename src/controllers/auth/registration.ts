import bcryptjs from "bcryptjs";
import { Request, Response } from "express";

import requestError from "@/errors/requestError";
import { UserModel } from "@/models/userModel";
import { TUserRegister } from "@/types/User";

const register = async (req: Request, res: Response) => {
  const { email, password, username } = req.body as TUserRegister;

  const user = await UserModel.findOne({ email });

  if (user) {
    throw requestError(409, "Email already exists");
  }

  const hashPassword = await bcryptjs.hash(password, 10);

  const result = await UserModel.create({
    username,
    email,
    password: hashPassword,
  });

  res.status(201).json({
    user: {
      username: result.username,
      email: result.email,
      id: result._id,
    },
  });
};

export default register;
