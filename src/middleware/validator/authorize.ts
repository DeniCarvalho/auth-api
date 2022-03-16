import { RequestError } from "af-utils-node";
import { Request, Response, NextFunction } from "express";

export default async (req: Request, res: Response, next: NextFunction) => {
  next();
};
