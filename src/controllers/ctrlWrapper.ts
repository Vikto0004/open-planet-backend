import { NextFunction, Request, Response } from "express";

const ctrlWrapper = (
  ctrl: (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => Promise<void> | void,
) => {
  const func = async (req: Request, res: Response, next: NextFunction) => {
    try {
      await ctrl(req, res, next);
    } catch (error) {
      next(error);
    }
  };
  return func;
};

export default ctrlWrapper;
