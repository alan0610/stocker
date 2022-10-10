const { Brand } = require('../models');

class BrandController {
  static async updateBrand(req, res) {
    const { id } = req.params;
    const data = req.body;
    try {
      await Brand.update({ ...data }, { where: { id } });
      res.status(200).send('Brand updated');
    } catch (error) {
      res.status(404).send('An error has occurred');
    }
  }
  static async create(req, res) {
    const data = req.body;
    try {
      const newBrand = await Brand.create(data);
      res.status(200).send(newBrand);
    } catch (err) {
      console.log(err);
      res.status(500).send({ msg: 'Internal Server error' });
    }
  }
  static async deleteBrand(req, res) {
    const testimonial = await Brand.destroy({ where: { id: req.params.id } });
    if (testimonial) {
      return res.status(200).send({ msg: 'Brand Deleted' });
    }
    return res.status(404).send("That brand doesn't exist");
  }
  static async getAll(req, res) {
    try {
      const brands = await Brand.findAll({ attributes: ['id', 'name'] });
      res.status(200).json(brands);
    } catch (error) {
      res.status(404).send('Ha ocurrido un error');
    }
  }
}

module.exports = BrandController;
