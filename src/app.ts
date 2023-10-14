import express from "express";
import winston from "winston";

import setup from "./setup";

const app = express();
const port = Number(process.env.PORT) || 3000;

setup(app).then(() =>
  app.listen(port, () => {
    winston.info(`⚡️ Server is running at http://localhost:${port}`);
  }),
);
