import { Router, Request, Response } from "express";
import { authController } from ".";
const router = Router();

// Upload video
router.post("/login", (req: Request, res: Response) => {
  return authController.login(req, res);
});

export { router };
