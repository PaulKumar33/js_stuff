//this moduel is for learning java script

//================Numbers==============//
Math.sin(3.5);

var r =2;
var circumfrence = 2*Math.PI*r;


//convert string to integer
var newInt = parseInt('123', 10);


//can convert hex as well
var hexval = '0x10';
var newIntValue = parseInt(hexval);

console.log(newIntValue);

//a good method to use is isNaN to check NaN condition
if(isNaN(NaN)){
    console.log('showing functionality of isNaN');
}



//================== strings in js =================//

//some useful methods
console.log("this string".length);

console.log("here we have a regular print");
console.log("this if i use the replace method");
console.log("here we have a regular print".replace('regular', 'fancy'));


//===========variables=============//

//variables are declared with const, var, or let
/*
let -> block level variables
var -> a regualr variable
const -> variable which takes a constant value
*/


//let can be used in loop blocks

//counter not visible here
for(let counter = 0; counter < 100; counter ++){
    //counter visible here
    console.log("counter value: ", counter);
}
//counter not visible here

//==========control structure===========//


//ternary operator
function getFree(isMember){
    return (isMember ? "$2.00":"$10.00");
}


console.log(getFree(true));
//used as shortcut for if statement


//==========using functions===========//
//js is different than other languages. function parameters are more so guidelines.
//lets consider the following

function add1(x, y){
    return x+y;
}

//the above method returns the sum.
console.log("demonstrating the difference between add(1,2) and add(1,2,3) for add(x,y)");
console.log(add1(1,2));
console.log(add1(1,2,3));
console.log('thyer the same');

function add2(){
    var sum = 0;
    for(var i=0, j = arguments.length; i<j; i++){
        sum+=arguments[i];
    }
    return sum;
}

console.log("here is a function definition with no function parameters")
console.log(add2(1,2,3,4,5))


//demonstrating rest parameter syntax. this kinda seems like the equivalent to *args in python
function average(...arrayNums){
    var sum = 0;
    for(let digit of arrayNums){
        sum += digit;
    }
    return sum/arrayNums.length;
}

console.log(average(2,3,4,5))

//note FUNCTIONS ARE OBJECTS AS WELL


//==========objects============//
//basically dictionaries in python

var obj1 = new Object();
var obj2 = {};

//semantically they are the same, obj2 takes object literal syntax
//can populate it the same way as a JSON object

obj2 = {
    name:'carrot',
    _for:'bunny',
    details:{
        colour:'orange',
        size:'12'
    }
};

//this object can be accessed like a dictionary
var name = obj2['name'];
var nestedPortion = obj2['details']['colour'];

//here we can create a function and then use it as an object prototype
function Person(name, age){
    this.name = name;
    this.age  = age;
}

var thisPerson = new Person("paul", 21);
console.log("obj2 example: ", name);
console.log("nested JSON object example: ", nestedPortion);

console.log("Object creation example, ", thisPerson.name);


//array objects are the same as typical arrays
//here is an array example
var ar = new Array()
ar[0] = 'arm';
ar[1] = 'leg';
ar[2] = 'hand';

//.length is a common object property
ar.length; //3

//arrays can be initialized the same way as python arrays
var ar2 = ['leg', 'arm', 'feet'];

//the append equivalent is .push
ar2.push('chest');

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript gives a good outline of array properties



