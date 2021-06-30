"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.S3TransactionRespository = void 0;
const Transaction_1 = require("../../entities/Transaction");
class S3TransactionRespository {
    async getTransactions() {
        let credit = new Transaction_1.Transaction({
            value: 10000,
            debenture: "122323",
            endDate: 2343242343,
            startDate: 34234234,
            status: 1
        });
        return [credit];
    }
}
exports.S3TransactionRespository = S3TransactionRespository;
