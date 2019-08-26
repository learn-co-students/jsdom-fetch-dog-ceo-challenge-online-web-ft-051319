console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function() {
    fetchImages()
    fetchBreeds()
})

function fetchImages() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
        .then(resp => resp.json())
        .then(json => renderImages(json))
};

function renderImages(json) {
    const imageContainer = document.querySelector('#dog-image-container')
    json.message.forEach(url => {
        const imageTag = document.createElement('img');
        imageTag.src = url
        imageContainer.appendChild(imageTag)
    });
};

function fetchBreeds() {
    fetch("https://dog.ceo/api/breeds/list/all")
        .then(resp => resp.json())
        .then(json => renderBreeds(json))
};

function renderBreeds(json) {
    const dogBreeds = document.querySelector('#dog-breeds')
    Object.keys(json.message).forEach(breed => {
        const breedItem = document.createElement('li');
        breedItem.innerText = breed
        breedItem.onclick = () => {
            breedItem.style.color = "#34a4eb"
        };
        dogBreeds.appendChild(breedItem)
    });
};

function filterBreeds() {
    const breedDropdown = document.querySelector('#breed-dropdown');
    const letter = breedDropdown.value;
    const ul = document.querySelector('#dog-breeds');
    const li = ul.getElementsByTagName('li');

    for (i = 0; i < li.length; i++) {
        if (li[i].innerText.charAt(0) === letter) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
};