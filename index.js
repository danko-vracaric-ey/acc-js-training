// "use strict";

// console.log("Hello, I'm script")


// // console.log(typeof null) null type is object


// //11. Variables - Objects
// var var1 = {
//     name:"Max"
// }

// console.log(typeof var1)
// _______________________________________________________________________________________________________

// 12. Strict mode
//"use strict" without strict js engine in the browser has to do more job than if we explicitely tell it, this cost performance
// var1 = 5
// var funkcija = function (){
//     return this
// }
// console.log(funkcija())


// makes sure that some synthatical things be considered and won't work without it 
//global object is undefined

//13. Dynamic typing
// var var1=5;

// console.log(var1)

// var1 = "10";

// console.log(typeof var1)
// // variable can change type, but dont do this

//14.Hoisting

// var1 = 5;

// console.log(typeof var1)

// var var1;

//kinda like in the first run it will fetch declatations, and on the second run it will put it on top of our code
//so we can declare after using them

//initialization order is important 

// //15. Functions - enclosed code you can run multiple times
// // curly braces allows us to have multi line code
// function calc (){
// console.log("aaaa")
// }

// // we have to call them  with parenthasis calc()

// //u can use the function if you call it before declaring it

// var calc = function (){
//     console.log("aaaaaa")
// }

// // type of creating a function, we can still call it

// // console.log(typeof calc) ------> function

// var anotherFn = calc;

// anotherFn()

// 16. Functions - Arguments & Returning Data

// function calc(number1, number2){

//     return number1 + number2
// }

// var returned = calc(19,3)
// // console.log(returned)  with passing nothing, it logs NaN, undefined + undefined

// console.log(returned)


// 17. Control Structures - If Statement ( Control structrures let you control the flow of code execution)
// Most famous If statement which let us run our code conditionally

// var condition = true;

// if(condition){
//     console.log("Hi!")

// }else{} --> if it's false run this or use else if(){}, if we want to check if multiple conditions are true

//18. Control Structures - If statement advanced

// if(1){
//     console.log("Hi again!")
// }


// var condition = 2;

// if (condition){

//     console.log("I am  executing if 2")
// } js will interpret anything other than 0 as true

// console.log(2 == true) this logs false, only 1 is equal to true other will be treated as such!

// 19. Control Structures - Switch statement

// var luckyNumber = 7;

// switch(luckyNumber){
//     case 1: {
//         console.log("is 1")
//         break;
//     }
//     case 8:
//         console.log("is 8")
//         break;
//     default:
//         console.log("Is default")
// }  much more structured than writing this same with if(){}else if(){} etc

//without break it falls true and executes all
// so these for conditionals, that let us control our execution flow based on some true/false values
// 20. Control Structures - For loop

// for(var i = 0; i<5; i++){
// console.log(i)

// }

//whenever we finish the loop we will count i one up

// 21.Nested loops - you can also nest loops; inner loops is executed each time 

// 23. Control structures - Controlling loops with break & continue

// for (i=0; i<4; i++){
//     if(i==1){
//         continue;
//     }
//     console.log(i)
// }

// break inside if stops the loop, continue skips the rest of the loop

// for(i=0; i<4; i++){
//     for(j=0;j<2;j++){
//         if(i == 1){
//             continue;
//         }
//     }
// console.log(i)
// }
// only referr to inner loop, same as break as it is for continue

//24. For Loop variations

//25. Looping through Arrays is what loops are commonly used for; array.length is built in proprety i<array.length

//26. While loop; 

// var number = 4;
// while(number<7){
//     console.log(number)
//     number++;
// }

// var condition = true;
// var i =2;

// while(condition){
//     if (i === 5){
//         condition = false; // promeni condition ali odradi loop do kraja
//     }
//     console.log(i)
//     i++;
// }

// do{}while() uradice makar jednom

// 27. Operators - Addition

//concatinates a=[1,2] + " join" loguje 1,2 join; var n = 12; var k = "1" loguje 121, n+true loguje 13; 12=null loguje 12; 12+undefined = NaN
//      

//28. Substractions

//a-=b; a = a-b; var a = 12; var b = "1"
// console.log("Split us" - "us") does not work, and  a- b now equals 11 because js cant make a new string out of it, others dont change

// 29. Operatos - Multiplication & Floating point problems







