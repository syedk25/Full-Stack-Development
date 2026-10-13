function User(username,email){
    this.username = username;
    this.email = email;
    // this.signin = function(){
    //     console.log(`${this.username} is signned in`)
    // }
}
User.prototype.signin = function(){
    console.log(`${this.username} is signned in`)
    return this
}
User.prototype.signout = function(){
    console.log(`${this.username} is signned out`)
    return this
}



const user1 = new User('jhon','john@gmail.com')
const user2 = new User('sam','sma@gmail.com')
console.log(user1,user2)
user1.signin().signout();

user2.signin().signout();

