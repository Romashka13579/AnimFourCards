var paralaxMain = document.querySelector('.paralax-main');
var paralaxPart = document.querySelectorAll('.paralax-parts');
var paralaxMainClient = paralaxMain.getBoundingClientRect();

var checker = false;

setTimeout(() => {
    window.addEventListener('mousemove', (e) => {
        paralaxPart.forEach(part => {
            if(parseFloat(paralaxMainClient.height) < e.clientY) return;
            var x = (20 - e.clientX/paralaxMainClient.width * 40) * parseFloat(part.dataset.speed);
            var y = 5 - e.clientY/paralaxMainClient.height * 10;
            part.style.transform = `translateX(${x}vw) translateY(${y}vh)`;
        });
    });
}, 4400);

Start();

function Start() {
    for (let i = 0; i < paralaxPart.length; i++) {
        setTimeout(() => {
            paralaxPart[i].style.transform = `translateY(0%)`;
        }, 300*i);
    }
}