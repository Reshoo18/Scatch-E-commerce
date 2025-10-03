// const dotenv=require("dotenv");
// dotenv.config();

const express = require('express');

const router=express.Router();
const ownerModel=require("../models/owner.model.js");


router.get("/",function(req,res){
    res.send("hey its working ");
});


 console.log(process.env.NODE_ENV)
if(process.env.NODE_ENV==="development"){


router.post("/create",function(req,res){
    res.send("hey its working ");
});
}


module.exports=router;