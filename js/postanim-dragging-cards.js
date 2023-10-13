var cards = document.querySelectorAll('.postanim-dragging-card');
var Area = document.querySelector('.postanim-dragging-cards');

cards.forEach(card => {
    card.addEventListener('mousedown', (event) => {
        card.dataset.down = "1";
        var left = event.clientX - card.getBoundingClientRect().left;
        var top = event.clientY - card.getBoundingClientRect().top;
    });
    window.addEventListener("mousemove", (event) => {
        if(card.dataset.down == "1"){
            card.dataset.dragged = "1";
            var x = event.clientX;
            var y = event.clientY;
            if(card.dataset.dragged == "1"){
                card.style.position = "absolute";
                card.style.left = `${x - (card.offsetWidth)/2}px`;
                card.style.top = `${y - (card.offsetHeight)/2}px`;
                console.log(y - (y - parseInt(card.dataset.top)));
            }
        }
    });
    card.addEventListener('mouseup', () => {
        card.dataset.dragged = "0"; 
        card.dataset.down = "0";
    });
});

