
const express = require('express')
const app = express()
const db  = require('./db');
const cors = require('cors');

// const bodyParser = require('body-parser');
app.use(express.json());
app.use(cors());

app.get('/', function(req,res){
 res.send("welcom to our hotel")
})


const personRoutes = require('./routes/personRoutes');
app.use('/person', personRoutes);


const menuRoutes = require('./routes/menuRoutes');
app.use('/menu', menuRoutes);


app.listen(3000 ,()=>{
    console.log('listing on port 30000')
})