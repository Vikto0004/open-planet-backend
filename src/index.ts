import mongoose from "mongoose";

import * as dotenv from "dotenv";
import { app } from "./app";
dotenv.config();

const { DB_HOST, PORT = 3000 } = process.env;

mongoose
  .connect(DB_HOST!)
  .then(() => {
    app.listen(PORT, () => {
      console.log("Database connect success");
    });
  })
  .catch((error) => {
    console.log(error);
  });
