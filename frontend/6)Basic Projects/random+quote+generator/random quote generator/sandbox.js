const h = document.querySelector('h1');
const b = document.querySelector('button');
let num = 0;
let quotes = [];

fetch('https://type.fit/api/quotes')
.then(response => {
  return response.json();
})  
.then(data => {
  quotes = data;
})
.catch(error => {
  console.error('Fetch error:', error);
});
b.addEventListener('click', () => {
  num++
  h.innerText = quotes[num].text;
});