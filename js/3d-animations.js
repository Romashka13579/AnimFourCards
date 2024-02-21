var cubeBase = document.querySelector('.cube-3d-base');
var requestAnimationFrame = window.requestAnimationFrame;

var rotation = 0;
var spin = false;


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


var numberBase = document.querySelector('.number-3d-base');

var rotation1 = 0;

Spinning2()

function Spinning2(){
    numberBase.style.transform = `perspective(500px) rotateY(${rotation1}deg)`;
    rotation1 +=2;
 
    requestAnimationFrame(Spinning2);
}