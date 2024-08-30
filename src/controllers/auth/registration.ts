import bcryptjs from "bcryptjs";
import { Request, Response } from "express";

import requestError from "@/errors/requestError";
import { UserModel } from "@/models/userModel";
import { TUser } from "@/types/User";

const register = async (req: Request, res: Response) => {
  const { email, password } = req.body as TUser;

  const user = await UserModel.findOne({ email });

  if (user) {
    throw requestError(409, "Email already exists");
  }

  const hashPassword = await bcryptjs.hash(password, 10);

  const result = await UserModel.create({
    email,
    password: hashPassword,
  });

  res.status(201).json({
    user: {
      email: result.email,
      id: result._id,
    },
  });
};

export default register;
