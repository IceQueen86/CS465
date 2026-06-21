const { hash } = require('crypto');
const mongoose = require('mongoose');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const userScheme = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    hash: String,
    salt: String
});

// Method to set the password on this record
userScheme.methods.setPassword = function(password){
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
};

// Method to compare entered password against stored hash
userScheme.methods.validPassword = function(password){
    var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
    return this.hash === hash;
};

// Method to generate a JSON Web Token
userScheme.methods.generateJWT = function(){
    return jwt.sign({
        _id: this._id,
        email: this.email,
        name: this.name,
    },
    process.env.JWT_SECRET,
    { expiresIn: '1h' });
};

const User = mongoose.model('users', userScheme);
module.exports = User;
mongoose.model('users', userScheme);