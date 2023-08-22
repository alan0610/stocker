const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const Validator = require('../middlewares/validator');

const ProductController = require('../controllers/productsController');
const RoleValidator = require('../middlewares/roleValidator');

router.get('/', ProductController.getAll);

router.post(
  '/',
  body('title', 'title required').notEmpty(),
  body('description', 'description required').notEmpty(),
  body('categoryId', 'categoryId required').notEmpty(),
  body('brandId', 'brandId required').notEmpty(),
  body('size', 'size required').notEmpty(),
  body('color', 'color required').notEmpty(),
  body('stock', 'stock required').notEmpty().isInt(),
  Validator.validateField,
  RoleValidator.isAdmin,
  ProductController.create
);

router.get('/:id', RoleValidator.isAdmin, ProductController.getById);
router.delete('/:id', RoleValidator.isAdmin, ProductController.delete);
router.put(
  '/:id',
  RoleValidator.isAdmin,
  body('title', 'title required').notEmpty(),
  body('description', 'description required').notEmpty(),
  body('categoryId', 'categoryId required').notEmpty(),
  body('brandId', 'brandId required').notEmpty(),
  body('size', 'size required').notEmpty(),
  body('color', 'color required').notEmpty(),
  body('stock', 'stock required').notEmpty().isInt(),
  Validator.validateField,
  ProductController.update
);

module.exports = router;