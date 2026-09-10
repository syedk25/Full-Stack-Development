const number = [10, 20, 25, 30, 35, 40, 45, 50];

// let reduce = number.reduce(function(acc,crr){
//     return acc + crr;
// })
// console.log(reduce);

let reduce = number.reduce(function (acc, crr) {
  if (crr > 20) {
    acc++;
  }
  return acc;
}, 0);

console.log(reduce);
