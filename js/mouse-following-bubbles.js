var mousefollowingbubbles = document.querySelector('.mouse-following-bubbles');
var mousefollowingbubble = document.querySelector('.mouse-following-bubble');

mousefollowingbubbles.addEventListener('mousemove', (e) => {
    let x = e.clientX;
    let y = e.clientY;
    var clone = mousefollowingbubble.cloneNode(true);
    clone.style.top = `${y + 15 - 130 * Math.random()}px`;
    clone.style.left = `${x + 15 - 130 * Math.random()}px`;
    clone.style.background = `rgb(${255 * Math.random()}, ${255 * Math.random()}, ${255 * Math.random()})`;
    clone.classList += ' bubble-clone';
    mousefollowingbubbles.append(clone);

    Clearing(clone);
});

function Clearing(element){
    setTimeout(() => {
        element.remove();
    }, 3000);
}