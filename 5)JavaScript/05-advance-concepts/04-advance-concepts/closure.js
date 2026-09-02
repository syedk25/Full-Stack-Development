function closure() {
  let count = 0;

  return {
    increment: () => ++count,
    decrement: () => --count,
    getCount: () => count
  };
}

const counter = closure();

console.log(counter.getCount()); // 0
console.log(counter.increment()); // 1
console.log(counter.getCount()); // 1
console.log(counter.decrement()); // 0
console.log(counter.getCount()); // 0


// closure
// 1. Data Privacy and Encapsulation 