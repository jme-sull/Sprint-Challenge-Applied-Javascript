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
  const carousel = document.createElement('div');
  const carouselButtonLeft = document.createElement('div');
  const carouselImageOne = document.createElement('img');
  const carouselImageTwo = document.createElement('img');
  const carouselImageThree = document.createElement('img');
  const carouselImageFour = document.createElement('img');
  const carouselButtonRight = document.createElement('div');

  carousel.classList.add('carousel');
  carouselButtonLeft.classList.add('left-button');
  carouselButtonRight.classList.add('right-button');

  carouselImageOne.style.display = 'block';

  let i = 0;
  let images = [];

   //image list 
   images[0] = './assets/carousel/mountains.jpeg';
   images[1] = './assets/carousel/computer.jpeg';
   images[2] = './assets/carousel/trees.jpeg';
   images[3] = './assets/carousel/turntable.jpeg';

  carouselImageOne.setAttribute('src', images[0]);
  

  carousel.append(carouselButtonLeft);
  carousel.append(carouselImageOne);
  carousel.append(carouselImageTwo);
  carousel.append(carouselImageThree);
  carousel.append(carouselImageFour);
  carousel.append(carouselButtonRight);

  carouselButtonRight.addEventListener('click', () => {
    carouselImageOne.src = images[i];
    if(i < images.length - 1){
      i++
    } else {
      i = 0; 
    }

  })

  carouselButtonLeft.addEventListener('click', () => {
    carouselImageOne.src = images[i];
    if(i < images.length - 1){
      i = i - 1;
    } else {
      i = 0; 
    }

  })
 
  return carousel;

}


document.querySelector('.carousel-container').append(createCarousel());

