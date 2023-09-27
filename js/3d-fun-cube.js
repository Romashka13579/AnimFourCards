var fun3dCubicpart = document.querySelectorAll('.fun-3d-cubic-part');
var funCubicUp = document.querySelector('.fun-cubic-button-up');
var funCubicDown = document.querySelector('.fun-cubic-button-down');
var funCubicLeft = document.querySelector('.fun-cubic-button-left');
var funCubicRight = document.querySelector('.fun-cubic-button-right');

funCubicUp.addEventListener('click', () => {
    fun3dCubicpart.forEach(cubicPart => {
        var i = parseInt(cubicPart.dataset.index);
        var i2 = parseInt(cubicPart.dataset.index2);
        var i3 = parseInt(cubicPart.dataset.index3);
        if(cubicPart.dataset.mainv == "1"){
            i++;
            cubicPart.dataset.mainh = cubicPart.dataset.mainh == "0" ? 1 : 0;
            cubicPart.dataset.index = i;
            cubicPart.style.transform = `perspective(700px) rotateX(${90 * (i)}deg) rotateY(${90 * (i2)}deg) rotateZ(${90 * (i3)}deg) translateZ(150px)`
        }
        else{
            i3++;
            cubicPart.dataset.index3 = i3;
            cubicPart.style.transform = `perspective(700px) rotateX(${90 * (i)}deg) rotateY(${90 * (i2)}deg) rotateZ(${90 * (i3)}deg) translateZ(150px)`
            console.log(i, i2);
        }
    });
});

funCubicDown.addEventListener('click', () => {
    fun3dCubicpart.forEach(cubicPart => {
        var i = parseInt(cubicPart.dataset.index);
        var i2 = parseInt(cubicPart.dataset.index2);
        var i3 = parseInt(cubicPart.dataset.index3);
        if(cubicPart.dataset.mainv == "1"){
            i--;
            cubicPart.dataset.mainh = cubicPart.dataset.mainh == "0" ? 1 : 0;
            cubicPart.dataset.index = i;
            cubicPart.style.transform = `perspective(700px) rotateX(${90 * (i)}deg) rotateY(${90 * (i2)}deg) rotateZ(${90 * (i3)}deg) translateZ(150px)`
        }
        else{
            i3--;
            cubicPart.dataset.index3 = i3;
            cubicPart.style.transform = `perspective(700px) rotateX(${90 * (i)}deg) rotateY(${90 * (i2)}deg) rotateZ(${90 * (i3)}deg) translateZ(150px)`
            console.log(i, i2);
        }
    });
});

funCubicLeft.addEventListener('click', () => {
    fun3dCubicpart.forEach(cubicPart => {
        var i = parseInt(cubicPart.dataset.index);
        var i2 = parseInt(cubicPart.dataset.index2);
        var i3 = parseInt(cubicPart.dataset.index3);
        if(cubicPart.dataset.mainh == "1"){
            i2++;
            cubicPart.dataset.mainv = cubicPart.dataset.mainv == "0" ? 1 : 0;
            cubicPart.dataset.index2 = i2;
            cubicPart.style.transform = `perspective(700px) rotateX(${90 * (i)}deg) rotateY(${90 * (i2)}deg) rotateZ(${90 * (i3)}deg)  translateZ(150px)`
        }
        else{
            i3++;
            cubicPart.dataset.index3 = i3;
            cubicPart.style.transform = `perspective(700px) rotateX(${90 * (i)}deg) rotateY(${90 * (i2)}deg) rotateZ(${90 * (i3)}deg) translateZ(150px)`
            console.log(i, i2);
        }
    });
});

funCubicRight.addEventListener('click', () => {
    fun3dCubicpart.forEach(cubicPart => {
        var i = parseInt(cubicPart.dataset.index);
        var i2 = parseInt(cubicPart.dataset.index2);
        var i3 = parseInt(cubicPart.dataset.index3);
        if(cubicPart.dataset.mainh == "1"){
            i2--;
            cubicPart.dataset.mainv = cubicPart.dataset.mainv == "0" ? 1 : 0;
            cubicPart.dataset.index2 = i2;
            cubicPart.style.transform = `perspective(700px) rotateX(${90 * (i)}deg) rotateY(${90 * (i2)}deg) rotateZ(${90 * (i3)}deg) translateZ(150px)`
        }
        else{
            i3--;
            cubicPart.dataset.index3 = i3;
            cubicPart.style.transform = `perspective(700px) rotateX(${90 * (i)}deg) rotateY(${90 * (i2)}deg) rotateZ(${90 * (i3)}deg) translateZ(150px)`
            console.log(i, i2);
        }
    });
});