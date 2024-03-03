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



var animationTexts = document.querySelectorAll('.animated');

window.addEventListener('scroll', Scrolling);

Scrolling();

function Scrolling() {
    animationTexts.forEach(item => {

        var trigger = window.innerHeight;
        var properties = item.getBoundingClientRect();
        var trigger2 = properties.top + properties.height/2;

        if (trigger2 < trigger) {
            item.querySelectorAll('.animation-child').forEach(child => {
                child.classList.add(`${child.dataset.animation}`);
            });
        }
    });
}



var projectsCard = document.querySelectorAll('.projects-card');

projectsCard.forEach(card => {
    var button = card.querySelector('.projects-card-right');
    button.addEventListener('mouseover', () => {
        card.classList.add('projects-card-hovered');
    }); 
    button.addEventListener('mouseout', () => {
        card.classList.remove('projects-card-hovered');
    }); 
    button.addEventListener('click', () => {
        // card.classList.add('projects-card-clicked');
        projectsCard.forEach(card2 => {
            card2.dataset.position = `${parseInt(card2.dataset.position) - 1}`;
            card.dataset.position = "3";
            card2.style.transform = `perspective(600px) translateX(-${parseInt(card2.dataset.position)*10}%) translateY(-${parseInt(card2.dataset.position)*10}%) translateZ(-${parseInt(card2.dataset.position)*10}px)`;
            card2.style.opacity = `${1/(parseInt(card2.dataset.position) + 1)}`;
            card2.style.transitionDelay = `${parseInt(card2.dataset.position)*100}ms`;
            // card2.style.pointerEvents = "none";
            // if(card2.dataset.position == "0"){
            //     setTimeout(() => {
            //         card2.style.pointerEvents = "all";
            //     }, 800);
            // }
        });

    }); 
});

document.documentElement.style.setProperty(`--variable`, `${10}`);