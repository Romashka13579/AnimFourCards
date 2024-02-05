var carousel = document.querySelector('.carousel');
var carouselOver = document.querySelector('.carousel-over');

var carouselItems = document.querySelectorAll('.carousel-item');

for (let j = 0; j < 5; j++) {
    for (let i = 0; i < carouselItems.length; i++) {
        carouselOver.append(carouselItems[i].cloneNode(true));
    }
}

var carouselItems = document.querySelectorAll('.carousel-item');

for (let i = 0; i < carouselItems.length; i++) {
    carouselItems[i].style.transform = `rotateY(${12 * i}deg) translateZ(-1900px)`;
}

var startDragging = false;
var position = 0;
var rotation = 0;
var startRotation = 0;
var scrolled = 0;

const dragstart = (e) => {
    e.preventDefault();
    startDragging = true;
    position = parseInt(e.clientX);
}

const dragging = (e) => {
    if (!startDragging) return;
    e.preventDefault();
    rotation = (position - parseInt(e.clientX)) / 14 + startRotation;
    carouselOver.style.transform = `perspective(600px) translateZ(1900px) translateY(-30px) rotateZ(-4deg) rotateY(${rotation + scrolled}deg)`;
    console.log(rotation + scrolled);
}

const dragover = (e) => {
    e.preventDefault();
    startDragging = false;
    startRotation = rotation;
    console.log(startRotation);
}

const scroll = (e) => {
    e.preventDefault();
    scrolled = document.documentElement.scrollTop / 50;
    carouselOver.style.transform = `perspective(600px) translateZ(1900px) translateY(-30px) rotateZ(-4deg) rotateY(${rotation + scrolled}deg)`;
    console.log(rotation + scrolled);
}

carousel.addEventListener('mousemove', dragging);
carousel.addEventListener('mousedown', dragstart);
carousel.addEventListener('mouseup', dragover);

window.addEventListener('scroll', scroll);