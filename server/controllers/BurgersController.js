import { burgersService } from "../services/BurgersService.js";
import BaseController from "../utils/BaseController.js";

export class BurgersController extends BaseController {
  constructor() {
    super('/api/burgers')
    this.router
      .get('', this.getAllBurgers)
      .get('/:burgerId', this.getBurgerById)
      .delete('/:burgerId', this.removeBurger)
  }
  async getAllBurgers(req, res, next) {
    try {
      const burgers = await burgersService.getAllBurgers()
      res.send(burgers)
    } catch (error) {
      next(error)
    }
  }
  async getBurgerById(req, res, next) {
    try {
      const burgerId = req.params.burgerId
      const burger = await burgersService.getBurgerById(burgerId)
      res.send(burger)
    } catch (error) {
      next(error)
    }
  }
  async removeBurger(req, res, next) {
    try {
      const burgerId = req.params.burgerId
      await burgersService.removeBurger(burgerId)
    } catch (error) {
      next(error)
    }
  }
  async createBurger(req, res, next) {
    try {
      const formData = req.body
      const burger = await burgersService.createBurger(formData)
      res.send(burger)
    } catch (error) {
      next(error)
    }
  }
}