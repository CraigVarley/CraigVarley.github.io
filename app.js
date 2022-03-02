// events and simple stop start functions on mousedown for clumsy cube rotyation
//
// const cube = document.querySelector('#cube');
//
// cube.addEventListener('mousedown', stop);
// cube.addEventListener('mouseup', start);
//
// function stop() {
//   cube.classList.remove('cube-animate');
// }
//
// function start () {
//   cube.classList.add('cube-animate')
// }


// below prints x,y of mouseposition to <p>
// main is absolute 100% of screen
const main = document.getElementById('main');
const coords = document.getElementById('coords');
let x = 0;
let y = 0;
let text = '';
// get vars and coords for boxes

//eye boxes
const box1 = document.getElementById('box1');
const box2 = document.getElementById('box2');
let xybox = box1.getBoundingClientRect();
let boxx = xybox.right;
let boxy = xybox.top + (xybox.height/2);

// coords of eye centers vars
let dot = document.querySelector('.dot');
let dot1 = document.getElementById('dot1');
let dot2 = document.getElementById('dot2');
let dotbox1 = box1.getBoundingClientRect();
let dotbox2 = box2.getBoundingClientRect();
let dotbox1x = dotbox1.x + (dotbox1.width/2);
let dotbox1y = dotbox1.y + (dotbox1.height/2);
let dotbox2x = dotbox2.x + (dotbox2.width/2);
let dotbox2y = dotbox2.x + (dotbox2.height/2);



// mouse x and y fill<p>
main.addEventListener('mousemove', e=> {
  x = e.clientX;
  y = e.clientY;
  text = 'mouseX: ' + x + ' mouseY: ' + y;
  coords.innerHTML = text;
})

main.addEventListener('mousemove', e => {
  const constraint = 27; // larger constraint, smaller movement
  let mousey = (x - boxx) / constraint;
  let mousex = (y - boxy) / constraint;

  // move the keyframe
  6

  // rotate the box
  box1.style = "transform:rotateX(" + mousex + "deg) rotateY(" + mousey + "deg);";
  box2.style = "transform:rotateX(" + mousex + "deg) rotateY(" + mousey + "deg);";
  dot1.style = "transform:translateX(" + mousey*3 + "px) translateY(" + mousex*3 + "px);";
  dot2.style = "transform:translateX(" + mousey*3 + "px) translateY(" + mousex*3 + "px);";

  // box.style = "transform:rotateY(" + mousey + "deg);";

})
