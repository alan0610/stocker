var express = require('express');
var router = express.Router();
const SaleDetailController = require('../controllers/saleDetailController');

router.get('/', SaleDetailController.getAll);
router.delete('/:id', SaleDetailController.delete);
router.get('/:id', SaleDetailController.getById);

module.exports = router;
