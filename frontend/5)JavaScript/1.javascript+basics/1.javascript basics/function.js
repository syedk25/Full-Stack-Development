//  Function Declaration
function greet(){
    let name = prompt('what is your name')
    console.log(`this is function ${name}` );
}
greet();

// Function Expression

const word = function (){
    console.log('this is function Expression');
}
word();

const add = function (x){
    return x + x ;
}
console.log(add(7));

// IIFE

(function(){
    console.log('this is iife');
}) ();