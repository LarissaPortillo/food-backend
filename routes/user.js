const express = require('express');
const router = express.Router();

//controller functions
const { signupUser, loginUser } = require('../controllers/userController');

//login Route, login user
router.post('/login', loginUser);


//signup route, signupuser
router.post('/signup',signupUser);


module.exports = router;