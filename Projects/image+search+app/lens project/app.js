const photo = document.querySelector('.photos');
const searchInput = document.querySelector('.search');
const forms = document.querySelector('form');
const more = document.querySelector('.more')
const key = "xLdPq3JkoEB1yIzQinBLP1qVpRYZNsiCHKqgoabIaVVh1QP21G9ZJEha"
let searchTerm;
let page = 1;
let link;
let currentSearch;
// event
searchInput.addEventListener('input', updateValue);

forms.addEventListener('submit',(e)=>{
    e.preventDefault()
    searchPhotos(searchTerm);
    currentSearch = searchTerm;
})

function updateValue(e){
  searchTerm = e.target.value
}




async function curated() {
    link = "https://api.pexels.com/v1/curated?per_page=10";
    const response = await fetch(link, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: key
      }
    });
    
    const data = await response.json();
    data.photos.forEach(images => {
        const image = document.createElement('div');
        image.classList.add('photoss');
        image.innerHTML = `
        <div class="jsphoto">
        <p>${images.photographer}</p>
        <img src= ${images.src.large}> </img>
        <a href =${images.src.original}>Download</a>
        </div>
        
        `
        photo.appendChild(image)
    });
}




// async function dataFetching(){

// }

async function searchPhotos(term){
    remove()
    link = `https://api.pexels.com/v1/search?query=${term}&per_page=9&page=1`;
    const response = await fetch(link, {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: key
        }
      });
      
      const data = await response.json();
      data.photos.forEach(images => {
        const image = document.createElement('div');
        image.classList.add('photoss');
        image.innerHTML = `
        <div class="jsphoto">
        <p>${images.photographer}</p>  
        <img src= ${images.src.large}> </img>
        <a href =${images.src.original}>Download</a>
        
        </div>
        
        `
          
          photo.appendChild(image)
      });
}

function remove(){
    photo.innerHTML = "";
    searchInput.value = '';
    
}
more.addEventListener('click',load)
async function load(){
page++;
if(currentSearch){
 link = `https://api.pexels.com/v1/search?query=${currentSearch}&per_page=9&page=${page}`
}
else{
 link = `https://api.pexels.com/v1/curated?per_page=9&page=${page}`
}
const response = await fetch(link, {
  method: "GET",
  headers: {
    Accept: "application/json",
    Authorization: key
  }
});

const data = await response.json();
data.photos.forEach(images => {
  const image = document.createElement('div');
  image.classList.add('photoss');
  image.innerHTML = `
    <div class="jsphoto">
      <p>${images.photographer}</p>  
      <img src=${images.src.large}></img>
      <a href=${images.src.original}>Download</a>
    </div>
  `;
  photo.appendChild(image);
});
}

searchPhotos();
curated();
