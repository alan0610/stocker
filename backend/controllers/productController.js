const { Product, Brand, Clothing, Type } = require('../models');

class ProductController {
  static async update(req, res) {
    const { id } = req.params;
    const data = req.body;
    try {
      await Product.update({ ...data }, { where: { id } });
      res.status(200).send('Product updated');
    } catch (error) {
      res.status(404).send('An error has occurred');
    }
  }
  static async create(req, res) {
    const data = req.body;
    try {
      const newProduct = await Product.create(data);
      res.status(200).send(newProduct);
    } catch (err) {
      console.log(err);
      res.status(500).send({ msg: 'Internal Server error' });
    }
  }
  static async delete(req, res) {
    const product = await Product.destroy({ where: { id: req.params.id } });
    if (product) {
      return res.status(200).send({ msg: 'Product Deleted' });
    }
    return res.status(404).send("That product doesn't exist");
  }
  static async getAll(req, res) {
    try {
      const products = await Product.findAll({
        attributes: ['id', 'code', 'title', 'description', 'color', 'size', 'cost', 'price'],
        include: [
          { model: Brand, as: 'brand', attributes: ['name'] },
          { model: Clothing, as: 'clothing', attributes: ['name'] },
          { model: Type, as: 'type', attributes: ['name'] }
        ]
      });
      res.status(200).json(products);
    } catch (error) {
      console.log(error);
      res.status(404).send('Ha ocurrido un error');
    }
  }
  static async getById(req, res) {
    const { id } = req.params;
    let product;
    try {
      product = await Product.findByPk(id);
    } catch (error) {
      return res.status(500).json({ msg: 'Internal Server error' });
    }
    if (product) {
      return res.status(200).json(product);
    } else {
      return res.status(404).json({ msg: 'Product not found' });
    }
  }
}

module.exports = ProductController;
