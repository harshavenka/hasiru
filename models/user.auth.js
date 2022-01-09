const mongoose = require('mongoose');
const  Db  = require('mongoose/node_modules/mongodb');



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

async function getUserwithSameEmail(){
 return Db.getDb().collection('userDetails').findOne({email:this.email});
    
};


module.exports = {
    users:user,
    getUserwithSameEmail:getUserwithSameEmail
    
};