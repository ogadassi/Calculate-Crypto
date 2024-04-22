import { NextFunction, Request, Response } from "express";

class ErrorsMiddleware {
  public catchAll(
    err: any,
    request: Request,
    response: Response,
    next: NextFunction
  ): void {
    console.log(err);
    const message = err.message;
    const status = err.status;

    response.status(status).send(message);
  }
}

export const errorsMiddleware = new ErrorsMiddleware();
