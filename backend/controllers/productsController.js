const models = require("../models");

class ProductsController {
  static async getAll(req, res) {
    try {
        const products = await models.Product.findAll();
        if(products) {
            res.status(200).json(products);
        } else {
            res.status(404).send({ msg: "No hay products" });
        }
      } catch (error) {
        res.status(500).send({ msg: 'Internal Server error' });
        console.error(error);
      }
    }

  static async getById(req, res) {
    const { id } = req.params;
    let product;
    try {
        product = await models.Product.findByPk(id);
    } catch (error) {
      return res.status(500).json({ msg: 'Internal Server error' });
    }
    if (product) {
      return res.status(200).json(product);
    } else {
      return res.status(404).json({ msg: 'Product not found' });
    }
  }

  static async create(req, res) {
    const data = req.body;
    try {
      const newProduct = await models.Product.create(data);
      return res.status(200).json(newProduct);
    } catch (e) {
      return res.status(500).json({ msg: "Internal Server error" });
      console.error(error);
    }
  }

  static async update(req, res) {
    const { id } = req.params;
    const { title, description, categoryId, brandId, size, color, stock } =
      req.body;
    let productsUpdated = {};

    try {
      productsUpdated = await models.Product.findByPk(id);
      productsUpdated.title = title;
      productsUpdated.description = description;
      productsUpdated.categoryId = categoryId;
      productsUpdated.brandId = brandId;
      productsUpdated.size = size;
      productsUpdated.color = color;
      productsUpdated.stock = stock;
    } catch (error) {
      return res.status(404).json({ msg: "Products not found" });
    }
    try {
      await productsUpdated.save();
      return res.status(200).json(productsUpdated);
    } catch (error) {
      return res.status(500).json({ msg: "Internal Server error" });
    }
  }

  static async delete(req, res) {
    try {
      const { id } = req.params;
      const deleteProduct = await models.Product.destroy({ where: { id } });
      if (deleteProduct) {
        return res.status(200).send({ msg: 'El producto fue eliminado' });
      }
      return res.status(400).json({ msg: "Ese producto no existe" });
    } catch (error) {
      res.status(404).json({ msg: "Ah ocurrido un error" });
    }
  }
}

module.exports = ProductsController;
