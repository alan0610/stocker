const { Sale, User } = require('../models');

class SaleController {
  static async delete(req, res) {
    const sale = await Sale.destroy({ where: { id: req.params.id } });
    if (sale) {
      return res.status(200).send({ msg: 'Sale Deleted' });
    }
    return res.status(404).send("That sale doesn't exist");
  }
  static async getAll(req, res) {
    try {
      const sales = await Sale.findAll({
        attributes: ['id', 'total', 'date'],
        include: [{ model: User, as: 'user', attributes: ['fullName', 'email', 'dateOfBirth', 'address', 'apartment'] }]
      });
      res.status(200).json(sales);
    } catch (error) {
      console.log(error);
      res.status(404).send('Ha ocurrido un error');
    }
  }
  static async getById(req, res) {
    const { id } = req.params;
    let sale;
    try {
      sale = await Sale.findByPk(id, {
        attributes: ['id', 'total', 'date'],
        include: [{ model: User, as: 'user', attributes: ['fullName', 'email', 'dateOfBirth', 'address', 'apartment'] }]
      });
    } catch (error) {
      return res.status(500).json({ msg: 'Internal Server error' });
    }
    if (sale) {
      return res.status(200).json(sale);
    } else {
      return res.status(404).json({ msg: 'Sale not found' });
    }
  }
}

module.exports = SaleController;
