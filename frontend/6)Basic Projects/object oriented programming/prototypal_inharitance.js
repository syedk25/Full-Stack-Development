function User(username,email){
    this.username = username;
    this.email = email;
}
User.prototype.signin = function(){
    console.log(`${this.username} is signned in`)
    return this
}
User.prototype.signout = function(){
    console.log(`${this.username} is signned out`)
    return this
}
function Person(username,email,message){
    User.call(this,username,email)
    this.message = message;
}

Person.prototype = Object.create(User.prototype)
Person.prototype.play = function(){
    //play
}
const user1 = new User('jhon','john@gmail.com')
const user2 = new User('sam','sma@gmail.com')
const personOne = new Person('oliver','oliver@gmail.com','hey oliver')
console.log(user1,user2)
console.log(personOne)

