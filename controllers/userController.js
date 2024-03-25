const UserService = require('../services/userService');

class UserController {
  static async getAllUsers(req, res, next) {
    try {
      const users = await UserService.getAllUsers();
      res.json(users);
    } catch (error) {
      next(error);
    }
  }

  static async getUserById(req, res, next) {
    try {
      const id = req.params.id;
      const user = await UserService.getUserById(id);
      res.json(user);
    } catch (error) {
      next(error);
    }
  }

  static async createUser(req, res, next) {
    try {
      const user = req.body;
      const newUser = await UserService.createUser(user);
      res.status(201).json(newUser);
    } catch (error) {
      next(error);
    }
  }

  static async updateUser(req, res, next) {
    try {
      const id = req.params.id;
      const user = req.body;
      const updatedUser = await UserService.updateUser(id, user);
      res.json(updatedUser);
    } catch (error) {
      next(error);
    }
  }

  static async deleteUser(req, res, next) {
    try {
      const id = req.params.id;
      await UserService.deleteUser(id);
      res.sendStatus(204);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = UserController;
