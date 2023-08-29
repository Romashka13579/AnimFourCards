var fourCards = document.querySelectorAll('[data-status]')
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
    i++;
    fourCards[i].dataset.status = "active";
});

buttonB.addEventListener('click', () => {
    fourCards[i].dataset.status = "before";
    i--;
    fourCards[i].dataset.status = "active";
});
