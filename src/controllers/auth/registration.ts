import bcryptjs from "bcryptjs";
import { User } from "../../models/user.js";
import { Request, Response } from "express";

import { sendActivationMail } from "../../services/sendActivationMail.js";
import { generateTokens, saveTokens } from "../../services/token-service.js";
import UserDto from "../../helpers/changeData/user-dto.js";

const register = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  const hashPassword = await bcryptjs.hash(password, 10);

  if (user) {
    throw requestError(409, "Email already exist");
  }

  const result = await User.create({
    email,
    password: hashPassword,
  });

  const payload = UserDto(result);

  const tokens = await generateTokens(payload);

  await saveTokens(result._id, tokens.refreshToken);

  res.cookie("Token", tokens, {
    maxAge: 30 * 24 * 60 * 60 * 100,
    httpOnly: true,
  });
  res.status(201).json({
    user: {
      email: result.email,
      id: result._id,
    },
    ...tokens,
  });
};

export default register;
