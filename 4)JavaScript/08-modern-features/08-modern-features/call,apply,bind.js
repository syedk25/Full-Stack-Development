
function greet1(name,city){
 console.log(`Hi, my name is ${name} and I live in ${city}`)
}

greet1("syed", "solamadevi");  // Hi, my name is syed and I live in solamadevi

//--------------------------------------------------------------

// call()  used to borrow variable/method from other object
let name="mahatheer"
let city="MDK"
function greet(name,city){
 console.log(`Hi, my name is ${name} and I live in ${this.city}`)
}

const person={name:"syed",city:"solamadevi"}

greet.call(person,name)

// apply()

function introduce(city, country) {
  // This function needs 'this.name', 'city', and 'country'
  console.log(`Hi, my name is ${this.name}. I live in ${city}, ${country}.`);
}

const person2 = {
  name: "Arjun"
};

// 'person' becomes 'this'
// The array items ['Chennai', 'India'] are unpacked into 'city' and 'country'
introduce.apply(person2, ['Chennai', 'India']);

// ⚡ Output: "Hi, my name is Arjun. I live in Chennai, India."

const numbers =[1,2,3,4,5];

// 'null' is passed as the first argument because Math.max doesn't use the 'this' keyword.
// The array is unpacked so JavaScript evaluates it as: Math.max(45, 99, 12, 84, 23)
const highest = Math.max.apply(null, numbers);

console.log(highest); // 5

// bind()

const person3 = {
  name: "Arjun",
  introduce1() {
    console.log(`Hi, my name is ${this.name}.`);
  }
};

// If we run it directly from the object, it works perfectly:
person3.introduce1(); // "Hi, my name is Arjun."

// 🚫 THE PROBLEM: Passing it to setTimeout passes the function definition, 
// but loses the original object context.
setTimeout(person3.introduce1, 1000); // ⚡ Output after 1 second: "Hi, my name is undefined."

// This does NOT run the function. It returns a new, configured function.
const boundIntroduce = person3.introduce1.bind(person);

// Running it manually later
boundIntroduce(); // "Hi, my name is Arjun."

// Passing it safely to setTimeout
setTimeout(boundIntroduce, 1000); //  Output after 1 second: "Hi, my name is Arjun."

function multiply(a, b) {
  return a * b;
}

// We pass 'null' for 'this' because multiply doesn't use the 'this' keyword.
// But we pass '2' to permanently lock the first parameter 'a = 2'.
const double = multiply.bind(null, 2);

// Now 'double' only needs the second argument 'b'
console.log(double(5));  // 10 (Evaluates as 2 * 5)
console.log(double(12)); // 24 (Evaluates as 2 * 12)
