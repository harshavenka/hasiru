const mongoose = require('mongoose');

const userschema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    fullname:{
        type:String,
        required:true
    },
    address:[{
        street:String,
        pincode:{type:String,required:true},
        city:{type:String,required:true}
    }]
});

const user = new mongoose.model("userDetails",userschema);

module.exports = user;