import express from "express";
import { appConfig } from "./2-utils/app-config";
import { errorsMiddleware } from "./4-middleware/errors-middleware";
import { loggerMiddleware } from "./4-middleware/logger-middleware";
import { notFoundMiddleware } from "./4-middleware/not-found-middleware";
import { coinsRouter } from "./6-controllers/coins-controller";

//main application class
class App {
  //express server
  private server = express();
  //start app
  public start(): void {
    //create a request.body containing the given json from the front:
    this.server.use(express.json());

    //register middleware
    this.server.use(loggerMiddleware.logToConsole);

    //connect any controller route to the server
    this.server.use("/api", coinsRouter);

    //route not found
    this.server.use(notFoundMiddleware.routeNotFound);

    //catch all middleware
    this.server.use(errorsMiddleware.catchAll);

    //run server
    this.server.listen(appConfig.port, () =>
      console.log("listening on http://localhost:" + appConfig.port)
    );
  }
}

const app = new App();
app.start();
