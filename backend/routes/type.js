var express = require('express');
var router = express.Router();
const TypeController = require('../controllers/typeController');
const Validator = require('../middlewares/validator');
const { body } = require('express-validator');

router.put('/:id', TypeController.update);
router.get('/', TypeController.getAll);
router.delete('/:id', TypeController.delete);
router.post(
  '/',
  body('name', 'name required').notEmpty(),
  body('clothingId', 'clothingId required').notEmpty(),
  Validator.validateField,
  TypeController.create
);
router.get('/:id', TypeController.getById);

module.exports = router;
