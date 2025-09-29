const mongoose = require('mongoose');

mongoose.connect("mongoose://1w7.0.0.1:2701/scatcher")

const ownerSchema = mongoose.Schema({
    fullname:{
        type:String,
        minLength:3,
        trim:true
    },
    email: String,
    password:String,
    products:{
        type:Array,
        default:[],
    },
    contact:Number,
    picture : String,
});

module.export= mongoose.model("user",ownerSchema)