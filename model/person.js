const mongoose = require('mongoose');


const personSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
       
    },
    age:{
        type:Number,
        required:true
    },
 
     work:{
        type:String,
        enum:['chef','manager','waiter'],
        required:true
      
    },
    mobile:{
        type:String,
        required:true
      
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        required:true

       
    }
 
})


//create person model//

const Person = mongoose.model('Person', personSchema);
module.exports=Person;