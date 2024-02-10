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

Spinning()

function Spinning(){
    if(spin){
        cubeBase.style.transform = `perspective(500px) rotateY(${rotation}deg)`;
        rotation +=3;
    }
 
    requestAnimationFrame(Spinning);
}

cubeBase.addEventListener('mouseover', start);
cubeBase.addEventListener('mouseout', stop);