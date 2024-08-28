import { Schema, model } from "mongoose";

const TokenSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "user" },
  Token: { type: String, require: true },
});

export const TokenModel = model("token", TokenSchema);

export default TokenSchema;
