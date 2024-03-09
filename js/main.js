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
            if (i != mainParallaxLayers.length-1) {
                mainParallaxLayers[i].style.marginTop = `-20vh`;
            }
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
        if(object.dataset.speedx != "0"){
            object.style.marginTop = `-20vh`;
        }
        object.style.transform = `translateX(${x}vw) translateY(${y}vh)`;
    });

    window.addEventListener('scroll', () => {
        y2 = window.scrollY*2.5;
        y = (0 - (y1 + y2)/paralaxMainClient.height * 20) * parseFloat(object.dataset.speedy);
        x = (20 - x1/paralaxMainClient.width * 40) * parseFloat(object.dataset.speedx);
        if(object.dataset.speedx != "0"){
            object.style.marginTop = `-20vh`;
        }
        object.style.transform = `translateX(${x}vw) translateY(${y}vh)`;
    });
}

var afterParallax = document.querySelector('.after-parallax');

window.addEventListener('scroll', () => {
    paralaxMain = document.querySelector('.main-parallax');
    paralaxMainClient = paralaxMain.getBoundingClientRect();
    var y = (100 - (window.scrollY*10)/paralaxMainClient.height * 20);
    afterParallax.style.transform = `translateY${y}vh`;
});


var animations = document.querySelectorAll('.animated');

window.addEventListener('scroll', Scrolling);
var cardsPoint = false;

Scrolling();

function Scrolling() {
    animations.forEach(item => {

        var trigger = window.innerHeight;
        var properties = item.getBoundingClientRect();
        var trigger2 = properties.top + properties.height/2;

        if (trigger2 < trigger) {
            if(item.dataset.animation == "card"){
                if(cardsPoint) return;
                CardAnimation(item);
                cardsPoint = true;
            }
            else{
                item.querySelectorAll('.animation-child').forEach(child => {
                    if(child.dataset.animation == "show"){
                        TextAnimation(child);
                    }
                });
            }
        }
    });
}


function TextAnimation(object) {  
    object.classList.add(`${object.dataset.animation}`);
}

function CardAnimation(object) { 
    var children = object.querySelectorAll('.animation-child');
    for (let i = 0; i < children.length; i++) {
        children[i].dataset.position = `${i}`;
    }
}



var projectsCard = document.querySelectorAll('.projects-card');

projectsCard.forEach(card => {
    var button = card.querySelector('.projects-card-right');
    button.addEventListener('mouseover', () => {
        card.classList.add("projects-card-hovered");
    }); 
    button.addEventListener('mouseout', () => {
        card.classList.remove("projects-card-hovered");
    }); 
    button.addEventListener('click', () => {
        projectsCard.forEach(card2 => {
            card2.classList.remove('projects-card-clicked');
            card2.classList.remove('projects-card-hovered');
            card2.style.pointerEvents = "none";
            setTimeout(() => {
                card2.dataset.position = `${parseInt(card2.dataset.position) - 1}`;
                if(card2.dataset.position == "0"){
                    setTimeout(() => {PoitnerEvents(card2)}, 800);
                }
                card.dataset.position = "3";
                card.classList.add('projects-card-clicked'); 
            }, 30);
        });
    }); 
});

PoitnerEvents(projectsCard[0]);

function PoitnerEvents(object) {
    object.style.pointerEvents = "all";
}

// document.documentElement.style.setProperty(`--variable`, `${10}`);