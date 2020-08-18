const router = require('express').Router();
const carsController = require('../controllers/CarsController');

router.get('/', carsController.index);


module.exports = router;