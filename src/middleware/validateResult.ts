import { validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";

const validateResult = (req: Request, res: Response, next: NextFunction) => {
 
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    console.log(errors.array());
    return res.status(422).json({ errors: errors.array() });
  }
  next()
};
export default validateResult;