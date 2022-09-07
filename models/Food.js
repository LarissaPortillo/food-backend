const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
    food: String,
    film: String,
    studio: String,
    ingredients: Array,
    instructions: String,
    time: Number,
    source: String,
    video: String,
    img_c: String,
    img_f: String,
    img_r: String,
});

const Food = mongoose.model('Food', foodSchema);

module.exports = Food;