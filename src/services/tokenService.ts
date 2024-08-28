import jwt from "jsonwebtoken";

import dotenv from "dotenv";
import { TokenModel } from "../models/tokenMode";
dotenv.config();

const { SECRET_TOKEN_KEY } = process.env;

export const generateTokens = async (payload) => {
  const token = jwt.sign(payload, SECRET_TOKEN_KEY!, {
    expiresIn: "30d",
  });
  return {
    token,
  };
};

export const saveTokens = async (userId: string, token: string) => {
  const tokenData = await TokenModel.findOne({ user: userId });
  if (tokenData) {
    tokenData.token = token;
    return tokenData.save();
  }
  const token = Tokens.create({ user: userId, refreshToken });
  return token;
};

export const removeToken = async (token) => {
  const tokenData = await TokenModel.deleteOne({ token });
  return tokenData;
};
