// const dotenv=require("dotenv");
// dotenv.config();

const express = require('express');

const router=express.Router();
const ownerModel=require("../models/owner.model.js");


router.get("/",function(req,res){
    res.send("hey its working ");
});


 //console.log(process.env.NODE_ENV)
if(process.env.NODE_ENV==="development"){


router.post("/create",async function(req,res){

  let owners=  await ownerModel.find();
  if(owners.length>0) {return res.send(503).send("you have no permission to create a new owner")
  }

let {fullname,email,password}=req.body;
 let createdOwner= await ownerModel.create({
    fullname,
    email,
    password,
    gstin,
  })
res.status(201).send(createdOwner)


});
}


module.exports=router;