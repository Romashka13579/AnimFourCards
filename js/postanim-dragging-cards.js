cards = document.querySelectorAll('.postanim-dragging-card');

cards.forEach(card => {
    card.addEventListener('mousedown', () => {
        card.dataset.down = "1";
    });
    card.addEventListener("mousemove", (event) => {
        if(card.dataset.down == "1"){
            card.dataset.dragged = "1";
            var x = event.clientX;
            var y = event.clientY;
            console.log(x, y);
            if(card.dataset.dragged == "1"){
                card.style.left = `${x - 100}px`;
                card.style.top = `${y - 100}px`;
                console.log(`${x - 100}px`);
            }
        }
    });
    card.addEventListener('mouseup', () => {
        card.dataset.dragged = "0";
    });
});

