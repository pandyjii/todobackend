

const mongoose=require('mongoose');

const TodoSchema=new mongoose.Schema({
    firstName:{type:String,required:true},
    lastName:{type:String,required:true}
})

exports.data=mongoose.model('data',TodoSchema);