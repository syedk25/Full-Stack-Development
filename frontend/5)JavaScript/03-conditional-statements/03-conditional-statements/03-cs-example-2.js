var loggedInWithEmail = false;
var loggedInWithFB = false;
var loggedInWithGoogle = true;
var loggedInWithApple = false;


if(loggedInWithEmail || loggedInWithFB || loggedInWithGoogle || loggedInWithApple){
    console.log("You have successfully logged in and you can access dashboard");
}
else{
    console.log("You are not allow to access dashboard");
}