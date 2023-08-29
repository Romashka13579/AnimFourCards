var fourCards = document.querySelectorAll('[data-status]');
var fourCardsBlock = document.querySelector('.four-cards-block');
var buttonN = document.querySelector('.next');
var buttonB = document.querySelector('.back');

var i = 0;

// var firstClone = fourCards[0].cloneNode(true);
// var lastClone = fourCards[fourCards.length - 1].cloneNode(true);

// firstClone.id = "first-clone";
// lastClone.id = "last-clone";

// fourCardsBlock.append(firstClone);
// fourCardsBlock.prepend(lastClone);

fourCards.forEach(card => {
    if (card.dataset.status == "active") {
        i = parseInt(card.dataset.index);
    }
});

buttonN.addEventListener('click', () => { 
    fourCards[i].dataset.status = "after";
    // i= i+1 <= fourCards.length-1 ? i+1 : 0;
    if(i+1 <= fourCards.length-1){
        i++;
    }
    else{
        i = 0;
        fourCards.forEach(card => {
            card.dataset.status = "before";
        });
    }
    fourCards[i].dataset.status = "active";
});

buttonB.addEventListener('click', () => {
    fourCards[i].dataset.status = "before";
    // i= i-1 >= 0 ? i-1 : fourCards.length-1;
    if(i-1 >= 0){
        i--;
    }
    else{
        i = fourCards.length-1;
        fourCards.forEach(card => {
            card.dataset.status = "after";
        });
    }
    fourCards[i].dataset.status = "active";
});
