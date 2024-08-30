import bcryptjs from "bcryptjs";
import { Request, Response } from "express";

import { UserModel } from "@/models/userModel";
import { generateToken, saveToken } from "@/services/tokenService";
import { TUserLogin } from "@/types/User";
import requestError from "../../helpers/errors/requestError";

const login = async (req: Request, res: Response) => {
  const { email, password } = req.body as TUserLogin;

  const user = await UserModel.findOne({ email });

  if (!user) {
    throw requestError(401, "Email not found");
  }

  const comparePassword = bcryptjs.compare(password, user.password);

  if (!comparePassword) {
    throw requestError(401, "Wrong password");
  }

  const payload = { id: user._id, email: user.email };

  const token = await generateToken(payload);

  saveToken(user._id, token);

  res.cookie("token", token, {
    maxAge: 30 * 24 * 60 * 60 * 100,
    httpOnly: true,
  });

  res.json({
    user: { email: user.email, id: user._id },
    token,
  });
};

export default login;
