import { ITransactionRepository } from "../ITransactionRepository";
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
    let text= response.Body.toString();
    let reader = text.split("\n");
    for (const line of reader) {
      console.log(line);
      console.log("--------------------------------");
    }
    return  [];
  }
}
