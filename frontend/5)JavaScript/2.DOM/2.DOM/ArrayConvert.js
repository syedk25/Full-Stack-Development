// const head = document.getElementsByClassName('todo');
// console.log(head);

// head[1].style.color = 'red';

// HTMLcollection to Array

let head = document.getElementsByTagName('li');

head = Array.from(head);
head.pop();

head.forEach(function(heads, index) {
    console.log(heads.className);
    heads.textContent = `${index}: lists`;
});

console.log(head);

const odd = document.querySelectorAll('li:nth-child(odd)');
const even = document.querySelectorAll('li:nth-child(even)');

odd.forEach(function(li, index){
    li.style.color = 'red';
});

for(let i = 0 ; i < even.length ;i++){
    even[i].style.color = 'blue';
}

