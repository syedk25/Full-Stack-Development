//local storage
// localStorage.setItem('name','Sam')
// localStorage.setItem('age',26)

// //session storage
// sessionStorage.setItem('name','Oliver')

// const user = localStorage.getItem('name');
// const age = localStorage.getItem('age');
// console.log(user,age);

// localStorage.removeItem('name')
// localStorage.clear()

const users = [
    {name:'john',email:'jhon@gmail.com'},
    {name:'Sam',email:'sam@gmail.com'},
    {name:'Oliver',email:'oliver@gmail.com'}
]

// console.log(JSON.stringify(users))
localStorage.setItem('users',JSON.stringify(users))
 const use = localStorage.getItem("users")
 console.log(JSON.parse(use))