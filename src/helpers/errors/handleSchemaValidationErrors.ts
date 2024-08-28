import {
  CallbackWithoutResultAndOptionalError,
  Error as MongooseError,
} from "mongoose";

interface MongoError extends MongooseError {
  name: string;
  code?: string | number;
  status?: number;
}

const isConflict = ({ name, code }: MongoError) =>
  name === "MongoServerError" && (code === 11000 || code === "11000");

export const handleSchemaValidationErrors = (
  error: MongoError,
  next: CallbackWithoutResultAndOptionalError,
): void => {
  if (error instanceof MongooseError) {
    error.status = isConflict(error) ? 409 : 400;
  }
  next(error);
};
