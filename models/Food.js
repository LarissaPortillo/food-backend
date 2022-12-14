const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
    name: String,
    film: String,
    studio: String,
    ingredients: Array,
    instructions: String,
    time: Number,
    source: String,
    img: String,
    img_f:String,
});

const Food = mongoose.model('Food', foodSchema);

module.exports = Food;