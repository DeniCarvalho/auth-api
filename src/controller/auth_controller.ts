import { Request, Response } from "express";

export class AuthController {
  constructor() {}

  async login(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;
    return response.status(201).send({ email, password });
  }
}
