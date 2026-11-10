var fruits = new Map();
fruits.set("Yellow", "Banana");
fruits.set("Red", "Apple");
fruits.set("Orange", "Orange");
fruits.set("Green", "Grapes");
fruits.set("Dark Purple", "Cherry");

// console.log(fruits);

// for(var key of fruits.keys()){
//     console.log(`Key is ${key}`);
// }

// for(var value of fruits.values()){
//     console.log(`Value is ${value}`);
// }

// for(var [key, value] of fruits){
//     console.log(`${key} : ${value}`);
// }
fruits.forEach((value) => console.log(value));