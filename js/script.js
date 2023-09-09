var fourCards = document.querySelectorAll('[data-status]');
var fourCardsBlock = document.querySelector('.four-cards-block');
var buttonN = document.querySelector('.next');
var buttonB = document.querySelector('.back');

var i = 0;

fourCards.forEach(card => {
    if (card.dataset.status == "active") {
        i = parseInt(card.dataset.index);
    }
});

buttonN.addEventListener('click', () => {
    fourCards[i].dataset.status = "after";
    i = i + 1 <= fourCards.length - 1 ? i + 1 : 0;
    fourCards[i].dataset.status = "pre-before";
    setTimeout(() => {
        fourCards[i].dataset.status = "active";
    });
});

buttonB.addEventListener('click', () => {
    fourCards[i].dataset.status = "before";
    i = i - 1 >= 0 ? i - 1 : fourCards.length - 1;
    fourCards[i].dataset.status = "pre-after";
    setTimeout(() => {
        fourCards[i].dataset.status = "active";
    });
});





var textLetterChangings = document.querySelectorAll('.text-letter-changing');
var ExistingLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var interval = null;

textLetterChangings.forEach(textLetterChanging => {
    textLetterChanging.addEventListener('mouseover', () => {
        var lettersOfText = textLetterChanging.dataset.text.split("");
        var resulttext = "";
        var itterations = -1;
        var index = 0;
        clearInterval(interval);

        interval = setInterval(() => {
            lettersOfText.forEach(letter => {
                if (index < itterations) { resulttext += letter; index++; return; }
                if (letter == " ") { resulttext += " "; return; }
                resulttext += ExistingLetters[Math.round(Math.random() * (ExistingLetters.length - 1))];
            });
            textLetterChanging.textContent = resulttext;
            resulttext = "";
            itterations += 1 / 2;
            index = 0;
        }, 30);
    });
});





var specialSliderFull = document.querySelector('.special-slider-full');
var pressed = false;
var startPosition = 0;
var position = 0;

window.addEventListener('mousemove', (event) => {
    if (pressed == false) { return; }
    event.preventDefault();
    distance = (event.clientX - startPosition) / specialSliderFull.offsetWidth * 100;
    position = (distance + parseFloat(specialSliderFull.dataset.position));
    specialSliderFull.style.transform = `translateX(${position}%)`;

    var specialSliderCards = document.querySelectorAll('.special-slider-card');
    var change = -position;
    var center = (window.innerWidth / 2) / specialSliderFull.offsetWidth * 100 + change;
    specialSliderCards.forEach(specialSliderCard => {
        var cardPosition = (specialSliderCard.offsetLeft + specialSliderCard.offsetWidth / 2) / specialSliderFull.offsetWidth * 100;
        console.log(cardPosition - center);
        specialSliderCard.animate({
            transform: `scale(${0.8 + 1 * (Math.abs(cardPosition - center)) / 100}) perspective(650px) rotateX(0deg) rotateY(${-(cardPosition - center)}deg) rotateZ(1deg)`
        }, { duration: 500, fill: "forwards" });

        // specialSliderCard.animate({
        //     transform: `scale(${0.8 + 1 * (Math.abs(cardPosition-center))/100})`
        // }, {duration: 1000, fill:"forwards"});
    });

});

specialSliderFull.addEventListener('mousedown', (event) => {
    pressed = true;
    startPosition = event.clientX;
});

window.addEventListener('mouseup', () => {
    pressed = false;
    specialSliderFull.dataset.position = position;
});




var rangeInputs = document.querySelectorAll('.perspective-slider-input');
var perspectiveCard = document.querySelector('.perspective-card');

rangeInputs.forEach(rangeInput => {
    rangeInput.addEventListener('input', () => {
        var value = rangeInput.value;
        switch (rangeInput.dataset.input) {
            case "perspective":
                perspectiveCard.dataset.perspective = value;
                break;
            case "rotateX":
                perspectiveCard.dataset.rx = value;
                break;
            case "rotateY":
                perspectiveCard.dataset.ry = value;
                break;
            case "rotateZ":
                perspectiveCard.dataset.rz = value;
                break;
            default:
                break;
        }
        perspectiveCard.style.transform = `perspective(${parseInt(perspectiveCard.dataset.perspective) * 50}px) rotateX(${perspectiveCard.dataset.rx}deg) rotateY(${perspectiveCard.dataset.ry}deg) rotateZ(${perspectiveCard.dataset.rz}deg)`;
    });
});