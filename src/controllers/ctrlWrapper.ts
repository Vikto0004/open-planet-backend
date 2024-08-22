import { Request, Response, NextFunction } from "express";

const ctrlWrapper = (
  ctrl: (req: Request, res: Response, next: NextFunction) => void,
) => {
  const func = (req: Request, res: Response, next: NextFunction) => {
    try {
      ctrl(req, res, next);
    } catch (error) {
      next(error);
    }
  };
  return func;
};

export default ctrlWrapper;
