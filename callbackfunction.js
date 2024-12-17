// function greeting(name,callback){
//     console.log(`hello, ${name}`);
//     callback()
// }
// function sayHii(){
//     console.log('hii')
// }
// greeting('pooja', sayHii)



function callback(){
    console.log( "callback function complete")
}
function call(a,b,callback){
   var result= a+b;
   console.log("result " + result)
   callback();

}
call(5,5, callback)