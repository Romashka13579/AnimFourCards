var paralaxMain = document.querySelector('.paralax-main');
var paralaxPart = document.querySelectorAll('.paralax-parts');
var paralaxMainClient = paralaxMain.getBoundingClientRect();

Start();

function Start() {
    for (let i = 0; i < paralaxPart.length; i++) {
        setTimeout(() => {
            paralaxPart[i].style.marginTop = `0%`;
            Moving(paralaxPart[i]);
        }, 300*i);
    }
}

function Moving(object){
    window.addEventListener('mousemove', (e) => {
        paralaxMain = document.querySelector('.paralax-main');
        paralaxMainClient = paralaxMain.getBoundingClientRect();
        if(parseFloat(paralaxMainClient.height) < e.clientY) return;
        var x = (20 - e.clientX/paralaxMainClient.width * 40) * parseFloat(object.dataset.speed);
        var y = 5 - e.clientY/paralaxMainClient.height * 10;
        object.style.marginTop = `0%`;
        object.style.transform = `translateX(${x}vw) translateY(${y}vh)`;
    });
}