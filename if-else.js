// var prompt = require('prompt-sync')();
// const age = prompt("enter your age")
// if(age<18){
//     console.log("you got 20% discount")

// }
// else if(age>18 && age<=65){
//     console.log("notmal ticket price applies")
// }
// else{
//     console.log("you get 30% discount")
// }


 //question 2//
//     length = 10;
//     width = 30;

//  function calculaterectangle(width,length){
//     return width*length
//  }

//  let area = calculaterectangle(length,width)
//  console.log("the area of rectangle is"+ area)


 //question 3//


//  let product={
//     name:"laptop",
//     price:60000,
//     instock:true,
//     detailes:{
//         manufacturer:"tecbrand",
//         model:"TB1234",
//         warranty:"2 year"
//     }
//  }
//  console.log(product.detailes.model)




 
// var prompt = require('prompt-sync')();
// const age = prompt("enter your age");

// if(age<18){
//     console.log("you get 20% discount")
// }

// else if(age>18 && age<=65){
//     console.log("Normal ticket price applies")
// }
// else{
//     console.log("you get 30% discount")
// }


// var product={
//     name:"laptop",
//     price:40000,
//     inStock:true,
//     display:{
//         owner:"microsoft",
//         warrenty:"1 year",
//         model:"Tb1c3"
//     }
// }
// console.log(product.display.owner)



//question 4//
var prompt = require('prompt-sync')();
const guest =prompt( "enter name :")


 var guestList=["pooja", "om", "ganesh" , "jyoti", "adesh"]

//  guestList.includes(guest) ? console.log("welcome to the party") : console.log("sorry your not on guest list");
// guestList.indexOf(guest)!==-1 ? console.log("welcome to the party") : console.log("sorry your not on guest list");

    var isavailable= guestList.find(item=>item==guest)
    isavailable ? console.log("welcome to the party") : console.log("sorry your not on guest list");




    // question 5//


    let weatherForecast={
        date:"2024-10-5",
        temperature:{
            high:22,
            low:10
        },
        conditions:"partly cloudly",
        humidity:"60"
    }
    console.log(weatherForecast.temperature.high)