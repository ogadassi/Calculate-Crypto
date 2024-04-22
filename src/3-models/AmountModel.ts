export class InvestmentModel {
  public id: string; //bitcoin
  public currency: string; //usd
  public amount: number; //3

  public constructor(investmentModel: InvestmentModel) {
    this.id = investmentModel.id;
    this.currency = investmentModel.currency;
    this.amount = investmentModel.amount;
  }
}
