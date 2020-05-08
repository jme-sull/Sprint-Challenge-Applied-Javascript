/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/


function createCarousel(){

  //create elements 

  carousel = document.createElement('div')
  leftButton = document.createElement('div')
  carouselimage0 = document.createElement('img')
  carouselimage1 = document.createElement('img')
  carouselimage2 = document.createElement('img')
  carouselimage3 = document.createElement('img')
  rightButton = document.createElement('div')

  
  
  //assemble 

  carousel.appendChild(leftButton)
  carousel.appendChild(carouselimage0)
  carousel.appendChild(carouselimage1)
  carousel.appendChild(carouselimage2)
  carousel.appendChild(carouselimage3)
  carousel.appendChild(rightButton)

  //add class

  carousel.classList.add('carousel')
  leftButton.classList.add('left-button')
  rightButton.classList.add('right-button')

  //add images 

  carouselimage0.src = './assets/carousel/mountains.jpeg'
  carouselimage1.src = './assets/carousel/computer.jpeg'
  carouselimage2.src = './assets/carousel/trees.jpeg'
  carouselimage3.src = './assets/carousel/turntable.jpeg'


  //image array

  imageArray = [ carouselimage0, carouselimage1, carouselimage2, carouselimage3 ]
  
  let i = 0
  imageArray[i].style.display = 'block'
  
  
  function nextSlide () { 
    imageArray[i].style.display = 'none'
    
    if (i < 3) {
      i = i + 1; 
    }
    else {
      i = 0 
    }
    imageArray[i].style.display = 'block';  
  }

  function previousSlide() {

    imageArray[i].style.display = 'none'    

    if (i > 0) {
      i = i - 1; 
    }
    else {
      i = 3 
    }

    imageArray[i].style.display = 'block';
  }
  


  rightButton.addEventListener('click', nextSlide)
  leftButton.addEventListener('click', previousSlide)


  console.log(carousel)

  return carousel

}

document.querySelector('.carousel-container').appendChild(createCarousel());
