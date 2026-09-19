// const number = [10, 20, 25, 30, 35, 40, 45, 50]

// let numbers = number.map(function (num){
//     return num / 2 ;
// })
// console.log(numbers);

const members = [
    {name:'abc', num :10 },
    {name:'def', num :20 },
    {name:'ghi', num :30 },
    {name:'jkl', num :40 }
    
    ]
let member = members.map((number)=>{
    if(number.num>20){
        return number.num / 2
    }
    else{
        return number
    }
})

console.log(member);