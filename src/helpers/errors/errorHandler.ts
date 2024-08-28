import { ErrorRequestHandler } from "express";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  if (
    err.name === "MongoServerError" &&
    (err.code === 11000 || err.code === "11000")
  ) {
    return res.status(409).json({
      status: "error",
      message: "Duplicate key error: A record with this value already exists.",
    });
  }

  const status = err.status || 500;
  const message = err.message || "Internal Server Error";

  res.status(status).json({ status, message });
};

export default errorHandler;
