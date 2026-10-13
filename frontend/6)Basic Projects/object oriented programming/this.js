
const user = {
    name : 'John',
    email: 'John@gmail.com', 
    languages : ['Hindi','English','spanish','french'],
    signin (){
        console.log('user signed in')
    },
    signout (){
        console.log('user signed out')
    },
    language () {
        console.log(this)
        this.languages.forEach(lang =>{
            console.log(lang)
        })
    }
}

user.language();
console.log(this)