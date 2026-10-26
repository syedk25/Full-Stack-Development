// const head = document.getElementsByTagName('h1');
// const body = document.getElementById('lists');
// const footer = document.getElementsByClassName('submit')

const head = document.querySelector('#learn');
// const head = document.querySelectorAll('.todo');
// console.log(head);

// changing styles
document.getElementById('learn').style.color = 'red';
document.getElementById('learn').style.background = 'black';
document.getElementById('learn').style.padding = '10px';

// change content
document.getElementById('learn').textContent = 'learn to code';
document.getElementById('learn').innerText = 'Learn Dom';
document.getElementById('learn').innerHTML = '<p>code</p>';

// nth child
document.querySelector('li').style.color = 'red';
document.querySelector('li:last-child').style.color = 'red';
document.querySelector('li:nth-child(3)').style.color = 'red';
document.querySelector('li:nth-child(3)').textContent = 'code';