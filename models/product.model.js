const mongoose = require('mongoose');

mongoose.connect("mongoose://1w7.0.0.1:2701/scatcher")

const productSchema = mongoose.Schema({
    image:String,
    name:String,
    price:Number,
    discount:{
        type:Number,
        default:0,
    },
    bgcolor:String,
    panelcolor:String,
    textcolor:String,
})



module.export= mongoose.model("product",productSchema)