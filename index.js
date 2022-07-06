// "use strict";
// Section 1 - Getting Started
// _______________________________________________________________________________________________________
// 
// Section 2 - Language Basics

// console.log("Hello, I'm script")


// // console.log(typeof null) null type is object


// //11. Variables - Objects
// var var1 = {
//     name:"Max"
// }

// console.log(typeof var1)
// 

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

    // a = 1.3 b = 2.2 ; a*b = 2.86000000003 it's a bug, which can be a problem in if statement; can use toFixed() and then it will be true 
    // IMPORTANT BUG!
    // var a = 2; var b ="2.2" a*b = 4.4 uspe da pomnozi; 12*null = 0
    //Infinity is also a number, a representation of infinite value

// 30. Division & Modulus
// var a = 12; var b = 2;
// a/=b; postoji takodje
// 12 / "2", again js isnt able to create string so it tries to turn into a number and it can so its 6
//again when dividing and get a floating point can use toFixed(3) , 3 numbers decimal places
//10%3 = 1
// 10/0 = Infinity, (10*0 still gives 0) 
//  10/ Infinity = 0 (gives us the limit value)

// 31. Operators - Comparing values
// with >= or <= we can't check the types like >==
//32. Operators - important rules
// NaN is not equal to itself
// console.log(0 == null) -> false; null can't be compared; but null == undefined that's the exception!
//undefined is always false when comparing it to anything, but null == undefined is the exception

//33. Operators - Boolean
// if (1==2 || 2==3  && 4==5){
//     console.log("I'm alive")
// }




// console.log( false && false) && higher precedence, false && false is false

// 34. Ternary operator, used for simple checks

// 35. Operator precedens - Ternary operator, assignment operator, logical not are right to left which means we can write a=b=5 instead of a =(b=5)

// console.log(!5 + null && true || false)


// console.log("Null true" + null && true)
// console.log(!!3)
// // console.log(!!5)
// // console.log(!5 + false)
// var a=1;
// console.log(0 && true)

// var a;
// a = false || true
// console.log(5 && 2) vraca drugi, dobar nacin da se proveri null, p && p.name, vraca drugi ako ima prvog
//                                  ||, dobar nacin da se da default, v || 10 ako je v false vraca drugi
// console.log(a)

// _______________________________________________________________________________________________________

// Section 3 - Types & Scope

// 38. Primitive vs Reference Types
// Primitive like number, sring and boolean

// var a = 5; in memory this value will be stored
// var b = a; now b also has value of 5, value is actually copied, it does not point to a 
// in contrast to reference types

// var a = {a:5}; variable does not hold a value but only a pointer to this value
// now var b = a; copies the pointer not the value, and they point to the same place in memory

// var aNumber = 5;
// console.log(aNumber)
// var anotherNumber = aNumber;
// console.log(anotherNumber)
// aNumber = 12;
// console.log(aNumber)
// console.log(anotherNumber)

// var array = [1,2,3];
// var anotherArray = array;

// console.log(array)
// console.log(anotherArray)

// array.push(4)
// console.log(array)
// console.log(anotherArray)
// it changed both, because array only holds reference to the place in memory where "array" is stored, when we assaing we pass the value which is reference to the place in memory
// if I reassign array = ["a","b"], now I am creating a new object, creating a new pointer to the new place in memory

// 40. Global vs Local Scope
// 2+1 scopes
//  Global scope, top we can be is Window
// we can use elements defined in outer scope inside inner scope

// var test = "Global Scope"

// function localScope(){
//     var test = "Local Scope"
//     console.log(test)
// }

// localScope()

// console.log(test) 

// but if I remove var test = "Gloval Scope" and remove "var" inside the localScope function



// function localScope(){
//     test = "Local Scope"
//     console.log(test)
// }

// localScope()

// console.log(test) 

//if I keep var inside I get reference error; when I delete it, it prints Local Scope, Local Scope if not using strict mode!!
//if you leave out var, js will generate new global variable, they wil always be global variable no matter where you use them!!

// _________________________________________________________________________________________________________________________

// Section 4 - Arrays

// 43. Intro

// Array is a collection of items, and created by [] square brackets. [1,2,3] length of 3, first index starts at 0

// 44. Basics & Managing Elements

// var array = [1,2,3]
// array[1]= 100;
// console.log(array[1])
// array[3]= 200;
// console.log(array[3])
// you can kinda think of array like infinte collection where unoccupied spaces are undefined
// so we can add more ellements

// array[5] = 100;
// console.log(array)
// fills in undefined inbetween

// 45. The forEach() Method
// method expects function as a parameter, pass an anonymous function, we don't create a function and pass the reference
// var array = [1, 2, 3]
// array.forEach(function (element){
// console.log(element)
// })

// Array.prototype.myForEach = function (cb) {


//     for(var i=0; i<this.length; i++){

//         cb(this[i], i, this)
//     }
// }

// var newArr=[]

// array.myForEach((e, i, arr)=>{newArr[newArr.length]=e-1})

// console.log(newArr)

//forEach is convinient way to loop through the array and do something with the element

// 46. Working with Elements, Push, Pop, Unshift and Shift

// Push - technically adds, pushes element at the end of array and return value is new length of the array that has been changed
// in practice you often don't know how long the array is and you can't hardcode it
// var array = [1,2,3];

// array.push(4)

// console.log(array)
// var array = [1,2,3, ,]  I need to add two commas to create undefined space in the end

//return value of push is the new length of the object it was called upon
// can use spread syntax to push and merge all elements of second array into another
// var vegetables = ["parsnip", "potatpo"]
// var moreVegs = ["celery", "beetroot"]
 
// vegetables.push(...moreVegs)
// console.log(vegetables)

// Pop - removes LAST element of the array and returns that element

// var array = [1,2,3]

// console.log(array.pop())
// console.log(array)

// Shift - if I want to remove first instead of last element
// Shift method removes first element of the array and returns that removed element from the array( undefined if array is empty )

// var array = [1,2,3,4]
// console.log(array.shift(), array)

// Unshift - push at the beginning of the array and returns new length of the array

// var array = [1,2,3,4]

// console.log(array.unshift(100), array) loguje 5, [100, 1, 2, 3, 4]

// Pop | Shift    Push | Unshift
// shift name self explanatory, it removes the first element so kinda shifts it
// unshift, it adds an element at the beginning of the array so it 
// Pop | Shift return the removed element 
// Push | Unshift return the new length of the array

// 47. Working with parts of an Array:  infexOf, Splice and Slice

// What if I want to find an index of specific element inside of array?

// var array = [1,2,3,4]

// array.unshift("new")

// console.log(array.indexOf("new"))

// indexOf returns the FIRST index where and element can be find at, -1 if not present

// array[array.indexOf("new")] = "old"

// What if I wanted to extract a part of an array and assign it to a new array?

// var array = [1,2,3,4]
// var newArray = array.splice(2)

// console.log(newArray)
// first argument of splice is starting index

// var array = [1,2,3,4]
// var newArray = array.splice(2,1)
//second argument is deleteCount, number of elements to be removed
// and original array has been changed
// console.log(newArray, array)

// if you don't want that behaviour, use slice!
// in slice you are not specifying (fromWhichIndex,howManyPlaces) but instead from which index to which index
// var array = [1,2,3,4]
// var newArray = array.slice(1,2)

// console.log(array.slice(1,2))
//it doesn't change the original array, (start,end) end not included, it returns a shallow copy, it has the same references when slicing  
// -> copies object references into the new array

// newArray[0] = "HELLOW"

// console.log(newArray,array)

// So, splice takes (startingElement, numberOfItems/deleteCount), changes the original array and (can have more arguments, to add elements on delete places)
// return value is an array containing the deleted elements, if one is removed, array of one element,or empty []
//  Slice doesn't chage the original array takes (starting,Ending) doesnt take ending
// return value new array of extracted elements, vraca array cije su vrednosti extrakovani elementi


// 48. Filtering, Mapping and Reversing Array Elements

// var array = [1,2,3,4]

// array.unshift("new")
// array[array.indexOf("new")]="old"

// console.log(array)

// What if I want to log values greate than 2? I can loop and filter out or use filter method

// Filter

// array.filter(function(value){

//     return value > 2
// })
// true vrednosti filter metode bice elementi novog niza, filter metoda vraca novi array i ne menja originalni niz

// Array.prototype.myFilter = function(cb){
//     var newArr=[];
//     for(var i = 0; i<this.length; i++){
      
//         if(cb(this[i], i, this)){
//             newArr[newArr.length] = this[i];
//         }
//     }
//     return newArr;
// }

// console.log(array.myFilter((e)=>e>2))

// Map

// var array = [1,2,3,4]

// map also creates a new array

// var newArray = array.map((e,i,arr)=>{

//     return e*2
// })


// var array = [1,2,3]
// console.log(array)
// Array.prototype.myMap = function(cb){
//     var newArray=[];

//     for(var i = 0; i<this.length; this){
//     newArray[newArray.length] = cb(this[i], i, this)
    
//     }
//     return newArray;
// }

// var testArray = array.myMap((e)=>e*3)




// console.log(newArray)

// Reverse
//it doesn't take an argument

// console.log(array.reverse())
// original array is changed

// 49. The Difference between Concat and Join

// var array = [1,2,3,4]

// var newArray =["O"]

// console.log(array.concat(newArray)) concats/combines arrays into new array

// console.log(array.join(newArray))
// join doesn't join two arrays but to join the array into the string
// prima element koji je separator izmedju vrednosti originalnog niza, vraca string

// 50. Reducing arrays, reduce method
// reduces an array to a single value
// var array = [1,2,3,4]

// console.log (array.reduce((total,value)=>{
//     console.log("total:", total, " value:", value)
//     return total+value
// }))
//starts with first element if not given a optional second argument

// _________________________________________________________________________________________________________________________

// Section 5 - Objects

// 53. Object basics & Literal Notation

// var person ={
//     name:"Max",
//     "surname" :"Maxim",
//     age:27,
//     details:{
//         hobbies:["Sports"],
//         location: "Germany"
//     },
//     greet: function(){
//         console.log("Hello")
//     }
// }

// console.log(person["name"]) dot vs bracket notation would be useful if I would have dynamic changing variable
//you can also use "" to name propreties which can be helpful to add - which otherwise would not be allowed or if you dynamically making proprety names 
//and here you will need to use [] notation to acces it

// 54. Propreties & "this"

// var age = 30;

// var person ={
//     name:"Max",
//     "surname" :"Maxim",
//     age:27,
//     details:{
//         hobbies:["Sports"],
//         location: "Germany"
//     },
//     greet: function(){

//         console.log("Hello", this.age)
//     }
// }


// person.greet() we can't reference age as age unless is some global var, we must use this


// 55. Creating Objects using the Object constructor

// var anotherPerson = new Object()

// we can use built in object and we can instantiate a new intance of this object with new keyword
// we now have to add proprety fields


// 56.Object are Reference Types

//57. Object.create()

// var anotherPerson = Object.create(null)

// Object.prototype is root prototype all objects have,
//argument is what prototype we want to set as newly created object prototype
// so if I pass person

//58. Prototype intro

// some browsers give us access to prototype with __proto__
//we can access parent object prototype holds

// Object.prototype.greet = function(){
//     console.log("Hello there")
// }

// person.greet(), now we can access it on person object

//59. Prototypes in Action

// var max = Object.create(person)

// max.greet()

//ako ne nadje na svom prototipu ide izanad sve dok ne nadje

//60. Prototypes summary

// Object.getPrototypeOf(anna)

// 61. Constructor functions

// function Person(){
// this.name = "";
// }

// Person.prototype.greet = function(){
//     console.log("Hello")
// }

// var person = new Person();

// person.name ="Max"


// function Person is a normal function that we use with new keyword as a constructor function
//person's prototype is Person.prototype

//  person instanceOf Person

// 62. Constructor Functions and Arguments
// function Person(ime,prezime){
//     this.name = ime;
//     this.surname = prezime;
// }
// 63.Object creation and prototypes summary


// var person ={
//     name:"Max"
// }

// console.log(perosn instanceof Object)

// 64.The "this" keyword

// function fn(){
//     console.log(this)
// }

// var obj = {
//     obfn: fn,
//     name:"drugi obj",
// }

// var max = {
//     name: "Max",
// }

// obj.obfn.bind(this)()
// 65. Bind, call and apply

// function fn(message){
//     console.log(message + this)
// }

// var obj = {
//     obfn:fn
// }

// var person = {

//     name:"Max"
// }

// obj.obfn.bind(this,"Hellow")()

// posle this-a bind prima argumente koje funkcija ocekuje
//call is same but instantly called, bind you can use later
// apply , prima array of arguments but it's the same

// 66. Creating Propreties with defineProprety()

// var account ={
//     cash: 12000,
//     _name:"Default",
//     withdraw:function (amount){
//         this.cashe-=amount;
//         console.log("Withdrew" + amount + "new cashe reserve is " + this.cash)
//     }
// }

// account.withdraw(1000)

// account.deposit method is one way to create proprety but I can do it with defineProprety()
//I can use static built in object and call defineProprety() method, pass object and name of the proprety I want to create
//Object.defineProprety(account, "deposit",{here configure the proprety}), here we can set some keys which are available, built in like key

// Object.defineProprety(account, "depostit",{
//     value:function(amount){
//         this.cash+=amount;
//     }
// })
// Object.defineProprety(account, "name",{
//     value:"IDOO3"
// })

// You can also configure other
// If we create proprety with defineProprety it's read only, so I can set another field/key, writable:true; enumerable:true; -> if you can loop through all fields on
// usefull for create proprety with more information
// you can also create getters and setters
// set get field, and function will be called whenever I want to get his value here


// Object.defineProprety(account, "name",{
//     // value:"IDOO3", remove value because I can't set this together with get
//     get: function(){
//         return "Hello"
//     }
// })

// now I get hello whenever I try to access account.name

// Object.defineProprety(account, "name",{
//     // value:"IDOO3", remove value because I can't set this together with get
//     get: function(){
//         return this._name
//     },
//     set: function(name) {
//         this._name = name;
//     }
// })
// So with getters and setters you can control how values in you object are being set or fetched
//this can be used to filter values,
//so let's say I am always returning this name but not always setting it

// Object.defineProprety(account, "name",{
//     // value:"IDOO3", remove value because I can't set this together with get
//     get: function(){
//         return this._name
//     },
//     set: function(name) {
//         if(name == "Max"){
//         this._name = name;
//         }
//     }
// })

// 67. Important Built in Methods and Propreties

// var person = {
//     name:"Max",
//     age:27,
// }

// delete person.name

// console.log("name" in person)

// to loop through object propreties use special for loop
//creating a loop that loops through fields
// for (var field in person){
// console.log(person[field]) so we can access values
// }


