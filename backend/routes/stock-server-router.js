import express from 'express';

//import controller file
import * as stockController from '../controllers/stock-server-controller';

// get an instance of express router
const router = express.Router();

router.route('/')
  .post(stockController.addStock)
  .get(stockController.getStocks);

// .put(stockController.updateStock);

// router.route('/:id')
//   .get(stockController.getStock)
//   .delete(stockController.deleteStock);

export default router;