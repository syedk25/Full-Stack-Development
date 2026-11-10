// An HTTP request is a message sent by a client to a server
// These request are made to api endpoints
const products = (files)=>{
    return new Promise((resolve,reject)=>{
        const httpRequest = new XMLHttpRequest()
        httpRequest.addEventListener('readystatechange',()=>{
            if(httpRequest.readyState === 4 && httpRequest.status === 200){
                const data = JSON.parse(httpRequest.responseText)
               resolve(data)
            }
            else if(httpRequest.readyState === 4){
               reject('could not fetch data')
            }
            // console.log(httpRequest,httpRequest.readyState)
        })
        httpRequest.open('GET',files)
        httpRequest.send()
    })
    
}
products('jhon.json').then(data =>{
console.log('resolve: ',data)
return products('oliver.json')
}).then(data =>{
    console.log('resolve 2: ',data)
    return products('sams.json')
}).then(data =>{
    console.log('resolve 3: ',data) 
})
.catch((error)=>{
console.log('reject:',error)
})

// const example = new Promise((resolve,reject)=>{
//  //network request
// //  resolve('success');
//  reject('error')
// })
// example.then((data)=>{
//     console.log(data)
// }).catch((error)=>{
//     console.log(error)
// }) 






    

