//  object literals
let user = {
    name : 'kushal',
    age : 20,
    gender : 'male',
    email : 'abcd@fg.com',
    login : function (){
        console.log('you are logged in')
    }
}

console.log(user);
console.log(user.name);
user.age = 22;
console.log(user.age);
console.log(user['gender']);
user['email'] = 'sfdgddjkghjn.com';
console.log(user['email']);



