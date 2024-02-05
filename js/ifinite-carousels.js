var carousel = document.querySelector('.carousel');
var carouselOver = document.querySelector('.carousel-over');

var startDragging = false;
var position = 0;
var rotation = 0;
var startRotation = 0;

const dragstart = (e) => {
    startDragging = true;
    position = parseInt(e.clientX);
}

const dragging = (e) => {
    if (!startDragging) return;
    e.preventDefault();
    rotation = position - parseInt(e.clientX) + startRotation;
    carouselOver.style.transform = `perspective(600px) translateZ(1900px) rotateY(${(rotation) / 12}deg)`;
}

const dragover = (e) => {
    startDragging = false;
    startRotation = rotation;
}

carousel.addEventListener('mousemove', dragging);
carousel.addEventListener('mousedown', dragstart);
carousel.addEventListener('mouseup', dragover);