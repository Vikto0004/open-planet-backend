import { NextFunction } from "express";
import { Error } from "mongoose";

interface MongoError extends Error {
  name: string;
  code?: number;
  status?: number;
}

const isConflict = ({ name, code }: MongoError) =>
  name === "MongoServerError" && code === 11000;

const handleSchemaValidationErrors = (
  error: MongoError,
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  error.status = isConflict(error) ? 409 : 400;
  next();
};

export default handleSchemaValidationErrors;
