console.log('%c HI', 'color: firebrick')


document.addEventListener('DOMContentLoaded',function(){
  fetchImages()
  fetchBreeds()
  filterFunction()
  //Only loading the function here because if we run the script
  //before the later part of the html, variables such as dropdown would be null
  //with reference to the html, anything that comes after <script src=.....></script>
  //will only be loaded after everything in this index.js file is loaded
  //if we were to put this filterfunction outside of this block
  //e.g. if we tried to getElementByID for dropdown outside of this block
  //we would've gotten null. that's why we need to run the assignment
  //only after all DOMContent has been loaded
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
