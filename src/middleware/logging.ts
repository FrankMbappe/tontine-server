import debugFactory from "debug";
import type { NextFunction, Request, Response } from "express";

const debug = debugFactory("middleware");

export default function handleLogging(
  _req: Request,
  _res: Response,
  next: NextFunction,
) {
  debug("Logging...");

  // Nothing will be executed unless next() is called

  next();
}
