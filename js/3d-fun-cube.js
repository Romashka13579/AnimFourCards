var fun3dCubic1part = document.querySelector('.fun-3d-cubic-1part');
var fun3dCubic2part = document.querySelector('.fun-3d-cubic-2part');
var funCubicUp = document.querySelector('.fun-cubic-button-up');
var funCubicDown = document.querySelector('.fun-cubic-button-down');

funCubicUp.addEventListener('click', () => {
    
    var i = parseInt(fun3dCubic1part.dataset.index);
    i = i <= 4? i++ : i=1;
    fun3dCubic1part.dataset.index = i;
    fun3dCubic2part.dataset.index = i;
    fun3dCubic1part.style.transform = `perspective(2000px) translateZ(${150 * (3-i)}px) translateY(${150 * (4-i)}px) rotateX(${90 * (2-i)}deg)` // perspective(2000px) works, but not the way I want, need to understand why
    fun3dCubic2part.style.transform = `perspective(2000px) rotateX(${90 * (3-i)}deg)` // perspective(2000px) works, but not the way I want, need to understand why
});

funCubicDown.addEventListener('click', () => {
    var i = parseInt(fun3dCubic1part.dataset.index);
    i--;
    fun3dCubic1part.dataset.index = i;
    fun3dCubic1part.style.transform = `rotateX(${90 * (2-i)}deg) translateZ(150px)` // perspective(2000px) works, but not the way I want, need to understand why
});