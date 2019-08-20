console.log('%c HI', 'color: firebrick')

function fetchImages() {
    return fetch ("https://dog.ceo/api/breeds/image/random/4")
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
           renderImages(json);
        })
};

function renderImages(json) {
    const div = document.getElementById("dog-image-container");

    for (let i = 0; i < json.message.length; i++) {
        let img = document.createElement("img")
        img.src = `${json.message[i]}`
        div.appendChild(img)
    };
};

function fetchBreeds() {
    return fetch ("https://dog.ceo/api/breeds/list/all")
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            renderBreeds(json);
        })
};

function renderBreeds(json) {
    const ul = document.getElementById("dog-breeds");

    const breedList = json.message;

    let breed;

    for (breed in breedList) {
        let li = document.createElement("li");
        li.innerText = `${breed}`
        li.addEventListener("click", function () {
            this.style.color = "#20B2AA";
        })
        ul.appendChild(li)
    };
};

function filterBreeds() {
    // Declare variables
    let letterFilter = document.getElementById("breed-dropdown").value;
    const ul = document.getElementById("dog-breeds");
    const listItems = ul.getElementsByTagName("li");
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < listItems.length; i++) {
      let breed = listItems[i].innerText

      if (breed.indexOf(letterFilter) == 0) {
        listItems[i].style.display = "";
      } else {
        listItems[i].style.display = "none";
      }
    }
  }

document.addEventListener("DOMContentLoaded", function() {
    fetchImages();
    fetchBreeds();
    filterBreeds();
    document.getElementById("breed-dropdown").addEventListener("change", filterBreeds);
})

