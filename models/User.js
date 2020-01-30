const mongoose = require('mongoose')
const Schema = mongoose.Schema
const userSchema = new Schema({
 
    UserName:{
        type:String,
        required:true,
        minlength : 4,
    },
    Score:{
        type:Number
    },
    age:{
        type:Number,
        required:false
    },
    isActive:{
        type:Number,
        default:0
    },
    Coin:{
        type:Number
    }

})

module.exports = mongoose.model('users',userSchema)