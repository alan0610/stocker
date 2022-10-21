var express = require('express');
var router = express.Router();
const StockController = require('../controllers/stockController');
const Validator = require('../middlewares/validator');
const { body } = require('express-validator');

router.put('/:id', StockController.update);
router.get('/', StockController.getAll);
router.delete('/:id', StockController.delete);
router.post(
  '/',
  body('productId', 'productId required').notEmpty(),
  body('stock', 'stock required').notEmpty(),
  body('lastPurchase', 'lastPurchase required').notEmpty(),
  Validator.validateField,
  StockController.create
);
router.get('/:id', StockController.getById);

module.exports = router;
