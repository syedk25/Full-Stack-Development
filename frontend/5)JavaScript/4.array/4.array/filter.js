const number = [10, 20, 25, 30, 35, 40, 45, 50];

let numbers1 = number.filter(function (num) { return num > 25;});

let numbers2 = number.filter((number) => number > 25);

console.log(numbers1);
console.log(numbers2);

const members = [
  { name: "abc", membership: true },
  { name: "def", membership: false },
  { name: "ghi", membership: true },
  { name: "jkl", membership: false },
];

let member = members.filter((mem) => mem.membership);
console.log(member);
