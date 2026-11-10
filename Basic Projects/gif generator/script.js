const API_KEY = 'PG2Z9HRQ6ASjllxEBAtAake8n8a5W1hI';
const div = document.getElementById('gifs');
const button = document.getElementById('btn');
button.addEventListener('click',search);

function search(){ 
  const searchTerm = document.getElementById('search-input').value.trim();
  div.innerHTML = ''; 
  fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchTerm}&limit=10`)
    .then(response => {
      return response.json();
    })
    .then(data => {
        console.log(data)
    data.data.forEach(gif => {
    const content = document.createElement('div');
    content.classList.add('item');
    const img = document.createElement('img');
    img.src = gif.images.fixed_height.url;
    content.appendChild(img);
    div.appendChild(content);
  });
    })
}
