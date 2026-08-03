var users = {
    firstName: "Mehmood",
    lastName: "Khalil",
    skill: "Full Stack Web Development",
    isActive: true,
    age: 30,

}

for(var user in users){
    console.log(`${user} : ${users[user]}`);
}