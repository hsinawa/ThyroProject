const mongoose = require('mongoose')

const adminSchema = mongoose.Schema({

    name:{
        type:String,
        require
    } ,
    lname :{
        type:String,
        require
    } ,

    email:{
        type:String,
       

        require
    } ,
    password:{
        type:String,
        require
    } ,
    contactnumber : {
        type:Number ,
        require 
    }
    
    



} ,  {timestamps:true } )

const Admin = mongoose.model('admin',adminSchema)

module.exports=Admin