import { Request, Response } from "express";
import requestError from "../../helpers/errors/requestError";

const data = async (req: Request, res: Response) => {
  const er = true;
  if (er) {
    throw requestError(409, "Id is required!");
  }
  res.status(200).json({
    status: 200,
    message: "Data",
  });
};

export default data;
