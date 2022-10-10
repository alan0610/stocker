var express = require('express');
var router = express.Router();
const ClothingController = require('../controllers/clothingController');
const Validator = require('../middlewares/validator');
const { body } = require('express-validator');

router.put('/:id', ClothingController.updateClothing);
router.get('/', ClothingController.getAll);
router.delete('/:id', ClothingController.deleteClothing);
router.post('/', body('name', 'name required').notEmpty(), Validator.validateField, ClothingController.create);

module.exports = router;
