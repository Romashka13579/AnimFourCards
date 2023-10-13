var cards = document.querySelectorAll('.postanim-dragging-card');
var Area = document.querySelector('.postanim-dragging-cards');

var clone = cards[0].cloneNode(true);
Area.prepend(clone);
clone.style.display = "block";

cards.forEach(card => {
    card.addEventListener('mousedown', () => {
        card.dataset.down = "1";
        clone.style.display = "block";
    });
    window.addEventListener("mousemove", (event) => {
        if(card.dataset.down == "1"){
            card.dataset.dragged = "1";
            var x = event.clientX;
            var y = event.clientY;
            if(card.dataset.dragged == "1"){
                clone.style.position = "absolute";
                clone.style.left = `${x - (card.offsetWidth)/2}px`;
                clone.style.top = `${y - (card.offsetHeight)/2}px`;
            }
        }
    });
    clone.addEventListener('mouseup', () => {
        card.dataset.dragged = "0"; 
        card.dataset.down = "0";
        clone.style.display = "none";
    });
});

