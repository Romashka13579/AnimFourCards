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
                mainParallaxLayers[i].style.marginTop = `-11vw`;
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
            object.style.marginTop = `-11vw`;
        }
        object.style.transform = `translateX(${x}vw) translateY(${y}vh)`;
    });

    window.addEventListener('scroll', () => {
        y2 = window.scrollY*2.5;
        y = (0 - (y1 + y2)/paralaxMainClient.height * 20) * parseFloat(object.dataset.speedy);
        x = (20 - x1/paralaxMainClient.width * 40) * parseFloat(object.dataset.speedx);
        if(object.dataset.speedx != "0"){
            object.style.marginTop = `-11vw`;
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

Scrolling();

function Scrolling() {
    animations.forEach(item => {

        var trigger = window.innerHeight;
        var properties = item.getBoundingClientRect();
        var trigger2 = properties.top + properties.height/2;

        if (trigger2 < trigger) {
            if(item.dataset.animated == "true") return;
            else if(item.dataset.animation == "card"){
                item.dataset.animated = "true";
                CardAnimation(item);
            }
            else{
                item.querySelectorAll('.animation-child').forEach(child => {
                    TextSplitting(child);
                });
            }
            item.dataset.animated = "true";
        }
    });
}


function TextSplitting(object) {  
    object.style.opacity = "1";
    var string = object.innerHTML.split("");
    object.innerHTML = "";
    for (let i = 0; i < string.length; i++) {
        var span = document.createElement('span');
        span.classList.add("text-span");
        span.innerHTML = string[string.length-i-1];
        object.prepend(span);
    }


    TextAppearing(object);
}

function TextAppearing(object) {
    var array = object.querySelectorAll('.text-span');
    var jump = 0;
    var previous = 10000;
    let j = 0;
    for (let i = 0; i < array.length; i++) {
        if(array[i].offsetTop > previous){
            j++;
            jump = i- 5*j;
            console.log(jump);
        }
        setTimeout(() => {
            array[i].style.opacity = "1";
            if (object.dataset.animation == "switch" && i == array.length-1) {
                setTimeout(() => {
                    object.dataset.animation = "0";
                    TextSwitch(object);
                }, 4000);
            }
        }, 45*(i-jump));
        previous = array[i].offsetTop;
    }
}

var TypesArray = ["Designer", "Game Developer", "Web/Frontend developer"];

function TextSwitch(object) { 
    var array = object.querySelectorAll('.text-span');
    for (let i = 0; i < array.length; i++) {
        setTimeout(() => {
            array[i].style.opacity = "0";
            console.log(1);
        }, i * 100);
    }
    for (let i = 0; i < array.length; i++) {
        setTimeout(() => {
            if(!TypesArray[parseInt(object.dataset.animation)][i]){
                array[i].innerHTML = '';
            }
            else{
                array[i].innerHTML = TypesArray[parseInt(object.dataset.animation)][i];
            }
            array[i].style.opacity = "1";
            if (object.dataset.animation && i == array.length-1) {
                setTimeout(() => {
                    TextSwitch(object);
                }, 4000);
            }
            console.log(2);
        }, (100*i + 100));
    }
    object.dataset.animation = (parseInt(object.dataset.animation)) == (TypesArray.length - 1)? "0" : `${parseInt(object.dataset.animation) + 1}`;
    console.log(object.dataset.animation);
    // var jump = 0;
    // var previous = 10000;
    // let j = 0;
    // for (let i = 0; i < array.length; i++) {
    //     if(array[i].offsetTop > previous){
    //         j++;
    //         jump = i- 5*j;
    //         console.log(jump);
    //     }
    //     setTimeout(() => {
    //         array[i].style.opacity = "1";
    //         if (object.dataset.animation && i == array.length-1) {
    //             setTimeout(() => {
    //                 TextSwitch(object);
    //             }, 4000);
    //         }
    //     }, 45*(i-jump));
    //     previous = array[i].offsetTop;
    // }
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