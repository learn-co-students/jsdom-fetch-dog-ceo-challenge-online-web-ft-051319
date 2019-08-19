console.log('%c HI', 'color: firebrick')

window.onload = () => {
    challenge1();
    challenge2();
    // breeds = document.querySelectorAll('li');
    // console.log(globalBreedList)
    document.getElementById('breed-dropdown').addEventListener('change', filterBreeds);
    // console.log(document.querySelector("li"));
}

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all';

function renderImages(json) {
    const dogImg = document.querySelector('div#dog-image-container');
    json.forEach(image => {
        const img = document.createElement('img');
        img.src = image;
        dogImg.appendChild(img);
    });
}

function renderBreeds(json) {
    const breedList = document.querySelector('ul#dog-breeds');
    globalBreedList = [];
    json.forEach(breed => {
        const li = document.createElement('li');
        li.innerHTML = breed;
        globalBreedList.push(breed);
        li.addEventListener('click', function(l) {
            l.target.style.color = "blue";
        })
        breedList.appendChild(li);
    });
}

function challenge1() {
    return fetch(imgUrl).then(
        response => response.json()
    ).then(
        json => renderImages(json.message)
    );
}


function challenge2() {
    return fetch(breedUrl).then(
        response => response.json()
    ).then(
        json => renderBreeds(Object.keys(json.message))
    );
    // const content = fetch(breedUrl).then(
    //     response => response.json()
    // ).then(
    //     json => renderBreeds(Object.keys(json.message))
    // );

    // console.log(content)
    // console.log(document.querySelector('li'));

    // return content;
}


// document.addEventListener('DOMContentLoaded', function() {
//     challenge1();
//     challenge2();
//     // console.log(document.readyState);
//     // checkLoaded();
//     // breeds = document.querySelectorAll('ul li');
//     // console.log(breeds);
//   })

// window.addEventListener('load', (event) => {
//     console.log(document.readyState);
//     // let bs = Array.from(document.querySelector('ul').children);
//     // console.log(bs);
//     let dogList = document.querySelector('ul');
//     console.log(dogList);
//     console.log(document.querySelector('ul#dog-breeds li'));
// })

// addeventlistenere - add on click te


// const breeds = document.querySelectorAll('ul li');
// console.log(breeds);

// if (document.querySelector('ul').children == null) {
//     setTimeout(5);}
// else {
//         const li = document.querySelector('ul').children
//         li.addEventListener('click', function() {
//         alert('click!')
//     })
// };

// window.onload = function() {
//     console.log("Hi");
//     console.log(document.querySelector('li'));
// }

function checkLoaded() {
    // if (document.readyState === "complete") {
    //     console.log("complete!")
    //     console.log(document.querySelector('li'));
    // } else {
    //     setTimeout(checkLoaded(), 30)
    // }

    // if (document.readyState === "interactive") {
    //     while (document.querySelector('li') === null) {
    //         setTimeout(checkLoaded(), 10);
    //     }
    //     console.log(document.querySelector('li'));
    // }

    while (document.readyState === "interactive") {
        console.log('still not ready');
    }
}

const filterBreeds = e => {
    // const breeds = document.querySelectorAll('li');

    // console.log(globalBreedList[0][0])
    let breedContainer = document.querySelector('ul#dog-breeds');
    breedContainer.innerHTML = ""

    globalBreedList.forEach(breed => {
        // console.log(breed.innerHTML[0])
        if (e.target.value == breed[0]) {
            const li = document.createElement('li');
            li.innerHTML = breed;
            li.addEventListener('click', function(l) {
                l.target.style.color = "blue";
            })
            breedContainer.appendChild(li);
        }
    })
};



// breeds.forEach (breed => {
//     breed.addEventListener('click', function() {
//         alert('click!');
//     })
// })