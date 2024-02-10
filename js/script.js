// var particle = document.querySelector('.mouse-animation-particle');
// var mouseAnimation = document.querySelector('.mouse-animation');

// const particles = (e) => {
//     var posx = e.clientX;
//     var posy = e.clientY;
//     var movex = e.movementX;
//     var movey = e.movementY;
//     var clone = particle.cloneNode(true);
//     if(movex < 0){clone.style.left = `${posx + (20 - Math.floor(Math.random()*41)) + movex/2}px`;}
//     else if(movex > 0){clone.style.left = `${posx + (20 - Math.floor(Math.random()*41)) - movex/2}px`;}
//     else{clone.style.left = `${posx + (20 - Math.floor(Math.random()*41))}px`;}
//     if(movey < 0){clone.style.top = `${posy + (20 - Math.floor(Math.random()*41)) + movey/2}px`;}
//     else if(movey > 0){clone.style.top = `${posy + (20 - Math.floor(Math.random()*41)) - movey/2}px`;}
//     else{clone.style.top = `${posy + (20 - Math.floor(Math.random()*41))}px`;}
    
//     mouseAnimation.append(clone);
//     setTimeout(() => {
//         clone.remove();
//     }, 1000);
// }

// window.addEventListener('mousemove', particles);