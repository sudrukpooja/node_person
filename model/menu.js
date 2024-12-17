const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    taste:{
        type:String,
        enum:['spicy', 'sweet', 'sour'],
        required:true
    },
    is_drink:{
        type:Boolean,
        default:false
    },
    ingredients:{
        type:[String],
        default:true
    },
    num_sales:{
        type:String,
        default:0
    }
}) ;

const menuItem = mongoose.model('menuItem', menuItemSchema);
module.exports = menuItem;
