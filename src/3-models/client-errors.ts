import { StatusCode } from "./enums";

abstract class ClientError {
  public message: string;
  public status: number;

  public constructor(message: string, status: number) {
    this.message = message;
    this.status = status;
  }
}

//route not found
export class RouteNotFoundError extends ClientError {
  public constructor(route: string) {
    super(`${route} not found.`, StatusCode.NotFound);
  }
}

//resource not found
export class ResourceNotFoundError extends ClientError {
  public constructor(id: number) {
    super(`id ${id} doesn't exist.`, StatusCode.NotFound);
  }
}

//validation error
export class validationError extends ClientError {
  public constructor(message: string) {
    super(message, StatusCode.BadRequest);
  }
}
