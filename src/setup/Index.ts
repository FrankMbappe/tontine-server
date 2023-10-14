import type { Express } from "express";

import setupDb from "./db";
import setupEnv from "./env";
import setupLogger from "./logger";
import setupMiddleware from "./middleware";

export default async function setup(app: Express) {
  setupEnv();
  setupLogger();
  setupMiddleware(app);
  setupDb();
}
