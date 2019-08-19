console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
let dogMenu = document.getElementById('breed-dropdown');
console.log(dogMenu)

function fetchImages() {
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => renderImages(json));
   
}

function renderImages(json) {
    let dogImages = document.getElementById('dog-image-container');
    json.message.forEach(image => {
        const img = document.createElement('IMG')
        img.src = image;
        dogImages.append(img);
    })
}

const breedUrl = 'https://dog.ceo/api/breeds/list/all'

function fetchBreeds() {
    fetch(breedUrl)
    .then(resp => resp.json())
    .then (json => renderBreeds(json));
}

function renderBreeds(json) {
    let dogBreeds = document.getElementById("dog-breeds");
    dogArray = Object.keys(json.message);
    dogArray.forEach(breed => {
        const li = document.createElement('li');
        li.innerText = breed
        dogBreeds.append(li);
    })
    
}


document.addEventListener('DOMContentLoaded', function() {
    fetchImages();
    fetchBreeds();
})





document.getElementById('dog-breeds').addEventListener('click', function(e) {
    e.target.style.color = "pink";
}
)
 
dogMenu.addEventListener('change', function(e){
   
    let dogBreeds = document.getElementById("dog-breeds");
    
    dogBreeds.innerHTML = ""

    if(e.target.value === "a") {
       
        dogArray.forEach(dog => {
            if(dog.startsWith("a")) {
                let element = document.createElement('li')
                element.appendChild(document.createTextNode(dog))
                dogBreeds.appendChild(element)
            } 
        })
    } else if(e.target.value === "b") {
        dogArray.forEach(dog => {
            if(dog.startsWith("b")) {
                let element = document.createElement('li')
                element.appendChild(document.createTextNode(dog))
                dogBreeds.appendChild(element)
            } 
        })
    } else if(e.target.value === "c") {
       
        dogArray.forEach(dog => {
            if(dog.startsWith("c")) {
                let element = document.createElement('li')
                element.appendChild(document.createTextNode(dog))
                dogBreeds.appendChild(element)
        } 
    }) 
    } else if(e.target.value === "d") {
       
        dogArray.forEach(dog => {
            if(dog.startsWith("d")) {
                let element = document.createElement('li')
                element.appendChild(document.createTextNode(dog))
                dogBreeds.appendChild(element)
            } 
        }) 
    }
})
    
