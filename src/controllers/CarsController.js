class CarsController{
  index (request, response) {
    return response.json({ message: 'Cars...' });
  }
}

module.exports = new CarsController();