var userRole = function (name, role){
    switch(role){
        case "Super Admin":
        console.log(`${name} is ${role} and it has all access.`);
        break;

        case "Admin":
        console.log(`${name} is ${role} and it has all access except deleting data.`);
        break;

        case "DEO":
        console.log(`${name} is ${role} and it has all access to add records.`);
        break;

        default:
        console("Invalid User Role");
    }
}

userRole("Ali", "Admin");