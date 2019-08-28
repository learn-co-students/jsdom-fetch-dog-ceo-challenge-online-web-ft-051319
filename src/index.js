console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function() {

    const dogBreeds = document.querySelector('#dog-breeds')

    let breeds 

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
            .then(json => {
                breeds = Object.keys(json.message)
                // breeds is now assigned to an array
                renderBreeds(breeds)
            })
    };
    
    function renderBreeds(array) {
        array.forEach(renderSingleBreed)
    };
    
    function renderSingleBreed(breed){
        const breedItem = document.createElement('li')
        breedItem.innerText = breed
        breedItem.onclick = () => {
            breedItem.style.color = "#34a4eb"
        }
        dogBreeds.appendChild(breedItem)
    }
    
    function filterBreeds() {
        const breedDropdown = document.querySelector('#breed-dropdown');
        
        // li[i].innerText.charAt(0) === letter
        // other way to compare first letter of breed to filter letter
    
        breedDropdown.addEventListener('change', () => {
            const letter = breedDropdown.value;
            let filteredBreeds = breeds.filter(breed => breed.startsWith(letter))
            // The filter() method creates a new array with all elements that pass the test implemented by the provided function. Like .select in ruby.

            dogBreeds.innerHTML = ""
            // reset/clear the list items in the ul dogBreeds

            renderBreeds(filteredBreeds)
            // render/show the filtered breeds to the DOM

            // my first way to filter breeds
            // const ul = document.querySelector('#dog-breeds');
            // const li = ul.getElementsByTagName('li');
            // for (i = 0; i < li.length; i++) {
            //     if (li[i].innerText.startsWith(letter)) {
            //         li[i].style.display = "";
            //     } else {
            //         li[i].style.display = "none";
            //         // google style.display options
            //     }
            //}
        })
    
        // if onchange="filterBreeds()" not added to html select tag, use above event listener on breedDropdown and add filterBreeds() to functions to execute when DOMContentLoaded
    };

    fetchImages()
    fetchBreeds()
    filterBreeds()
})

