var  hour= 12;

if(hour < 10){
    console.log("is not allowed")
}
else{
    console.log("is allowed")
}

        //for loop//
var count = 10;
for(var i=1; i<=count; i++){
    console.log(i)
}


        //object//

        const employeee={
            name:"om",
            age:26,
            isemployee:true,
            hobbies:["reading","painting", "swiming"]
        }
        console.log(employeee)



        //function//

        var arr=[30,20,40,17]
        var result = arr.filter(check);

        function check(arr){
            return arr>=18
        }
        console.log(result)
 
        var prompt = require('prompt-sync')();

        const age = prompt("please enter your age") 

        if(age<18){
            console.log("you get 20% discount")
        }
        else{
            console.log("you get 30% discount ")
        }