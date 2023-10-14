import type { Express } from "express";
import express from "express";
import helmet from "helmet";

import handleAsync from "@/middleware/async";
import handleAuth from "@/middleware/auth";
import handleLogging from "@/middleware/logging";
import handlePromiseRejections from "@/middleware/promiseRejections";

export default function setupMiddleware(app: Express) {
  // Use middleware
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(helmet());
  app.use(handleLogging);
  app.use(handleAsync);
  app.use(handleAuth);

  // Handle thrown errors
  app.use(handlePromiseRejections);
}
