

const mongoose=require('mongoose');

const TodoSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true}
})

exports.useinfo=mongoose.model('useinfo',TodoSchema);