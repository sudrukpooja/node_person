// const http = require('http');

// http.createServer((req,res) => {
//     res.write("<h1> hello , i am pooja</h1>");
//     res.end();
// }).listen(4500);


// function addition(a,b){
//     return a+b;
// }

// let result = addition(2,5)
// console.log(result)



//callback function//


// function callback(){
//     console.log("callback function complete")
// }

// function add(a,b,callback){
//     var result= a+b;
//     console.log("result:"+ result);
//     callback();
// }
// add(55,6,callback)



// var fs = require('fs');
// var os = require('os');
// const cors = require('cors');

// var user = os.userInfo();
// console.log(user);


// fs.appendFile('gretting.text', ' hi ' + user.username + '\n' , ()=>{console.log("file is creted")} )


// const notes = require('./notes.js')




// var _ = require('lodash');
// const { log } = require('console');
// const { json } = require('express');

// var data =["pooja", "pooja" , 1 , 2, 3, 2, "name" , "age", '2']
// var filter = _.uniq(data);
// console.log(filter)

// console.log(_.isNumber(4));




//convert//

// const objectToConvert = {
//     name:"pooja",
//     age:25
// };
// const json = JSON.stringify(objectToConvert);
// console.log(json);




// app.use(cors());

// app.get('/', function (req, res) {
//   res.send('Hello World')
// })



// app.get('/idali', ( req, res)=>{

//     var menu = {
//         name:"rava idali",
//         size:'10 cm diameter',
//         is_Chunty:true,
//         is_sambar:false
//     }
//     res.send( menu)
// })


// app.get('/employee', (req,res)=>{
//    var employees = [
//         {
//             email:"pooja@gmail.com",
//             password:"1234",
//             age:21,
//             number:"9657465021"
//         },
//         {
//             email:"ganesh@gmail.com",
//             password:"123456",
//         }
//     ]
//     res.send(employees)
// })


