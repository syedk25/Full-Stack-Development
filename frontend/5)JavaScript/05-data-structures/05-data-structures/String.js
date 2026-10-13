const name = "Alice";
const age = 25;

// Traditional way (concatenation)
const oldWay = "Hello, my name is " + name + " and I am " + age + " years old.";

// Modern way (Template Literal)
const newWay = `Hello, my name is ${name} and I am ${age} years old.`;

// Multi-line support without adding "\n"
const multiLine = `This is line one.
This is line two.`;

const text = "JavaScript";
console.log(text.length);        // 10
console.log(text.includes("Script")); // true

const email = "  User@Company.com  ";
console.log(email.trim().toLowerCase()); // "user@company.com"

const tags = "js,html,css";
const tagsArray = tags.split(","); 
console.log(tagsArray); // ["js", "html", "css"]
