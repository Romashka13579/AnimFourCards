var dogFlippingCards = document.querySelectorAll('.dog-flipping-sandwich');

dogFlippingCards.forEach(card => {
    card.addEventListener('click', () => {
        card.dataset.flipped = card.dataset.flipped == "0" ? 1:0;
        card.style.transform = `perspective(650px) rotateX(${180*parseInt(card.dataset.flipped)}deg)`;
    });
});