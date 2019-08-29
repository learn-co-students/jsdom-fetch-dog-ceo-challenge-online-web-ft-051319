let breeds
const imagesContainer = document.querySelector('#dog-image-container')
const breedContainer = document.querySelector('#dog-breeds')


function fetchImages() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
        .then(res => res.json())
        .then(json => renderImages(json))
}

function renderImages(json) {
    json.message.forEach(function(url) {
        let imgElement = document.createElement("img")
        imgElement.src = url
        imagesContainer.appendChild(imgElement)
    })
}

fetchImages()

function fetchBreeds() {
    fetch('https://dog.ceo/api/breeds/list/all')
        .then(res => res.json())
        .then(json => {
            breeds = Object.keys(json.message)
            renderBreeds(json)
        })
}

function renderBreeds(json) {
    breeds.forEach(function(breed) {
        let breedElement = document.createElement('li')
        breedElement.innerText = breed
        breedContainer.appendChild(breedElement)
        breedElement.addEventListener('click', function(event) {
            event.target.style.color = 'red'
        })
    })
}

fetchBreeds()

function filterBreeds() {
    const dropdown = document.querySelector('#breed-dropdown')
    dropdown.addEventListener('change', function(event) {
        breeds = document.getElementById('dog-breeds')
        let list = breeds.getElementsByTagName('li')
        let letter = this.value

        for (let i = 0; i < list.length; i++) {
            if (list[i].innerText.startsWith(letter)) {
                list[i].style.display = 'list-item'
            } else {
                list[i].style.display = 'none'
            }
        }
        // let filteredBreeds = breeds.filter(function(breed, index) {
        //     breed.startsWith(letter)
        // })  //(breed => breed.startsWith(letter))
        // renderBreeds(filteredBreeds)
        // breedContainer.innerText = ""
        
    })
}

filterBreeds()