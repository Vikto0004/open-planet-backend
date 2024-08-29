import jwt from "jsonwebtoken";
import { Types } from "mongoose";
import dotenv from "dotenv";

import { TokenModel } from "../models/tokenMode";
import { TGenerateToken } from "../types/Token";

dotenv.config();

const { SECRET_TOKEN_KEY } = process.env;

export const generateToken = async (payload: TGenerateToken) => {
  const token = jwt.sign(payload, SECRET_TOKEN_KEY!, {
    expiresIn: "30d",
  });
  return {
    token,
  };
};

export const saveToken = async (userId: Types.ObjectId, token: string) => {
  const isTokenExist = await TokenModel.findOne({ user: userId });
  if (isTokenExist) {
    isTokenExist.token = token;
    return isTokenExist.save();
  }
  const tokenData = TokenModel.create({ user: userId, token });
  return tokenData;
};

// export const removeToken = async (token) => {
//   const tokenData = await TokenModel.deleteOne({ token });
//   return tokenData;
// };
