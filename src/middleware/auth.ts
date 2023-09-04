import debugFactory from "debug";
import jwt, { JwtPayload } from "jsonwebtoken";
import config from "config";
import { NextFunction, Request, Response } from "express";
import { ConfigEntryEnum } from "@/utils/enums";
import { StatusCodes } from "http-status-codes";

type AuthRequest = Request & {
  user?: JwtPayload;
};

const debug = debugFactory("auth-handler");

export default function handleAuth(
  req: AuthRequest,
  res: Response,
  next: NextFunction
) {
  debug("Authenticating...");

  const token = req.header("x-auth-token");
  if (!token)
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .send("Access denied. No token provided.");

  try {
    const jwtPayload = jwt.verify(
      token,
      config.get(ConfigEntryEnum.JwtPrivateKey)
    );
    req.user = typeof jwtPayload !== "string" ? jwtPayload : undefined;
    next();
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).send("Invalid token.");
  }
}
