var carouselSliderCard = document.querySelectorAll('.carousel-slider-card');
var i = 0;
var k = 0;

carouselSliderCard.forEach(card => {
    i++;
    card.style.transform = `rotateY(${60 * (i - 1)}deg) translateZ(270px)`;
    setTimeout(() => {
        card.style.transition = "1000ms";
    }, 10);
});

var carouselButtonLeft = document.querySelector('.carousel-button-left');
var carouselButtonRight = document.querySelector('.carousel-button-right');

carouselButtonLeft.addEventListener('click', () => {
    k++;
    i = 0;
    carouselSliderCard.forEach(card => {
        i++;
        card.style.transform = `rotateY(${60 * (i - 1 + k)}deg) translateZ(270px)`;
    });
});

carouselButtonRight.addEventListener('click', () => {
    k--;
    i = 0;
    carouselSliderCard.forEach(card => {
        i++;
        card.style.transform = `rotateY(${60 * (i - 1 + k)}deg) translateZ(270px)`;
    });
});