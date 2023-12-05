var mousefollowingbubbles = document.querySelector('.mouse-following-bubbles');
var mousefollowingbubble = document.querySelector('.mouse-following-bubble');

mousefollowingbubbles.addEventListener('mousemove', (e) => {
    let x = e.clientX;
    let y = e.clientY;
    var clone = mousefollowingbubble.cloneNode(true);
    clone.style.background = `rgb(${255 * Math.random()}, ${255 * Math.random()}, ${255 * Math.random()})`;
    clone.style.transform = `scale(${0.5 + 0.5 * Math.random()})`;
    clone.style.top = `${y + 25 - 100 * Math.random()}px`;
    clone.style.left = `${x + 25 - 100 * Math.random()}px`;
    console.log(10 - 120 * Math.random());
    clone.classList += ' bubble-clone';
    mousefollowingbubbles.append(clone);

    Clearing(clone);
});

function Clearing(element){
    setTimeout(() => {
        element.remove();
    }, 2000);
}