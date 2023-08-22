const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const Validator = require("../middlewares/validator");

const BrandsController = require("../controllers/brandsController");
//const RoleValidator = require('../middlewares/roleValidator');

router.get("/", BrandsController.getAll);

router.post(
  "/",
  body("title", "title required").notEmpty(),
  Validator.validateField,
  //RoleValidator.isAdmin,
  BrandsController.create
);

router.get("/:id", /*RoleValidator.isAdmin,*/ BrandsController.getById);
router.delete("/:id", /*RoleValidator.isAdmin,*/ BrandsController.delete);
router.put(
  "/:id",
  //RoleValidator.isAdmin,
  body("title", "title required").notEmpty(),
  Validator.validateField,
  BrandsController.update
);

module.exports = router;
