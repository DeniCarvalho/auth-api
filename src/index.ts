require("dotenv-safe").config();
import { AuthController } from "./controller";

const authController = new AuthController();

export { authController };
