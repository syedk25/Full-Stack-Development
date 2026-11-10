var isLoggedIn = true;
var userEmailVerified = false;
var validCardInfo = true;


// if(isLoggedIn){
//     console.log("You have successfully logged in!");
//     if(userEmailVerified){
//         console.log("Your email is verified");
//         if(validCardInfo){
//             console.log("Go ahead and make a purchase");
//         }
//     }
// }

if(isLoggedIn && userEmailVerified && validCardInfo){
    console.log("You meet all requirements and you can make a purchase");
}
else{
    console.log("You don't meet conditions and you can't make a purchase");

}