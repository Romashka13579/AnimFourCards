var specialSliderFull = document.querySelector('.special-slider-full');
var pressed = false;
var startPosition = 0;
var position = 0;

window.addEventListener('mousemove', (event) => {
    if (pressed == false) { return; }
    // if (parseFloat(specialSliderFull.dataset.position) > 0 || parseFloat(specialSliderFull.dataset.position) < ((window.innerWidth / specialSliderFull.offsetWidth * 100)) - 100){return;}
    event.preventDefault();
    distance = (event.clientX - startPosition) / specialSliderFull.offsetWidth * 100;
    position = (distance + parseFloat(specialSliderFull.dataset.position));
    specialSliderFull.style.transform = `translateX(${position}%)`;

    var specialSliderCards = document.querySelectorAll('.special-slider-card');
    var change = -position;
    var center = (window.innerWidth / 2) / specialSliderFull.offsetWidth * 100 + change;
    specialSliderCards.forEach(specialSliderCard => {
        var cardPosition = (specialSliderCard.offsetLeft + specialSliderCard.offsetWidth / 2) / specialSliderFull.offsetWidth * 100;
        console.log(position);
        specialSliderCard.animate({
            transform: `scale(${0.9 + 0.7 * (Math.abs(cardPosition - center)) / 100}) perspective(500px) rotateX(0deg) rotateY(${-0.5 * (cardPosition - center)}deg) rotateZ(0deg)`,
            objectPosition: `${100 + position}% center`
        }, { duration: 500, fill: "forwards" });
    });

});

specialSliderFull.addEventListener('mousedown', (event) => {
    pressed = true;
    startPosition = event.clientX;
    console.log(parseFloat(specialSliderFull.dataset.position));
});

window.addEventListener('mouseup', () => {
    pressed = false;
    specialSliderFull.dataset.position = position;
});
