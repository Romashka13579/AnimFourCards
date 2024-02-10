var paralaxMain = document.querySelector('.paralax-main');
var paralaxPart = document.querySelectorAll('.paralax-parts');
var paralaxMainClient = paralaxMain.getBoundingClientRect();

window.addEventListener('mousemove', (e) => {
    paralaxPart.forEach(part => {
        var x = (20 - e.clientX/paralaxMainClient.width * 40) * parseFloat(part.dataset.speed);
        var y = 20 - e.clientY/paralaxMainClient.height * 40;
        part.style.transform = `translateX(${x}vw) translateY(${y}vh)`;
        console.log(1 * parseFloat(part.dataset.speed));
    });
});