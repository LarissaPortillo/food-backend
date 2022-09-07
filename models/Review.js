const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    food: String,
    notes: String,
    rating: Number,
    level: Number,
    love: Boolean,
    tried: Boolean,
    user_id: {type: String, required:true}
}, { timestamps : true });

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;