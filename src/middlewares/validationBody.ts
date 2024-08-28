import { Request, Response, NextFunction } from "express";
import { Schema } from "joi";
const validationBody = (schema: Schema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);

    if (error) {
      const missed = error.message;
      const err = Object.assign(new Error(`missing required ${missed} field`), {
        status: 400,
      });
      return next(err);
    }
    next();
  };
};

export default validationBody;
