var express = require('express');
var router = express.Router();
const UserController = require('../controllers/userController');
const { check } = require('express-validator');
const Validator = require('../middlewares/validator');

router.get('/', UserController.getAllUsers);
router.delete('/:id', UserController.deleteUser);
router.patch(
  '/:id',
  check('fullName', 'fullName is required').notEmpty(),
  check('email', 'invalid email').notEmpty().isEmail(),
  check('dateOfBirth', 'dateOfBirth is required').notEmpty(),
  check('password', 'password is required').notEmpty(),
  check('address', 'address is required').notEmpty(),
  check('passsword', 'password is required').notEmpty(),
  Validator.validateField,
  UserController.updateUser
);

router.post(
  '/register',
  check('fullName', 'fullName is required').notEmpty(),
  check('email', 'invalid email').notEmpty().isEmail(),
  check('dateOfBirth', 'dateOfBirth is required').notEmpty(),
  check('password', 'password is required').notEmpty(),
  check('address', 'address is required').notEmpty(),
  check('password', 'password is required').notEmpty(),
  Validator.validateField,
  UserController.create
);

router.post(
  '/login',
  check('email', 'invalid email').notEmpty().bail().isEmail(),
  check('password', 'password required').notEmpty(),
  Validator.validateField,
  UserController.login
);

module.exports = router;
