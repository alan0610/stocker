var express = require('express');
var router = express.Router();
const ProductController = require('../controllers/productController');
const Validator = require('../middlewares/validator');
const { body } = require('express-validator');

router.put('/:id', ProductController.update);
router.get('/', ProductController.getAll);
router.delete('/:id', ProductController.delete);
router.post(
  '/',
  body('brandId', 'brandId required').notEmpty(),
  body('clothingId', 'clothingId required').notEmpty(),
  body('typeId', 'typeId required').notEmpty(),
  body('code', 'code required').notEmpty(),
  body('title', 'title required').notEmpty(),
  body('description', 'description required').notEmpty(),
  body('color', 'color required').notEmpty(),
  body('size', 'size required').notEmpty(),
  body('cost', 'cost required').notEmpty(),
  body('price', 'price required').notEmpty(),
  Validator.validateField,
  ProductController.create
);
router.get('/:id', ProductController.getById);

module.exports = router;
