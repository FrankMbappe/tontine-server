import debugFactory from "debug";
import type { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import type { JwtPayload } from "jsonwebtoken";
import jwt from "jsonwebtoken";

type AuthRequest = Request & {
  user?: JwtPayload;
};

const debug = debugFactory("auth-handler");

export default function handleAuth(
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) {
  debug("Authenticating...");

  if (!process.env.JWT_PRIVATE_KEY)
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR);

  const token = req.header("x-auth-token");
  if (!token)
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .send("Access denied. No token provided.");

  try {
    const jwtPayload = jwt.verify(token, process.env.JWT_PRIVATE_KEY);
    req.user = typeof jwtPayload !== "string" ? jwtPayload : undefined;
    next();
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).send("Invalid token.");
  }
}
