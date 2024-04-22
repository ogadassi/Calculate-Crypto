import { appConfig } from "../2-utils/app-config";
import axios from "axios";
import { InvestmentModel } from "../3-models/AmountModel";

class CoinsService {
  public async getAllCoins(): Promise<string[]> {
    const response = await axios.get<string[]>(appConfig.apiUrl + "list");
    const coins = response.data;
    return coins;
  }

  public async getOneCoin(id: string): Promise<string> {
    const response = await axios.get<string>(appConfig.apiUrl + id);
    const coin = response.data;
    return coin;
  }

  public async getValue(investment: InvestmentModel): Promise<string> {
    console.log(appConfig.apiUrl + investment.id);

    const response = await axios.get<any>(appConfig.apiUrl + investment.id);
    const cryptoCoin = response.data;
    const priceOfSingularCrypto =
      cryptoCoin.market_data.current_price[investment.currency];

    const result = `You can buy ${investment.amount / priceOfSingularCrypto} ${
      investment.id
    } with ${investment.amount} ${investment.currency}`;
    return result;
  }
}

export const coinsService = new CoinsService();
