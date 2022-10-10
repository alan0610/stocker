var express = require('express');
var router = express.Router();
const BrandController = require('../controllers/brandController');
const Validator = require('../middlewares/validator');
const { body } = require('express-validator');

router.put('/:id', BrandController.updateBrand);
router.get('/', BrandController.getAll);
router.delete('/:id', BrandController.deleteBrand);
router.post('/', body('name', 'name required').notEmpty(), Validator.validateField, BrandController.create);

module.exports = router;
