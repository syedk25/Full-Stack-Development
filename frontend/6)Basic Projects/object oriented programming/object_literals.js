const user = {
    name : 'john',
    email: 'john@gmail.com',
    signin : function (){
        console.log('user is signed in')
    },
    signout (){
        console.log('user is signed out')
    }
}
console.log(user.name, user.email)

const userTwo = {
    name : 'Sam',
    email: 'Sam@gmail.com',
    signin : function (){
        console.log('user is signed in')
    },
    signout (){
        console.log('user is signed out')
    }
}
console.log(userTwo.name, userTwo.email)

const userThree = new user('oliver','oliver@gmail.com')