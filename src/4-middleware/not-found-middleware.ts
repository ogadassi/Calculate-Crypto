import { NextFunction, Request, Response } from "express";
import { RouteNotFoundError } from "../3-models/client-errors";

class NotFoundMiddleware {
  public routeNotFound(
    request: Request,
    response: Response,
    next: NextFunction
  ): void {
    const err = new RouteNotFoundError(request.originalUrl);
    next(err);
  }
}

export const notFoundMiddleware = new NotFoundMiddleware();
