import {getTransacionsController} from './useCases/transaction/getTransactions'

const app ={ start: getTransacionsController.handle()}

export { app };
