const Food = require('../models/Food');
const Data = require('../utilities/foodSeed');

//Seed 
const foodSeed = async(req,res)=>{
    await Food.deleteMany({});
    await Food.create(Data);
    res.send("done!");
};

//Index
const getFoods = (req, res)=>{
    Food.find({}, (err,foundFood)=>{
        res.json(foundFood);
    });
};

//new

//delete
const deleteFood = (req,res)=>{
    Food.findByIdAndRemove(req.params.id, (err, deletedFood)=>{
        res.json(deletedFood);
    });
};

//update
const updateFood = (req,res)=>{
    Food.findByIdAndUpdate(req.params.id, req.body, { new : true }, (err, updatedFood)=>{
        res.json(updatedFood);
    });
};

//create
const createFood = (req,res)=>{
    Food.create(req.body, (err, createdFood)=>{
        res.json(createdTodo);
    });
};

//Edit

//Show
const showFood = (req,res)=>{
    Food.findById(req.params.id, (err, foundFood)=>{
        res.json(foundFood);
    });
};

module.exports = {
    foodSeed,
    getFoods,
    deleteFood,
    updateFood,
    createFood,
    showFood
}