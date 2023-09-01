const models = require("../models");
class CategoriesController {
  static async getAll(req, res) {
    try {
      const categories = await models.Category.findAll();
      if (categories) {
        res.status(200).json(categories);
      } else {
        res.status(404).send({ msg: "There is no categories" });
      }
    } catch (error) {
      res.status(500).send({ msg: "An error has occurred" });
      console.error(error);
    }
  }

  static async getById(req, res) {
    const { id } = req.params;
    let category;
    try {
      category = await models.Category.findByPk(id);
    } catch (error) {
      return res.status(500).json({ msg: "An error has occurred" });
    }
    if (category) {
      return res.status(200).json(category);
    } else {
      return res.status(404).json({ msg: "Category not found" });
    }
  }

  static async create(req, res) {
    const data = req.body;
    try {
      const newCategory = await models.Category.create(data);
      return res.status(200).json(newCategory);
    } catch (e) {
      return res.status(500).json({ msg: "An error has occurred" });
      console.error(error);
    }
  }

  static async update(req, res) {
    const { id } = req.params;
    const { title } = req.body;
    let categoriesUpdated = {};

    try {
      categoriesUpdated = await models.Category.findByPk(id);
      categoriesUpdated.title = title;
    } catch (error) {
      return res.status(404).json({ msg: "Category not found" });
    }
    try {
      await categoriesUpdated.save();
      return res.status(200).json(categoriesUpdated);
    } catch (error) {
      return res.status(500).json({ msg: "An error has occurred" });
    }
  }

  static async delete(req, res) {
    try {
      const { id } = req.params;
      const deleteCategory = await models.Category.destroy({ where: { id } });
      if (deleteCategory) {
        return res
          .status(200)
          .send({ msg: "The category has been eliminated" });
      }
      return res.status(404).json({ msg: "This category doesn't exist" });
    } catch (error) {
      res.status(500).json({ msg: "An error has occurred" });
    }
  }

  static async getProductsByCategory(req, res) {
    const categoryId = req.params.id
    let category;
    try {
      category = await models.Category.findByPk(categoryId);
    } catch (error) {
      console.error(error)
      return res.status(500).json({ msg: "An error has occurred" });
    }
    if (category) {
      const products = await models.Product.findAll({
        where: { categoryId: categoryId }
      });
      res.json(products);
    } else {
      return res.status(404).json({ msg: "Category not found" });
    }
  }
}

module.exports = CategoriesController;
