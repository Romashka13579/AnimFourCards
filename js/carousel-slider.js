var carouselSliderCard = document.querySelectorAll('.carousel-slider-card');
var i=0;

carouselSliderCard.forEach(card => {
    i++;
    card.style.transform = `rotateY(${60 * (i-1)}deg) translateZ(270px)`; 
});