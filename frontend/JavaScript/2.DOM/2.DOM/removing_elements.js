const todos = document.querySelectorAll('li')
 const list = document.querySelector('#lists')
 const button = document.querySelector('.submit');
const inputs = document.querySelector('#input')
 button.addEventListener('click',function(e){
    
  
 const addTodo = document.createElement('li');
 e.preventDefault()
  addTodo.classList.add('todo');
  addTodo.innerText = inputs.value;
  // inputs.value = ''
  list.appendChild(addTodo);
// console.log(inputs.value)
 })



// todos.forEach(function(todo){
//     todo.addEventListener('click',function(e){
//       e.stopPropagation()
//         // console.log('clicked');
//         // console.log(e.target);
//         console.log('this is li')
//         // e.target.remove()
//     })
// })

list.addEventListener('click',function(){
  
})



















//  const list = document.querySelector('#lists')
//  const button = document.querySelector('.submit');
 
 
//  button.addEventListener('click',function(e){
     
     
//  const addTodo = document.createElement('li');
//   addTodo.classList.add('todo');
//   addTodo.innerText = 'todo list';
//   list.appendChild(addTodo);
//  })