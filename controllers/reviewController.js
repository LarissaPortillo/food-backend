const Review = require('../models/Review');
const Data = require('../utilities/reviewSeed')

const reviewSeed = async(req,res)=>{
    await Review.deleteMany({});
    await Review.create(Data);
    res.send("done!");
};

//INDUCES

//Index
const getReviews = (req,res)=>{
    const user_id=req.user._id;
    Review.find({user_id}, (err,foundReviews)=>{
        res.json(foundReviews);
    });
};

//New -- will be handled by react app

//Delete
const deleteReview = (req,res)=>{
    Review.findByIdAndRemove(req.params.id, (err, deletedReview)=>{
        res.json(deletedReview);
    });
};

//Update
const updateReview = (req,res)=>{
    Review.findByIdAndUpdate(req.params.id, req.body, { new : true }, (err,updatedReview)=>{
        res.json(updatedReview);
    });
};

//Create
const createReview = (req,res)=>{
    const user_id= req.user._id;
    req.body.user_id=user_id;
    Review.create(req.body, (err, createdReview)=>{
        res.json(createdReview);
    });
};

//Edit--will be handled by react app


//Show
const showReview = (req,res)=>{
    Review.findById(req.params.id, (err,foundReview)=>{
        res.json(foundReview);
    });
};

module.exports = {
    reviewSeed,
    getReviews,
    deleteReview,
    updateReview,
    createReview,
    showReview
}