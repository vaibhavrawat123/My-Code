const userModel= require("../models/userModel")


const createuser= async function (req, res) {
    
    let data= req.body

    let savedData= await userModel.create(data)
    res.send({msg: savedData})
}
    
module.exports.createuser= createuser




// const basicCode= async function(req, res, next) {
//     let tokenDataInHeaders= req.headers.token
//     console.log(tokenDataInHeaders)

//     console.log( "HEADER DATA ABOVE")
//     console.log( "hey man, congrats you have reached the Handler")
//     //res.send({ msg: "This is coming from controller (handler)"})
//     next()
//     }

// const createUser= async function (req, res) {
    
//     let data= req.body
//     let tokenDataInHeaders= req.headers.today
//     //Get all headers from request
//     console.log("Request headers before modificatiom",req.headers)
//     //Get a header from request
//     console.log(req.headers.batch)
//     console.log(req.headers["content-type"])
//     console.log(tokenDataInHeaders)
//     //Set a header in request
//     req.headers['month']='June' //req.headers.month = "June"

//     //Set an attribute in request object
//     req.anything = "everything"
    
    
//     console.log("Request headers after modificatiom",req.headers)
    
//     //Set a header in response
//     res.header('year','2022')
//     res.send({msg: "Hi"})
// }

// const getUsersData= async function (req, res) {
//     let allUsers= await UserModel.find()
//     res.send({msg: allUsers})

// }

// const vaibhav=async function(req,res){
//     let data= req.body
//     let tokenDataInHeaders= req.headers.month
//     console.log(tokenDataInHeaders)
//     req.headers['month']='may'
//     console.log(req.headers.month)
//     req.headers.month="september"
//     console.log(req.headers.month)

//     //---------****-----//
    

//     console.log("our Address-pincode")
    
//     // req.headers['address_pincode']
//     req.headers['address_pincode']='22222222'
//     console.log(req.headers.address_pincode)
//     req.headers.address_pincode="44444444"
//     console.log(req.headers.address_pincode)
//     res.send ("This is my 1st header")

// }






// module.exports.createUser= createUser
// module.exports.getUsersData= getUsersData
// module.exports.basicCode= basicCode
// module.exports.vaibhav= vaibhav