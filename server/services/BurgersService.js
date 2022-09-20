import { fakeDB } from "../db/fakeDB.js"
import { BadRequest } from "../utils/Errors.js"

class BurgersService {
  async createBurger(formData) {
    formData.id = Math.floor(Math.random() * 10000)
    await fakeDB.burgers.push(formData)
    return formData
  }
  async removeBurger(burgerId) {
    const burger = await this.getBurgerById(burgerId)
    fakeDB.burgers.splice(fakeDB.burgers.indexOf(burger), 1)
  }
  async getBurgerById(burgerId) {
    const burger = fakeDB.burgers.find(b => b.id == burgerId)
    if (!burger) {
      throw new BadRequest('Invalid Id')
    }
    return burger
  }
  async getAllBurgers() {
    const res = fakeDB
    return res.burgers
  }

}
export const burgersService = new BurgersService()