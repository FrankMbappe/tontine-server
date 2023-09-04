import handleLogging from "@/middleware/logging";
import handlePromiseRejections from "@/middleware/promiseRejections";
import express, { Express } from "express";
import helmet from "helmet";

export default function setupMiddleware(app: Express) {
  // Use middleware
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(helmet());
  app.use(handleLogging);

  // Handle thrown errors
  app.use(handlePromiseRejections);
}
