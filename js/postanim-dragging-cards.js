cards = document.querySelectorAll('.postanim-dragging-card');

cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.dataset.over = "1";
    });
    card.addEventListener('mouseout', () => {
        card.dataset.over = "0";
    });
    card.addEventListener("drag", (event) => {
        var x = event.clientX;
        var y = event.clientY;
        card.dataset.dragged = "1";
        console.log("1");
        if(card.dataset.dragging == "1" && card.dataset.over == "1"){
            card.style.left = `${x - 100}px`;
            card.style.top = `${y - 100}px`;
        }
    });
});

