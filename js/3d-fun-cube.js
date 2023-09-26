var fun3dCubicpart = document.querySelectorAll('.fun-3d-cubic-part');
var funCubicUp = document.querySelector('.fun-cubic-button-up');
var funCubicDown = document.querySelector('.fun-cubic-button-down');

funCubicUp.addEventListener('click', () => {
    fun3dCubicpart.forEach(cubicPart => {
        var i = parseInt(cubicPart.dataset.index);
        i++;
        cubicPart.dataset.index = i;
        cubicPart.style.transform = `perspective(700px) rotateX(${90 * (i)}deg) translateZ(150px)` 
    }); 
});

funCubicDown.addEventListener('click', () => {
    var i = parseInt(fun3dCubic1part.dataset.index);
    i--;
    fun3dCubic1part.dataset.index = i;
    fun3dCubic1part.style.transform = `perspective(700px) rotateX(${90 * (i)}deg) translateZ(150px)`
});