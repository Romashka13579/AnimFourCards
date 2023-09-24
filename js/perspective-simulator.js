var rangeInputs = document.querySelectorAll('.perspective-slider-input');
var perspectiveCard = document.querySelector('.perspective-card');

rangeInputs.forEach(rangeInput => {
    rangeInput.addEventListener('input', () => {
        var value = rangeInput.value;
        switch (rangeInput.dataset.input) {
            case "perspective":
                perspectiveCard.dataset.perspective = value;
                break;
            case "rotateX":
                perspectiveCard.dataset.rx = value;
                break;
            case "rotateY":
                perspectiveCard.dataset.ry = value;
                break;
            case "rotateZ":
                perspectiveCard.dataset.rz = value;
                break;
            case "translateX":
                perspectiveCard.dataset.tx = value;
                break;
            case "translateY":
                perspectiveCard.dataset.ty = value;
                break;
            case "translateZ":
                perspectiveCard.dataset.tz = value;
                break;
            case "skewX":
                perspectiveCard.dataset.sx = value;
                break;
            case "skewY":
                perspectiveCard.dataset.sy = value;
                break;
            case "scale":
                perspectiveCard.dataset.scale = value;
                break;
            default:
                break;
        }
        perspectiveCard.style.transform = `
        perspective(${parseInt(perspectiveCard.dataset.perspective) * 50}px) 
        rotateX(${perspectiveCard.dataset.rx}deg)
        rotateY(${perspectiveCard.dataset.ry}deg)
        rotateZ(${perspectiveCard.dataset.rz}deg)
        translateX(${parseInt(perspectiveCard.dataset.tx) * 4}px)
        translateY(${parseInt(perspectiveCard.dataset.ty) * 4}px)
        translateZ(${parseInt(perspectiveCard.dataset.tz) / 10}px)
        skewX(${perspectiveCard.dataset.sx}deg)
        skewY(${perspectiveCard.dataset.sy}deg)
        scale(${parseInt(perspectiveCard.dataset.scale) / 40 + 1})`;
        console.log(parseInt(perspectiveCard.dataset.ty));
    });
});