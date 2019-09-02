console.log('%c HI', 'color: firebrick')

function fetchDogs() {
   return  fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(resp => resp.json())
    .then(json => renderDogs(json));


}

function renderDogs(json) {
  //console.log(`json ${json.message}`);
  //debugger;
  const dogImageCont = document.getElementById('dog-image-container');
  json.message.forEach(url => {
  /*  const pImg = document.createElement('p')
  */
    dogImageCont.innerHTML += `<img src="${url}">`;
  //  debugger;
    // dogImageCont.appendChild(pImg);

  });
}
function fetchBreeds() {
  const breedUrl = 'https://dog.ceo/api/breeds/list/all';
  fetch(breedUrl)
  .then (resp => resp.json())
  .then (json => renderBreeds(json));
  //debugger;

}

function renderBreeds(json) {
  const breedNode=document.getElementById('dog-breeds');
  let  breedList = Object.keys(json.message);
  //debugger;
   breedList.forEach(breed => {

    breedNode.innerHTML += `<li>${breed}</li>`;
  })

//  fullBreedList = breedList;
}


document.addEventListener('DOMContentLoaded', function() {
 fetchDogs();
 fetchBreeds();


})

document.addEventListener('input', function (event)
{
  const breedNode=document.getElementById('dog-breeds');
  const breedUrl2 = 'https://dog.ceo/api/breeds/list/all';
  let firstLetter=event.target.value;
//  var breedObj;
  fetch(breedUrl2)
  .then (resp => resp.json())
  .then (json => {
    var breedList=Object.keys(json.message);
    breedNode.innerHTML='';
    breedList.forEach(breed => {
      breedFirstLetter=breed.charAt(0);

      if (breedFirstLetter == firstLetter) {
        //debugger;
        breedNode.innerHTML +=  `<li>${breed}</li>`
      }
  });

//  const tagArray=breedNode.getElementsByTagName('li');



  })

})


document.addEventListener('click', function (element)
{
  let colortarget=element.target;
  colortarget.style.color="blue";
})
