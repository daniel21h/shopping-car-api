const Car = require('../models/Car');

class CarsController{
  constructor(dao) {
    this.dao = dao;
  }

  index = async (request, response) => {
    const cars = await this.dao.find();

    return response.json(cars);
  }

  create = async (request, response) => {
    const car = await this.dao.create(request.body);

    return response.status(201).json(car);
  }
}

module.exports = new CarsController(Car);