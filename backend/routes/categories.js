const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const Validator = require("../middlewares/validator");

const CategoriesController = require("../controllers/categoryController");
//const RoleValidator = require('../middlewares/roleValidator');

router.get("/", CategoriesController.getAll);

router.post(
  "/",
  body("title", "title required").notEmpty(),
  Validator.validateField,
  //RoleValidator.isAdmin,
  CategoriesController.create
);

router.get("/:id", /*RoleValidator.isAdmin,*/ CategoriesController.getById);
router.delete("/:id", /*RoleValidator.isAdmin,*/ CategoriesController.delete);
router.put(
  "/:id",
  //RoleValidator.isAdmin,
  body("title", "title required").notEmpty(),
  Validator.validateField,
  CategoriesController.update
);

module.exports = router;
