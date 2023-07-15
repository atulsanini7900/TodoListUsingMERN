const express=require('express');
const mongoose=require('mongoose');
const app=express();
const port= 8002;


//connection to mongodb
mongoose.connect("mongodb://127.0.0.1:27017/todo", {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
    console.log("database connected")
}).catch((err)=>{
    console.log("this is error "+err);
});


//middlewares
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

//routes

app.use(require("./routes/index"));

app.use(require("./routes/todo"));


//server configuration

app.listen(port, ()=>{
    console.log("server starting at "+port);
});