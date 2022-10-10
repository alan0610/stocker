var express = require('express');
var router = express.Router();
const SaleController = require('../controllers/saleController');

router.get('/', SaleController.getAll);
router.delete('/:id', SaleController.delete);
router.get('/:id', SaleController.getById);

module.exports = router;
