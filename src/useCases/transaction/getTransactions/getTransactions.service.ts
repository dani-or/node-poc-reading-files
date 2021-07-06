import { ITransactionRepository } from "../../../repositories/ITransactionRepository";
import { Transaction } from "../../../entities/Transaction";

export class GetTransactionService {
  constructor(
    private transactionRepository: ITransactionRepository,
  ) {}

  async execute() {
    //Acá va la logica de mi negocio
    let transactions:Transaction[]  =await this.transactionRepository.getTransactions();
    return transactions;
  }
}
