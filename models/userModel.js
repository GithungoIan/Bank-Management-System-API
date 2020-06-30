const crypto = require('crypto');
const mongoose = require('mongoose');
const validator = require('validator')

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Please tell us your name!'],
    },
    email: {
        type: String,
        required: [true, 'Please provide your email'],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'Please provide a valid email'],
      },
      
      role: {
          type: String,
          default: 'user',
          enum: ['user', 'teller', 'admin']
      },
      password:{
          type: String,
          required:[true, 'Please provide your password'],
          minlength:8,
          select: false,
      },
      passwordConfirm:{
          type: String,
          required:[true, 'Please confirm your password'],
          validate: {
              //This only works on save
              validator: function(el){
                  return el === this.password;
              },
              message: 'Passwords are not the same!',
          }
      },
      passwordChangedAt: Date,
      passwordResetToken: String,
      passwordResetExpires: Date,
      active: {
          type: Boolean,
          default: true,
          select: false,
      }
})

const User = mongoose.model('User', userSchema);
module.exports = User;