import express, { NextFunction, Request, Response } from "express";
import { coinsService } from "../5-services/coins-service";
import { InvestmentModel } from "../3-models/AmountModel";

//listens to product requests
class CoinsController {
  public readonly router = express.Router(); //create a router object for listening

  //register routes once
  public constructor() {
    this.registerRoutes();
  }

  private registerRoutes(): void {
    this.router.get("/coins", this.getAllCoins);
    this.router.get("/coin/:id", this.getOneCoin);
    this.router.get("/amount", this.getValue);
  }

  //get http://localhost:3070/api/coins/list
  private async getAllCoins(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const coins = await coinsService.getAllCoins();
      response.json(coins);
    } catch (err: any) {
      next(err);
    }
  }

  //get http://localhost:3070/api/coin/:id
  private async getOneCoin(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const id = request.params.id;
      const coin = await coinsService.getOneCoin(id);
      response.json(coin);
    } catch (err: any) {
      next(err);
    }
  }
  //get http://localhost:3070/api/amount/
  private async getValue(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const amount = new InvestmentModel(request.body);
      const value = await coinsService.getValue(amount);
      response.json(value);
    } catch (err: any) {
      next(err);
    }
  }
}

const coinsController = new CoinsController();
export const coinsRouter = coinsController.router;
