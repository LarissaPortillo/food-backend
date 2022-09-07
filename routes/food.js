const express = require('express');
const router = express.Router();
const foodCtrl = require('../controllers/foodController')

//Seed 
router.get('/seed', foodCtrl.foodSeed);

//Index
router.get('/', foodCtrl.getFoods);

//new

//delete
router.delete('/:id', foodCtrl.deleteFood);

//update
router.put('/:id', foodCtrl.updateFood);

//create
router.post('/', foodCtrl.createFood);

//Edit

//Show
router.get('/:id', foodCtrl.showFood);

module.exports = router;