const models = require("../models");
const bcrypt = require("bcrypt");
const JwtUtils = require("../utils/jwtUtils");
const WELCOME_MESSAGE = "Bienvenido/a a nuestra ONG";

class UserController {
  static async deleteUser(req, res) {
    try {
      const { id } = req.params;
      const deleteUser = await models.User.destroy({ where: { id } });
      if (deleteUser) {
        return res.status(200).send({ msg: `The user has been eliminated` });
      }
      return res.status(400).json({ msg: "The user doesn't exist" });
    } catch (error) {
      res.status(404).json({ msg: "An error has occurred" });
    }
  }
  static async getAllUsers(req, res) {
    try {
      const users = await models.User.findAll();
      res.status(200).json(users);
    } catch (error) {
      res.status(404).send("An error has occurred");
    }
  }

  static async getByEmail(email) {
    const user = await models.User.findOne({ where: { email } });
    if (!user) {
      throw new Error("Invalid email");
    }
    return user.dataValues;
  }

  static async create(req, res) {
    const data = req.body;
    try {
      data.password = await UserController.encryptPassword(data.password);
      const newUser = await models.User.create(data);
      delete newUser.dataValues.password;
      res.status(200).send(newUser);
    } catch (err) {
      console.log(err);
      res.status(500).json({ msg: "Internal Server error" });
    }
  }

  static async encryptPassword(password) {
    const salt = await bcrypt.genSalt();
    const passwordEncripted = await bcrypt.hash(password, salt);
    return passwordEncripted;
  }

  static async login(req, res) {
    const { email, password } = req.body;
    try {
      const user = await models.User.findOne({ where: { email: email } });
      if (user) {
        const validPass = bcrypt.compareSync(password, user.password);
        if (validPass) {
          const { email } = user.dataValues;
          const token = JwtUtils.generateToken({ email });
          res.status(200).json({ msg: "Valid email and password", token });
        } else {
          res.json("Wrong password");
        }
      } else {
        res.status(404).json("User not found");
      }
    } catch (e) {
      console.log(e);
      res.status(500).json("ok: false");
    }
  }

  static async authenticateMe(req, res) {
    let user = req.user;
    delete user.password;
    delete user.roleId;
    delete user.deletedAt;
    res.status(200).send({ msg: "Datos del usuario authenticado", user });
  }
  static async updateUser(req, res) {
    const id = req.params.id;
    const datosUser = req.body;
    const { password } = datosUser;

    if (password) {
      const salt = bcrypt.genSaltSync();
      const newPassword = bcrypt.hashSync(password, salt);
      datosUser.password = newPassword;
    }
    try {
      await models.User.update(datosUser, { where: { id } });
      res.status(200).json({ msg: "updated user" });
    } catch (error) {
      res.status(404).json({ msg: "user does not exist" });
    }
  }
}

module.exports = UserController;
