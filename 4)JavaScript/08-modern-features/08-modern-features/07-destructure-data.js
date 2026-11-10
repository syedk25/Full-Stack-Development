let numbers = [1, 2, 3, "four", true];

let [, , , num] = numbers;   // skip values

console.log(num);
 

let [, , , num1 = "one"] = numbers;  //set default

console.log(num1);


let user={name:"k.syed",age:21}

let{name,age}=user

console.log(name,age)

let{name:Uname}=user //set new name 

console.log(Uname)

users={age:22}

let{name:UserName="king"}=users  // set default

console.log(UserName)


let nestedObject={id:1,profile:{name1:"k",age1:20}}

let {id,profile:{name1,age1}}=nestedObject

console.log(id,name1,age1)

