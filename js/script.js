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
    i= i+1 <= fourCards.length-1 ? i+1 : 0;
    fourCards[i].dataset.status = "pre-before";
    setTimeout(() => {
        fourCards[i].dataset.status = "active";
    });
});

buttonB.addEventListener('click', () => {
    fourCards[i].dataset.status = "before";
    i= i-1 >= 0 ? i-1 : fourCards.length-1;
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
                if(index < itterations){resulttext += letter; index++; return;}
                if(letter == " "){resulttext += " "; return;}
                resulttext += ExistingLetters[Math.round(Math.random() * (ExistingLetters.length-1))];
            });
            textLetterChanging.textContent = resulttext;
            resulttext ="";
            itterations += 1/2;
            index = 0;
        }, 30);
    });
});