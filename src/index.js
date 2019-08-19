console.log('%c HI', 'color: firebrick')

const imgURL = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

function fetchImg(){
    fetch(imgURL)
    .then(function(resp){
        return resp.json();
    })
    .then(function(data){
        renderDogImages(data);
        //console.log(data);
    })
}
function fetchbreeds(){
    fetch(breedUrl)
    .then(function(resp){
        return resp.json();
    })
    .then(function(data){
        //console.log(data);
        renderbreeds(data);
    })

}



function renderbreeds(json){
    //console.log(Object.keys(json.message));
    const allBreeds = Object.keys(json.message);
    
    const breedOptions = document.getElementById('breed-dropdown');
    console.log(breedOptions.options);
    const breedContainer = document.querySelector('#dog-breeds');

    breedOptions.addEventListener('change', function(e){
        breedContainer.deleteChild();
        let filtered_breeds = allBreeds.filter(function(breed, letter){
            return breed[0] === e.target.value
        });

        console.log(filtered_breeds);
    
        filtered_breeds.forEach(function(dog_breed){
            //console.log(dog_breed[0])
          
             
                    const createLi = document.createElement('li');
                    createLi.textContent = dog_breed;
                    breedContainer.appendChild(createLi);
    
        })
    });
        //console.log(breedOptions.options[i].value);
       // allBreeds.forEach(function(dog_breed){
            
           // console.log(createLi.textContent[0]);
          
           // breedContainer.appendChild(createLi);
       
       // });
    
}

function renderDogImages(json){
    //console.log(json.message);
    const imgContainer = document.querySelector('#dog-image-container');
        
        json.message.forEach(function(dog_img){
            
            const img = document.createElement('img');
            img.setAttribute('src', dog_img);
            img.setAttribute('width', '200px');
            imgContainer.appendChild(img);

     });
}

document.addEventListener('DOMContentLoaded', function(){
    fetchImg();
    fetchbreeds();

    
})

