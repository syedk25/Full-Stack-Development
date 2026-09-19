class User {
    constructor(username,email){
      this.username = username;
      this.email = email;
      this.score = 0;
    }
    signin(){
      console.log(`${this.username} is signned in`)
      return this
    }
    signout(){
      console.log(`${this.username} is signned out`)
      return this
    }
    scores(){
      this.score++
      console.log(`${this.username} has a score of ${this.score}`)
      return this
    }
   
  
}
const user1 = new User('jhon','john@gmail.com')
const user2 = new User('sam','sma@gmail.com')
console.log(user1,user2)

user2.signin().scores().scores().signout();


