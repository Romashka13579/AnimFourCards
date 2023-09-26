var fun3dCubicpart = document.querySelectorAll('.fun-3d-cubic-part');
var funCubicUp = document.querySelector('.fun-cubic-button-up');
var funCubicDown = document.querySelector('.fun-cubic-button-down');
var funCubicLeft = document.querySelector('.fun-cubic-button-left');
var funCubicRight = document.querySelector('.fun-cubic-button-right');

funCubicUp.addEventListener('click', () => {
    fun3dCubicpart.forEach(cubicPart => {
        var i = parseInt(cubicPart.dataset.index);
        var i2 = parseInt(cubicPart.dataset.index2);
        i++;
        i2++;
        cubicPart.dataset.index = i;
        cubicPart.dataset.index2 = i2;
        console.log(i, i2);
        cubicPart.style.transform = `perspective(700px) rotateX(${90 * (i)}deg) rotateY(${90 * (i2)}deg) translateZ(150px)` 
    }); 
});

funCubicDown.addEventListener('click', () => {
    fun3dCubicpart.forEach(cubicPart => {
        var i = parseInt(cubicPart.dataset.index);
        var i2 = parseInt(cubicPart.dataset.index2);
        i++;
        i2++;
        cubicPart.dataset.index = i;
        cubicPart.dataset.index2 = i2;
        cubicPart.style.transform = `perspective(700px) rotateX(${90 * (i)}deg) rotateY(${90 * (i2)}deg) translateZ(150px)` 
    }); 
});

funCubicLeft.addEventListener('click', () => {
    fun3dCubicpart.forEach(cubicPart => {
        var i = parseInt(cubicPart.dataset.index);
        var i2 = parseInt(cubicPart.dataset.index2);
        i++;
        i2++;
        cubicPart.dataset.index = i;
        cubicPart.dataset.index2 = i2;
        cubicPart.style.transform = `perspective(700px) rotateX(${90 * (i)}deg) rotateY(${90 * (i2)}deg) translateZ(150px)` 
    }); 
});

funCubicRight.addEventListener('click', () => {
    fun3dCubicpart.forEach(cubicPart => {
        var i = parseInt(cubicPart.dataset.index);
        var i2 = parseInt(cubicPart.dataset.index2);
        i++;
        i2++;
        cubicPart.dataset.index = i;
        cubicPart.dataset.index2 = i2;
        cubicPart.style.transform = `perspective(700px) rotateX(${90 * (i)}deg) rotateY(${90 * (i2)}deg) translateZ(150px)` 
    }); 
});