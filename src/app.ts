import express from "express";
import { handle404, handleError } from "af-utils-node";

import { router } from "./routes";

const app = express();

app.use(express.json());
app.use(router);

app.use(handle404);
app.use((error: any, req: any, res: any, _: any) => {
  handleError(error, req, res, _);
});

export { app };
