// call back function

const  callfunc = (call)=>{
    let value = 40;
    call(value)
}
callfunc(function(value){
    console.log(value)
});