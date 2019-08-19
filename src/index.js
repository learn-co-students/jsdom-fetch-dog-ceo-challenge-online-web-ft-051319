console.log('%c HI', 'color: firebrick')


document.addEventListener('DOMContentLoaded',function(){
  fetchImages()
  fetchBreeds()
  filterFunction()
})

function addImage(json){
  const images = document.getElementById('dog-image-container')
  json.message.forEach(image => {
    let pic = `<img src='${image}'>`
    images.innerHTML+=pic
  })
}

function fetchImages(){
  fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(resp => resp.json())
  .then(json => addImage(json))
}

function fetchBreeds(){
  fetch('https://dog.ceo/api/breeds/list/all')
  .then(resp => resp.json())
  .then(json => addBreeds(json))
}

function addBreeds(json,letter=0){
  const list = document.getElementById('dog-breeds')
  const breeds = Object.keys(json.message)
  breeds.forEach(breed => {
    let item = document.createElement('li')
    item.innerText = breed
    item.addEventListener('click', function(){
      this.style.color = "red"
    })
    list.appendChild(item)
  })
}

// Filter function
function filterFunction(){
  const dropdown = document.getElementById('breed-dropdown')
  dropdown.addEventListener('change',function(){
    let letter = dropdown.options[dropdown.selectedIndex].value
    let breeds = document.getElementById('dog-breeds')
    let list = breeds.getElementsByTagName('li')
    for (let i=0; i < list.length; i++){
      if (list[i].innerText.startsWith(letter)){
        list[i].style.display = 'list-item'
      }else{
        list[i].style.display = 'none'
      }
    }
  })
}
