var mousefollowingbubbles = document.querySelector('.mouse-following-bubbles');
var mousefollowingbubble = document.querySelector('.mouse-following-bubble');

mousefollowingbubbles.addEventListener('mousemove', (e) => {
    difference = mousefollowingbubbles.getBoundingClientRect().top - window.screenY;
    let x = e.clientX;
    let y = e.clientY - difference;
    if(x>-50 && x<mousefollowingbubbles.getBoundingClientRect().width+50 && y>-50 && y<mousefollowingbubbles.getBoundingClientRect().height+50){
        var clone = mousefollowingbubble.cloneNode(true);
        clone.style.background = `rgb(${255 * Math.random()}, ${255 * Math.random()}, ${255 * Math.random()})`;
        clone.style.transform = `scale(${0.5 + 0.5 * Math.random()})`;
        clone.style.top = `${y + 15 - 70 * Math.random()}px`;
        clone.style.left = `${x + 15 - 70 * Math.random()}px`;
        clone.classList += ' bubble-clone';
        mousefollowingbubbles.append(clone);
    
        Clearing(clone);
    }
});

function Clearing(element){
    setTimeout(() => {
        element.remove();
    }, 2000);
}