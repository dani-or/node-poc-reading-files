import { ITransactionRepository } from "../ITransactionRepository";
import { Transaction } from "../../entities/Transaction";
import { S3 } from 'aws-sdk';

export class S3TransactionRespository implements ITransactionRepository {


  private s3 = new S3({ signatureVersion: 'v4' });
  //export NEQUI_BUCKET_NAME=nequi-s3-select-tmp
  //export NEQUI_FILE_KEY=resource/FINACLE_NEQUICARTERA_20200508_VENCIDOS.csv
  async getTransactions() {
    let params = {
      Bucket: process.env.NEQUI_BUCKET_NAME,
      Key: process.env.NEQUI_FILE_KEY
    };

    let response = await this.s3.getObject(params).promise();
    let string =  response.Body.toString('utf-8');
    console.log(string);
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
