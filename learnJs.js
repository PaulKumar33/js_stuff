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