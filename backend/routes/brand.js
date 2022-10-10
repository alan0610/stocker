var express = require('express');
var router = express.Router();
const BrandController = require('../controllers/brandController');

router.put('/:id', BrandController.updateBrand);
router.get('/', BrandController.getAll);
router.delete('/:id', BrandController.deleteBrand);
router.post('/', BrandController.create);

module.exports = router;
