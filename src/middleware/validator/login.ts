import { RequestError } from "af-utils-node";
import { Request, Response, NextFunction } from "express";

export default async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  if (!email) {
    return next(new RequestError("Email is required"));
  }
  if (!password) {
    return next(new RequestError("Password is required"));
  }
  next();
};
