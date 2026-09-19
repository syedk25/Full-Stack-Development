// const collection = document.getElementsByClassName('todo');
// const list = document.getElementById('lists');
// const nums = document.getElementsByClassName('num')[0];

// const addTodo = document.createElement('li');
// addTodo.classList.add('todo');
// addTodo.innerText = 'todo list3';

// const addTodo1 = document.createElement('li');
// addTodo1.classList.add('todo');
// addTodo1.innerText = 'todo list3';

// list.appendChild(addTodo)
// list.appendChild(addTodo1)
// nums.innerText = collection.length;


const collection = document.querySelectorAll('.todo');
const list = document.querySelector('#lists');
console.log(list.children)
const nums = document.querySelector('.num');

const addTodo = document.createElement('li');
addTodo.classList.add('todo');
addTodo.innerText = 'todo list3';

const addTodo1 = document.createElement('li');
addTodo1.classList.add('todo');
addTodo1.innerText = 'todo list3';



list.appendChild(addTodo)
list.appendChild(addTodo1)
nums.innerText = collection.length;
// console.log(collection)