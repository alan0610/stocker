const { Clothing } = require('../models');

class ClothingController {
  static async updateClothing(req, res) {
    const { id } = req.params;
    const data = req.body;
    try {
      await Clothing.update({ ...data }, { where: { id } });
      res.status(200).send('Clothing updated');
    } catch (error) {
      res.status(404).send('An error has occurred');
    }
  }
  static async create(req, res) {
    const data = req.body;
    try {
      const newClothing = await Clothing.create(data);
      res.status(200).send(newClothing);
    } catch (err) {
      console.log(err);
      res.status(500).send({ msg: 'Internal Server error' });
    }
  }
  static async deleteClothing(req, res) {
    const clothing = await Clothing.destroy({ where: { id: req.params.id } });
    if (clothing) {
      return res.status(200).send({ msg: 'Brand Deleted' });
    }
    return res.status(404).send("That brand doesn't exist");
  }
  static async getAll(req, res) {
    const clothes = await Clothing.findAll({ attributes: ['id', 'name'] });
    try {
      res.status(200).json(clothes);
    } catch (error) {
      res.status(404).send('Ha ocurrido un error');
    }
  }
}

module.exports = ClothingController;
