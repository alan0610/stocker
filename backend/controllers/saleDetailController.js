const { SaleDetail, Sale, Product, User, Brand, Clothing, Type } = require('../models');

class SaleDetailController {
  static async delete(req, res) {
    const saleDetail = await SaleDetail.destroy({ where: { id: req.params.id } });
    if (saleDetail) {
      return res.status(200).send({ msg: 'Sale detail Deleted' });
    }
    return res.status(404).send("That sale detail doesn't exist");
  }
  static async getAll(req, res) {
    try {
      const saleDetails = await SaleDetail.findAll({
        attributes: ['id'],
        include: [
          {
            model: Sale,
            as: 'sale',
            attributes: ['id', 'total', 'date'],
            include: [
              { model: User, as: 'user', attributes: ['fullName', 'email', 'dateOfBirth', 'address', 'apartment'] }
            ]
          },
          {
            model: Product,
            as: 'product',
            attributes: ['id', 'code', 'title', 'size', 'cost', 'price'],
            include: [
              { model: Brand, as: 'brand', attributes: ['name'] },
              { model: Type, as: 'type', attributes: ['name'] },
              { model: Clothing, as: 'clothing', attributes: ['name'] }
            ]
          }
        ]
      });
      res.status(200).json(saleDetails);
    } catch (error) {
      console.log(error);
      res.status(404).send('Ha ocurrido un error');
    }
  }
  static async getById(req, res) {
    const { id } = req.params;
    let saleDetail;
    try {
      saleDetail = await SaleDetail.findByPk(id, {
        attributes: ['id'],
        include: [
          {
            model: Sale,
            as: 'sale',
            attributes: ['id', 'total', 'date', 'userId'],
            include: [
              { model: User, as: 'user', attributes: ['fullName', 'email', 'dateOfBirth', 'address', 'apartment'] }
            ]
          },
          {
            model: Product,
            as: 'product',
            attributes: ['id', 'code', 'title', 'size', 'cost', 'price'],
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
    if (saleDetail) {
      return res.status(200).json(saleDetail);
    } else {
      return res.status(404).json({ msg: 'Sale detail not found' });
    }
  }
}

module.exports = SaleDetailController;
