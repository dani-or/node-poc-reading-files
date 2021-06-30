import { ITransactionRepository } from "../ITransactionRepository";
import { Transaction } from "../../entities/Transaction";
export class MockTransactionRespository implements ITransactionRepository {

  async getTransactions() {
    let credit = new Transaction({
       value: 10000,
       debenture : "122323",    
       endDate : 2343242343,    
       startDate : 34234234,    
       status : 1
    });
    return  [credit];
  }
}
