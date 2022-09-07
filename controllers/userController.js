const User = require('../models/User');
//installed jsonwebtoken
const jwt = require('jsonwebtoken');

//generate token in login and signup
const createToken = (_id)=>{ //pass in the id of the user
    return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d' }); //(object the represents payload,secret,expiration timeline of token )
}

//login user
const loginUser = async (req,res)=>{
    const {username, password} = req.body;

    try{
        const user = await User.login(username, password);

        //create token
        const token = createToken(user._id);
        res.status(200).json({username, token});
    }
    catch(error){
        res.status(400).json({error: error.message});
    }
     
};

//signup user
const signupUser = async (req,res)=>{
    const { name, username, password } = req.body; 

    try{
        const user = await User.signup(name, username, password);
        
        //create a token
        const token = createToken(user._id);
        console.log(token);

        res.status(200).json({name, username, token});
    }
    catch(error){
        res.status(400).json({error: error.message});
    }
};

module.exports = { loginUser, signupUser };