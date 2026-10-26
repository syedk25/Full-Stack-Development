var user = {
  firstName: "Mehmood",
  lastName: "Khalil",
  skill: "Full Stack Web Development",
  isActive: true,
  age: 30,
  getUserInfo: function (role) {
    return `${this.firstName} has full user access, and his role is ${role}`;
  },
  greet: () => console.log("greetings")
};

console.log(user.getUserInfo("Super Admin"));

user.greet();

console.log(user.hasOwnProperty("skill"))