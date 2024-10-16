function rook(){
const magnet = document.querySelector(".magnet");
const magnetText = document.querySelector(".magnet .text");


//move mouse

const activateMagnet = (event) => {
  const boundBox = magnet.getBoundingClientRect();
  const newX = (event.clientX - boundBox.left) / magnet.offsetWidth - 0.5;
  const newY = (event.clientY - boundBox.top) / magnet.offsetHeight - 0.5;
  const magnetPower = 40;
  const magnetTextPower = 80;

  //move button to new position

  gsap.to(magnet, {
    duration: 1,
    x: newX * magnetPower,
    y: newY * magnetPower,
    ease: "power4.out",

  });

  gsap.to(magnetText, {
    duration: 1,
    x: newX *magnetTextPower,
    y: newY * magnetTextPower,
    ease: "power4.out",
  });
};

//Mouse leave 

const resetMagnet = (event) => {
  //move btn to its original pos
  gsap.to(magnet, {
    duration: 1,
    x: 0,
    y: 0,
    ease: "elastic.out",
  });

  //move btn text to original
   gsap.to(magnetText, {
    duration: 1,
    x: 0,
    y: 0,
    ease: "elastic.out",
   });
};

magnet.addEventListener("mousemove", activateMagnet);
magnet.addEventListener("mouseleave", resetMagnet);

}
function pook(){
  const magnet = document.querySelector(".magnet:nth-child(2)");
const magnetText = document.querySelector(".magnet:nth-child(2) .text");


//move mouse

const activateMagnet = (event) => {
  const boundBox = magnet.getBoundingClientRect();
  const newX = (event.clientX - boundBox.left) / magnet.offsetWidth - 0.5;
  const newY = (event.clientY - boundBox.top) / magnet.offsetHeight - 0.5;
  const magnetPower = 40;
  const magnetTextPower = 80;

  //move button to new position

  gsap.to(magnet, {
    duration: 1,
    x: newX * magnetPower,
    y: newY * magnetPower,
    ease: "power4.out",

  });

  gsap.to(magnetText, {
    duration: 1,
    x: newX *magnetTextPower,
    y: newY * magnetTextPower,
    ease: "power4.out",
  });
};

//Mouse leave 

const resetMagnet = (event) => {
  //move btn to its original pos
  gsap.to(magnet, {
    duration: 1,
    x: 0,
    y: 0,
    ease: "elastic.out",
  });

  //move btn text to original
   gsap.to(magnetText, {
    duration: 1,
    x: 0,
    y: 0,
    ease: "elastic.out",
   });
};

magnet.addEventListener("mousemove", activateMagnet);
magnet.addEventListener("mouseleave", resetMagnet);

}
function sook(){
const magnet = document.querySelector(".magnet:nth-child(3)");
const magnetText = document.querySelector(".magnet:nth-child(3) .text");


//move mouse

const activateMagnet = (event) => {
  const boundBox = magnet.getBoundingClientRect();
  const newX = (event.clientX - boundBox.left) / magnet.offsetWidth - 0.5;
  const newY = (event.clientY - boundBox.top) / magnet.offsetHeight - 0.5;
  const magnetPower = 40;
  const magnetTextPower = 80;

  //move button to new position

  gsap.to(magnet, {
    duration: 1,
    x: newX * magnetPower,
    y: newY * magnetPower,
    ease: "power4.out",

  });

  gsap.to(magnetText, {
    duration: 1,
    x: newX *magnetTextPower,
    y: newY * magnetTextPower,
    ease: "power4.out",
  });
};

//Mouse leave 

const resetMagnet = (event) => {
  //move btn to its original pos
  gsap.to(magnet, {
    duration: 1,
    x: 0,
    y: 0,
    ease: "elastic.out",
  });

  //move btn text to original
   gsap.to(magnetText, {
    duration: 1,
    x: 0,
    y: 0,
    ease: "elastic.out",
   });
};

magnet.addEventListener("mousemove", activateMagnet);
magnet.addEventListener("mouseleave", resetMagnet);

}
rook();
pook();
sook();