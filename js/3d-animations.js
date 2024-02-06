var cubeBase = document.querySelector('.cube-3d-base');
var requestAnimationFrame = window.requestAnimationFrame;

rotation = 0;
spin = false;


const start = (e) => {
    spin = true;
}

const stop = (e) => {
    spin = false;
}

Spinning();

function Spinning(){
    if(!spin) return;
    rotation +=2;
    cubeBase.style.transform = `perspective(500px) rotateY(${rotation}deg)`;
 
    requestAnimationFrame(Spinning());
}

cubeBase.addEventListener('mouseover', start);
cubeBase.addEventListener('mouseout', stop);