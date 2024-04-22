import { NextFunction, Request, Response } from "express";

class LoggerMiddleware {
  public logToConsole(
    request: Request,
    response: Response,
    next: NextFunction
  ): void {

    //error demo
    // if (Math.random() < 0.5) {
    //   const err = { message: "i did something bad", status: 500 };
    //   next(err);
    //   return;
    // }

    console.log("method:", request.method);
    console.log("route:", request.originalUrl);
    console.log("body:", request.body);
    console.log("----------------------------------------------");

    next();
  }
}

export const loggerMiddleware = new LoggerMiddleware();
