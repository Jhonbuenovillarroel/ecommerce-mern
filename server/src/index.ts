import app from "./server";
import config from "./config/config";
import { Request, Response } from "express";

app.get("/", (req: Request, res: Response) => {
  res.send("Server Response");
});

app.listen(config.port, () => {
  console.log(`Server listening on http://localhost:${config.port}`);
});
