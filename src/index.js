const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener('DOMContentLoaded', function() {
    fetchImages();
    fetchBreeds();
    sortBreeds();
  })

function fetchImages() {
    return fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => renderImages(json))
}

function renderImages(json) {
    const imageContainer = document.getElementById("dog-image-container")  
    Object.keys(json).forEach(function(urlArray) {
        const images = json[urlArray]; 
            images.forEach(function(url){
                const img = document.createElement('img')
                img.src = `${url}`
                img.style.height = '100px';
                img.style.width = '200px';
                imageContainer.appendChild(img)
            });
    });
  } 



function fetchBreeds() {
    return fetch(breedUrl)
    .then(resp => resp.json())
    .then(json => renderBreeds(json))
}

function renderBreeds(json) {
    const dogBreedsContainer = document.getElementById("dog-breeds")
        let breedsString = Object.keys(json['message'])
        let breeds = breedsString.toString().split(",");
            breeds.forEach(function(breed){
                const li = document.createElement('li')
                li.innerText = `${breed}`
                dogBreedsContainer.appendChild(li)
            })
}


document.addEventListener("click", function(e){
    if (e.target.parentNode.id === "dog-breeds"){
    e.target.style.color = '#ca7fe3';
    }
})

function sortBreeds(){
    const dropdown = document.getElementById('breed-dropdown')

    dropdown.addEventListener('change',function(){

      let letter = dropdown.value
      let breeds = document.getElementById('dog-breeds')
      let list = breeds.getElementsByTagName('li')

      for (let i = 0; i < list.length; i++){
        if (list[i].innerText.startsWith(letter)){
          list[i].style.display = 'list-item'
        }
        else {
          list[i].style.display = 'none'
        }
      }
    })
  }
  


