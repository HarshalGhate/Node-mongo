const mongoose=require('mongoose');

const USER=new mongoose.Schema({
    name:{type:String},
    email:{type:String},
    mobileno:{type:Number},

})

module.exports=mongoose.model("User",USER)