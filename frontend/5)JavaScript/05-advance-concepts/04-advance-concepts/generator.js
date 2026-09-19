


// * Defining a generator function

function* numberGenerator() {
  console.log("Starting...");
  yield 1; // Pauses here on the first .next() & return 1

  console.log("Resuming...");
  yield 2; // Pauses here on the second .next() * return 2

  return "Hello Coder"; // Ends the generator
}

const gen = numberGenerator(); // Creates the generator object

console.log(gen.next()); // Logs "Starting..." then { value: 1, done: false }
console.log(gen.next()); // Logs "Resuming..." then { value: 2, done: false }
console.log(gen.next()); // { value: "Hello Coder", done: true }

//                         ( or )

console.log(gen.next().value); // Logs "Starting..." then { value: 1, done: false }
console.log(gen.next().value); // Logs "Resuming..." then { value: 2, done: false }
console.log(gen.next().value); // { value: "Hello Coder", done: true }

// 1. When Dealing with Infinite Data Streams (Why: Lazy Evaluation)
 

// Generates infinite IDs without breaking memory
function* idFactory() {
  let id = 1;
  while (true) { // Infinite loop is completely safe here!
    yield `USER_ID_${id++}`;
  }
}

const idGen = idFactory();
console.log(idGen.next().value); // "USER_ID_1"
console.log(idGen.next().value); // "USER_ID_2"
// No other IDs are calculated or stored in memory until called.

/*A generator is a function that can pause its execution using the yield keyword and resume later via a .next() invocation. We use them primarily for lazy evaluation and processing infinite or massive data streams because they don't block memory by generating lists all at once. They are also highly effective for creating custom iterators and managing advanced asynchronous control flows, such as those found in orchestration libraries like Redux-Saga.*/