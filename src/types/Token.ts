import { Types } from "mongoose";

export type TGenerateToken = {
  id: Types.ObjectId;
  email: string;
};
