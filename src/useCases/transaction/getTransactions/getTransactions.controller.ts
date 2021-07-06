import { GetTransactionService } from "./getTransactions.service";
import { Transaction } from "../../../entities/Transaction";
export class GetTransacionsController {

  constructor(private getTransactionsService: GetTransactionService) {}
  
  async handle(): Promise<Array<Transaction>> {
    try {
      let p = await this.getTransactionsService.execute();
      console.log("acá ya termino",p);
      return p;
    } catch (err) {
      console.log(err);
    }
  }
}