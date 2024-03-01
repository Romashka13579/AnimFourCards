var mainParallaxLayers = document.querySelectorAll('.main-parallax-layer');
var paralaxMain = document.querySelector('.main-parallax');
var paralaxMainClient = paralaxMain.getBoundingClientRect();
var y = 0;
var y1 = 0;
var y2 = 0;
var x1 = 0;
var x = 0;

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

Start();

function Start() {
    for (let i = 0; i < mainParallaxLayers.length; i++) {
        setTimeout(() => {
            mainParallaxLayers[i].style.marginTop = `-20vh`;
            Moving(mainParallaxLayers[i]);
        }, 200*i/Math.pow(1.2,i));
    }
}

function Moving(object){
    window.addEventListener('mousemove', (e) => {
        paralaxMain = document.querySelector('.main-parallax');
        paralaxMainClient = paralaxMain.getBoundingClientRect();
        if(parseFloat(paralaxMainClient.height) < e.pageY) return;
        x1 = e.clientX;
        y1 = e.clientY;
        x = (20 - x1/paralaxMainClient.width * 40) * parseFloat(object.dataset.speedx);
        y = (0 - (y1 + y2)/paralaxMainClient.height * 20) * parseFloat(object.dataset.speedy);
        object.style.marginTop = `-20vh`;
        object.style.transform = `translateX(${x}vw) translateY(${y}vh)`;
    });

    window.addEventListener('scroll', () => {
        y2 = window.scrollY*2.5;
        y = (0 - (y1 + y2)/paralaxMainClient.height * 20) * parseFloat(object.dataset.speedy);
        x = (20 - x1/paralaxMainClient.width * 40) * parseFloat(object.dataset.speedx);
        object.style.marginTop = `-20vh`;
        object.style.transform = `translateX(${x}vw) translateY(${y}vh)`;
    });
}



var animationTexts = document.querySelectorAll('.text-anim');

window.addEventListener('scroll', Scrolling);

Scrolling();

function Scrolling() {
    animationTexts.forEach(item => {
        var trigger = window.innerHeight;
        var properties = item.getBoundingClientRect();
        var trigger2 = properties.top + properties.height/2;
        console.log(trigger);
        console.log(trigger2);
        if (trigger2 < trigger) {
            item.querySelectorAll('.text-anim-child').forEach(item2 => {
                item2.classList.add('show');
            });
        }
    });
}