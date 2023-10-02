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