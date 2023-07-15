const express=require('express');
const router=express.Router();
const Todo=require("../models/Todo")

//Routes

router.post("/add/todo/Category/date", (req,res)=>{
    const { todo,Category, date } = req.body;
    console.log("Todo:", todo);
    console.log("Category:", Category);

    console.log("Date:", date);

    const newTodo=new Todo({todo,Category,date})

//save the Task

    newTodo.save()

    .then(()=>{
        console.log("Task Successfully added");
        res.redirect("/")
    })
    .catch((err)=>{
        console.log("this is an error "+err)
    })

});

// // deleting Tasks

router.get("/delete/todo/:_id", (req,res)=>{
        const {_id}=req.params;
        Todo.deleteOne({_id})
        .then(()=>{
            console.log("Delete Task Successfully");
        res.redirect("/")

        }).catch((err)=>{
            console.log("this is an error "+err);
        })
    })






module.exports=router;