const bookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let book= req.body
    let savedData= await bookModel.create(book)
    res.send({msg: savedBook})
}

// Task 2- return all the bookName and authorName only.
const bookList = async function (req, res) {
    let allBook = await bookModel.find().select({ bookName: 1, authorName: 1, _id: 0 })
    res.send({ msg: allBook })
}
// Task 3- Return all those bookName which published in a inputed year
const getBookInYear = async function (req, res) {
    let bookYear= await bookModel.find({ year: req.body.year }).select({bookName:1,_id:0})
    res.send(bookYear)
 }
 // Task 4- send the reponse after satisfying the any random condition
 const getparticularBooks = async function (req, res) {
    
    let bookDetail = await bookModel.find(req.body)
    res.send({msg:bookDetail})
}
// Task 5- send bookName of those book only which have indianprice of 100 inr or 200 inr or 500 inr.
const bookpriceDetails= async function(req,res){
    let pricelist = await bookModel.find({"prices.indianPrice": {$in: ["100INR", "200INR","500 INR"]}} ).select({bookName:1,_id:0})
    res.send({ msg: pricelist })
}
//Send the details of those books which are in stock or having more than 500 pags.
const randomBooks= async function(req, res) {
    let allBooks = await bookModel.find({$or:[ {stockAvailable: true},{ totalPages: {$gt: 500}}]})
    res.send({msg: allBooks })
}









module.exports.createBook= createBook;
module.exports.bookList= bookList;
  module.exports.getBookInYear=getBookInYear;


    module.exports.bookpriceDetails=bookpriceDetails;

module.exports.getparticularBooks=getparticularBooks;
module.exports.randomBooks=randomBooks;