const mongoose=require('mongoose');


// Todo List Schema
const todoSchema=new mongoose.Schema({
    todo:{
        type: String,
        required: true
    },
    Category:{
        type:String,
        required: true
    },

    date: {
        type: Date,
        required: true
    }





});


module.exports=new mongoose.model("Todo", todoSchema);