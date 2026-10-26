var user = "DEO";

switch(user){
    case "Super Admin":
        console.log("You have full access");
        break;
    case "Admin":
        console.log("You have full access but you can't delete anything");
        break;
    case "DEO":
        console.log("You have access to enter and update the records");
        break;
    case "User":
        console.log("You have access to view the records");
        break;
    default:
        console.log("Invalid user credentials");
}