import { GetTransacionsController } from "./getTransactions.controller";
import { GetTransactionService } from "./getTransactions.service";
import { S3TransactionRespository } from "../../../repositories/implementations/S3TransactionRespository";
const s3TransactionRespository = new S3TransactionRespository();
const getTransactionService = new GetTransactionService(s3TransactionRespository);
const getTransacionsController = new GetTransacionsController(getTransactionService);
export { getTransactionService, getTransacionsController};