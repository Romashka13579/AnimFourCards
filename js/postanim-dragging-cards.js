var cards = document.querySelectorAll('.postanim-dragging-card');
var Area = document.querySelector('.postanim-dragging-cards');

cards.forEach(card => {
    card.addEventListener('mousedown', (event) => {
        card.dataset.down = "1";
        card.dataset.left = event.clientX - card.getBoundingClientRect().left;
        card.dataset.top = event.clientY - card.getBoundingClientRect().top;
    });
    Area.addEventListener("mousemove", (event) => {
        if(card.dataset.down == "1"){
            card.dataset.dragged = "1";
            var x = event.clientX;
            var y = event.clientY;
            if(card.dataset.dragged == "1"){
                card.style.left = `${x - 200}px`;
                card.style.top = `${y - 100}px`;
                console.log(y - (y - parseInt(card.dataset.top)));
            }
        }
    });
    card.addEventListener('mouseup', () => {
        card.dataset.dragged = "0"; 
        card.dataset.down = "0";
    });
});

