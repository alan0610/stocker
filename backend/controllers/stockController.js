const { Product, Stock, Brand, Clothing, Type } = require('../models');

class StockController {
  static async update(req, res) {
    const { id } = req.params;
    const data = req.body;
    try {
      await Stock.update({ ...data }, { where: { id } });
      res.status(200).send('Stock updated');
    } catch (error) {
      res.status(404).send('An error has occurred');
    }
  }
  static async create(req, res) {
    const data = req.body;
    try {
      const newStock = await Stock.create(data);
      res.status(200).send(newStock);
    } catch (err) {
      console.log(err);
      res.status(500).send({ msg: 'Internal Server error' });
    }
  }
  static async delete(req, res) {
    const productInStock = await Stock.destroy({ where: { id: req.params.id } });
    if (productInStock) {
      return res.status(200).send({ msg: 'Product Deleted from Stock' });
    }
    return res.status(404).send("That product doesn't exist");
  }
  static async getAll(req, res) {
    try {
      const stock = await Stock.findAll({
        attributes: ['id', 'stock', 'lastPurchase'],
        include: [
          {
            model: Product,
            as: 'product',
            attributes: ['code', 'title', 'size', 'cost', 'price'],
            include: [
              { model: Brand, as: 'brand', attributes: ['name'] },
              { model: Type, as: 'type', attributes: ['name'] },
              { model: Clothing, as: 'clothing', attributes: ['name'] }
            ]
          }
        ]
      });
      res.status(200).json(stock);
    } catch (error) {
      console.log(error);
      res.status(404).send('Ha ocurrido un error');
    }
  }
  static async getById(req, res) {
    const { id } = req.params;
    let stock;
    try {
      stock = await Stock.findByPk(id, {
        attributes: ['id', 'stock', 'lastPurchase'],
        include: [
          {
            model: Product,
            as: 'product',
            attributes: ['code', 'title', 'size', 'cost', 'price'],
            include: [
              { model: Brand, as: 'brand', attributes: ['name'] },
              { model: Type, as: 'type', attributes: ['name'] },
              { model: Clothing, as: 'clothing', attributes: ['name'] }
            ]
          }
        ]
      });
    } catch (error) {
      return res.status(500).json({ msg: 'Internal Server error' });
    }
    if (stock) {
      return res.status(200).json(stock);
    } else {
      return res.status(404).json({ msg: 'Product not found' });
    }
  }
}

module.exports = StockController;
