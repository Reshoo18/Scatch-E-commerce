// const mongoose = require('mongoose');

// mongoose.connect("mongodb://1w7.0.0.1:2701/scatcher")

// const ownerSchema = mongoose.Schema({
//     fullname:{
//         type:String,
//         minLength:3,
//         trim:true
//     },
//     email: String,
//     password:String,
//     products:{
//         type:Array,
//         default:[],
//     },
//     gstin:String,
//     picture : String,
// });

// module.export= mongoose.model("owner",ownerSchema)
const mongoose = require('mongoose');

const ownerSchema = new mongoose.Schema({
    fullname: { type: String, minLength: 3, trim: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    products: { type: Array, default: [] },
    gstin: String,
    picture: String,
});

module.exports = mongoose.model("Owner", ownerSchema);
