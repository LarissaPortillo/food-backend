const express = require('express');
const router = express.Router();
const reviewCtrl = require('../controllers/reviewController')
const requireAuth = require('../middleware/requireAuth');

//require auth for all review routes
router.use(requireAuth);

//seed
router.get('/seed', reviewCtrl.reviewSeed);

//INDUCES

//Index
router.get('/', reviewCtrl.getReviews);

//New -- will be handled by react app

//Delete
router.delete('/:id', reviewCtrl.deleteReview);

//Update
router.put('/:id', reviewCtrl.updateReview);

//Create
router.post('/', reviewCtrl.createReview);

//Edit--will be handled by react app


//Show
router.get('/:id', reviewCtrl.showReview);

module.exports = router;