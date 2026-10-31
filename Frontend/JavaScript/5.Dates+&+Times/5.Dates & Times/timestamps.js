const days = new Date();
const past = new Date('July 1 2022 11:30:28');
// console.log(days.getTime(), past.getTime());
const differ = days.getTime() - past.getTime();
console.log(differ);

const mins = Math.round(differ / 1000 / 60);
const hours = Math.round(mins / 60);
const day = Math.round(hours / 24);

console.log(mins);
console.log(hours);
console.log(`this video is published ${day} ago`);