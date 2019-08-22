// console.log(obj.message)
//when a function needs a callback, it can either take a REFERENCE to a function we've already defined
//OR we can define an anonymous function used for this purpose only
//We can take that anonymous function later and define it elsewhere for a refactor or if we see
//we can use it somewhere else
const imgURL = "https://dog.ceo/api/breeds/image/random/4"
const dogImageContainer = document.getElementById('dog-image-container')
const breedURL = 'https://dog.ceo/api/breeds/list/all'
const dogBreeds = document.getElementById('dog-breeds')
const breedDropdown = document.getElementById('breed-dropdown')

fetch(imgURL)
  .then(res => res.json())
  .then(putDogImagesOnDOM)

function putDogImagesOnDOM(obj) {
  obj.message.forEach(function(url) {
    let imgElement = document.createElement("img")
    imgElement.src = url
    dogImageContainer.appendChild(imgElement)
  })
}

let breedsArray = []
let prevValue = "";
let currentValue = "a";
let breedsObject = {};

fetch(breedURL)
  .then(breeds => breeds.json())
  .then((breedsJSON) => {
    // assign breedsJSON to global breedsObject
    breedsObject = breedsJSON.message;
    // store keys in an array;
    breedsArray = Object.keys(breedsObject);
    // add breeds to DOM
    addBreedsToDOM(breedsArray);
  })

function addBreedsToDOM(breedsArray) {
  const breedsToAdd = breedsArray.filter(breed => breed.startsWith(currentValue));
  breedsToAdd.forEach(breed => {
    let listElement = document.createElement("li")
    listElement.id = breed;
    listElement.textContent = `${breed} ${(breedsObject[breed].length > 0) ? " - " + breedsObject[breed].join(", ") : ""}`
    dogBreeds.appendChild(listElement)
    listElement.addEventListener('click', function(event) {
      listElement.style.color = 'red';
    })
  })
}

function removeBreedsFromDOM(breedsArray) {
  const breedsToRemove = breedsArray.filter(breed => breed.startsWith(prevValue));
  breedsToRemove.forEach(breed => {
    let oldElement = document.getElementById(breed)
    dogBreeds.removeChild(oldElement);
  })
}

breedDropdown.addEventListener('change', (e) => {
  prevValue = currentValue;
  currentValue = e.target.value;
  addBreedsToDOM(breedsArray);
  removeBreedsFromDOM(breedsArray);
});
