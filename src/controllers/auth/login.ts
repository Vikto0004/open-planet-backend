import { generateToken, saveToken } from "../../services/tokenService";
import requestError from "../../helpers/errors/requestError";
import { UserModel } from "../../models/userModel";
import { CreateUserDto } from "../../types/CreateUser.dto";
import bcryptjs from "bcryptjs";
import { Request, Response } from "express";

const login = async (req: Request, res: Response) => {
  const { email, password } = req.body as CreateUserDto;

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

  saveToken(user._id, token.token);

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
