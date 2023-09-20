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
        TextEffect(textLetterChanging);
    });
});

function TextEffect(textLetterChanging) {
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
}




var textOpacityTransitions = document.querySelectorAll('.text-opacity-transition');

textOpacityTransitions.forEach(text => {
    var textSplitted = text.innerText.split("");
    var length = text.innerText.length;
    text.innerText = "";
    TextOpacity(textSplitted, text, length);
});

function TextOpacity(textSplitted, object, length) {
    const spanBack = document.createElement("div");
    spanBack.className = "text-opacity-span-back";
    spanBack.style.width = `${parseInt(object.dataset.sizing) * 3}px`;
    spanBack.style.height = `${parseInt(object.dataset.sizing) * 2}px`;
    spanBack.animate({
        opacity: 1
    }, { duration: 1000, fill: "forwards" });

    object.appendChild(spanBack);

    textSplitted.forEach((letter, i) => {
        timeout = setTimeout(() => {
            const span = document.createElement("span");
            span.className = "text-opacity-span";
            span.innerText = letter;
            object.appendChild(span);
            span.animate({
                opacity: 1,
                color: "white"
            }, { duration: 500, fill: "forwards" });
            setTimeout(() => {
                span.animate({
                    color: "rgb(192, 192, 192)"
                }, { duration: 500, fill: "forwards" });
            }, 700);

            spanBack.style.left = `${span.offsetLeft}px`;
            spanBack.style.top = `${span.offsetTop}px`;
            if (i == length-1) {spanBack.style.filter = "blur(50px)";}

        }, (100 * i));
    });
}




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
            case "translateX":
                perspectiveCard.dataset.tx = value;
                break;
            case "translateY":
                perspectiveCard.dataset.ty = value;
                break;
            case "translateZ":
                perspectiveCard.dataset.tz = value;
                break;
            case "skewX":
                perspectiveCard.dataset.sx = value;
                break;
            case "skewY":
                perspectiveCard.dataset.sy = value;
                break;
            case "scale":
                perspectiveCard.dataset.scale = value;
                break;
            default:
                break;
        }
        perspectiveCard.style.transform = `
        perspective(${parseInt(perspectiveCard.dataset.perspective) * 50}px) 
        rotateX(${perspectiveCard.dataset.rx}deg)
        rotateY(${perspectiveCard.dataset.ry}deg)
        rotateZ(${perspectiveCard.dataset.rz}deg)
        translateX(${parseInt(perspectiveCard.dataset.tx) * 4}px)
        translateY(${parseInt(perspectiveCard.dataset.ty) * 4}px)
        translateZ(${parseInt(perspectiveCard.dataset.tz) / 10}px)
        skewX(${perspectiveCard.dataset.sx}deg)
        skewY(${perspectiveCard.dataset.sy}deg)
        scale(${parseInt(perspectiveCard.dataset.scale) / 40 + 1})`;
        console.log(parseInt(perspectiveCard.dataset.ty));
    });
});




var fun3dCubic1part = document.querySelector('.fun-3d-cubic-1part');
var funCubicUp = document.querySelector('.fun-cubic-button-up');
var funCubicDown = document.querySelector('.fun-cubic-button-down');

funCubicUp.addEventListener('click', () => {
    fun3dCubic1part.style.transform += "rotateX(-90deg)"
});

funCubicDown.addEventListener('click', () => {
    fun3dCubic1part.style.transform += "rotateX(90deg)"
});