async function sam (){
    try{
  const sams = await fetch('sam.json')
  const data = await sams.json()
  return data
} catch(error){
    console.log(error)
}

}
sam().then((data)=>{
console.log('success',data);
})











// fetch('sam.json').then((done)=>{
//     console.log('success',done)
//    return done.json();
// }).then ((datas)=>{
// console.log(datas)
// })
// .catch((error)=>{
//     console.log('error',error)
// })
