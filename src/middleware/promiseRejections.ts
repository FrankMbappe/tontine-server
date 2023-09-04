import winston from "winston";
import { ErrorRequestHandler } from "express";
import { ReasonPhrases, StatusCodes, getStatusCode } from "http-status-codes";

/**
 * Handle promise rejections from all routes
 */
const handlePromiseRejections: ErrorRequestHandler = (error, _req, res) => {
  // Log errors
  winston.error(error.message, error);

  // Reply with an appropriate error
  if (Object.values(ReasonPhrases).includes(error.message))
    res.status(getStatusCode(error.message)).send(error.message);
  else
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send(ReasonPhrases.INTERNAL_SERVER_ERROR);
};

export default handlePromiseRejections;
