
const mongoose = require('mongoose');


const mongoURL = 'mongodb://localhost:27017/mydb';


mongoose.connect(mongoURL,{
    useNewUrlParser: true,
  useUnifiedTopology: true,
})

const db = mongoose.connection;


//event listeners//

db.on('connected',()=>{
    console.log('connected to mongodb server');
})

db.on('error',(err)=>{
    console.log('mongodb connection error:',err)
})


db.on('disconnected',()=>{
    console.log('mongodb disconnected');
})


//export the database conection//

module.exports = db;