const { Type, Clothing } = require('../models');

class TypeController {
  static async update(req, res) {
    const { id } = req.params;
    const data = req.body;
    try {
      await Type.update({ ...data }, { where: { id } });
      res.status(200).send('Type updated');
    } catch (error) {
      res.status(404).send('An error has occurred');
    }
  }
  static async create(req, res) {
    const data = req.body;
    try {
      const newType = await Type.create(data);
      res.status(200).send(newType);
    } catch (err) {
      console.log(err);
      res.status(500).send({ msg: 'Internal Server error' });
    }
  }
  static async delete(req, res) {
    const productType = await Type.destroy({ where: { id: req.params.id } });
    if (productType) {
      return res.status(200).send({ msg: 'Type Deleted' });
    }
    return res.status(404).send("That Type doesn't exist");
  }
  static async getAll(req, res) {
    try {
      const type = await Type.findAll({
        attributes: ['id', 'name', 'clothingId'],
        include: [
          {
            model: Clothing,
            as: 'clothing',
            attributes: ['name']
          }
        ]
      });
      res.status(200).json(type);
    } catch (error) {
      console.log(error);
      res.status(404).send('Ha ocurrido un error');
    }
  }
  static async getById(req, res) {
    const { id } = req.params;
    let type;
    try {
      type = await Type.findByPk(id, {
        attributes: ['id', 'name', 'clothingId'],
        include: [
          {
            model: Clothing,
            as: 'clothing',
            attributes: ['name']
          }
        ]
      });
    } catch (error) {
      return res.status(500).json({ msg: 'Internal Server error' });
    }
    if (type) {
      return res.status(200).json(type);
    } else {
      return res.status(404).json({ msg: 'Type not found' });
    }
  }
}

module.exports = TypeController;
