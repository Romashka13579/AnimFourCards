var cards = document.querySelectorAll('.postanim-dragging-card');
var Area = document.querySelector('.postanim-dragging-cards');

var clone = cards[0].cloneNode(true);
Area.prepend(clone);
clone.style.display = "none";
clone.style.position = "absolute";

cards.forEach(card => {
    // card.addEventListener('mousedown', () => {
    //     card.dataset.down = "1";
    //     clone.animate({
    //         left: `${card.getBoundingClientRect().left}px`,
    //         top: `${window.scrollY + card.getBoundingClientRect().top}px`
    //     }, { duration: 0, fill: "forwards" });
    // });
    // document.addEventListener("mousemove", (event) => {
    //     if(card.dataset.down == "1"){
    //         card.dataset.dragged = "1";
    //         var x = event.clientX;
    //         var y = event.clientY;
    //         if(card.dataset.dragged == "1"){
    //             clone.style.display = "block";
    //             clone.animate({
    //                 left: `${x - (clone.offsetWidth)/2}px`,
    //                 top: `${y - (clone.offsetHeight)/2 + window.scrollY}px`
    //             }, { duration: 500, fill: "forwards" });
    //         }
    //     }
    // });
    // window.addEventListener('mouseup', () => {
    //     card.dataset.dragged = "0";
    //     card.dataset.down = "0";
    //     clone.style.display = "none";
    //     clone.style.transition = "none";
    // });
    card.addEventListener('drag', () => {
        console.log("abeba");
        card.classList.add('dragged');
    })
    card.addEventListener('dragend', () => {
        console.log("abeba2");
    })
});

