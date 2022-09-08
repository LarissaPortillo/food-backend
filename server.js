//Dependencies
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');
const db = mongoose.connection;


//Environment Variables
const app = express();
const mongoURI = process.env.MONGODB_URI;
const PORT = process.env.PORT || 3001;
const reviewRoutes = require('./routes/review');
const foodRoutes = require('./routes/food');
const userRoutes = require('./routes/user');


//Connect to Mongo
mongoose.connect(mongoURI, { useNewUrlParser : true }, ()=> console.log('MONGODB connection established:', mongoURI));

//Error//Disconnection
db.on('error', err=>console.log(err.message + 'is Mongo not running?'));
db.on('disconnected', ()=>console.log('mongo disconnected'));

//Middleware
app.use(express.urlencoded({ extended : true }));
app.use(express.json());
app.use(express.static('public'));
app.use(cors());

//Routes
//review
app.use('/api/review', reviewRoutes);
app.use('/food', foodRoutes);
app.use('/api/user', userRoutes);


app.listen(PORT, ()=>{
    console.log('Listening on port ', PORT);
});