const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: {type:String, require:true},
    price:{indianPrice:String, europePrice:String},
    year:{type:Number, default:2021},
    tags:[Array],
    authorName:String,
    totalPages:Number,
    stockAvailable:Boolean,
    
},
{timestamps: true}
);
module.exports = mongoose.model('Book', bookSchema)





//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
