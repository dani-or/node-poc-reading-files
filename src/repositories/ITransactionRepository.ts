import { Transaction } from "../entities/Transaction";

export interface ITransactionRepository {
  getTransactions() : Promise<Array<Transaction>>;
}