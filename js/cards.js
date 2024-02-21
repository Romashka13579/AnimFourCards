var dogFlippingCards = document.querySelectorAll('.dog-flipping-sandwich');

dogFlippingCards.forEach(card => {
    card.addEventListener('click', () => {
        dogFlippingCards.forEach(card1 => {
            if (card == card1) {
                card.dataset.flipped = card.dataset.flipped == "0" ? 1 : 0;
                card.style.transform = `perspective(650px) rotateX(${180 * parseInt(card.dataset.flipped)}deg)`;
            }
            else {
                card1.dataset.flipped = 0;
                card1.style.transform = `perspective(650px) rotateX(${180 * parseInt(card1.dataset.flipped)}deg)`;
            }
        });
    });
});




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



var List = [document.querySelectorAll('.item-card'), document.querySelectorAll('.item-over'), document.querySelectorAll('.item-button-over'), document.querySelectorAll('.item-button')];

window.addEventListener('mousemove', (e) => {
    List.forEach(itemlist => {
        itemlist.forEach(item => {
            hover = item.querySelector('.item-hover');
            hover.style.left = `${e.clientX - hover.offsetWidth/2 - item.getBoundingClientRect().left}px`;
            hover.style.top = `${e.clientY - hover.offsetHeight/2 - item.getBoundingClientRect().top}px`;
        });
    });
});
