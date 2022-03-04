// pseudo
// subtract 25.71 from all nth-children
// if rotateY is 0, then rotateY next is 334.24

const carousel = document.querySelector('#carousel');
const rotate = document.querySelector('.rotate');
const face = document.querySelector('.face');
let faceNumber = 1;

// rotate carousel event
carousel.addEventListener('click', function() {
  let angle = -25.71 * faceNumber;
  carousel.style.transform  = 'rotateY(' + angle + 'deg)';
  faceNumber ++;
});
