//installed bcrypt for hashing passwords


const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    username: {
        type: String, 
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }
});

//creating own static signup method
userSchema.statics.signup = async function(name, username, password){
   
    //validation
    if(!name || !username || !password){
        throw Error('All fields must be filled');
    }

    if(password.length < 6){ //minlength of 6 for password
        throw Error('Password has to be atleast 6 characters long')
    }

    //check if username already exists
    const exists = await this.findOne({ username });
    if(exists){
        throw Error('Username already in use')
    }

    // mypassword + salt --> adding salt prevents identical passwords from being recognized, salt would be different on both even if hashing of mypassword is the same
    const salt = await bcrypt.genSalt(10); //higher number harder to crack but also takes longer for user to log in, 10 is default
    const hash = await bcrypt.hash(password, salt);

    const user = await this.create({ name, username, password: hash });
    return user;
}

//static login method
userSchema.statics.login = async function(username, password){
    if(!username || !password){
        throw Error('All fields must be filled');
    }

    const user = await this.findOne({ username });
    if(!user){ //can't find anyone with that username
        throw Error('Incorrect username');
    }

    const match = await bcrypt.compare(password, user.password);

    if(!match){
        throw Error('Incorrect password');
    }

    return user;

}

const User = mongoose.model('User', userSchema);

module.exports = User; 