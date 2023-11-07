var parts2 = document.querySelectorAll('.scrolling-background-part-2');

let backTop2 = document.querySelector('.scrolling-background-2').offsetTop; // position of scrolling background in document = 7000+px
let backheight2 = document.querySelector('.scrolling-background-main-2').getBoundingClientRect().height; // height of the block = 100vh

let lastScrollTop2 = document.documentElement.scrollTop;

window.addEventListener('scroll', Scroll);

function Scroll() {
    const scrollTopPosition = document.documentElement.scrollTop;
    const difference = backTop2 - lastScrollTop2;

    for (let i = 0; i < parts.length; i++) {
        if(-difference >= backheight2*i/3){
            if(i<2){parts2[0].style.opacity = `1`;parts2[i+1].style.top = `${backheight2}px`;parts2[parts2.length-1].style.opacity = `0`;}
            else if(i==2){parts2[0].style.opacity = `0`;parts2[parts2.length-1].style.opacity = `1`;}
            else if(i<5){parts2[i].style.top = `0px`;}
        }
        console.log(-difference);
    }
    lastScrollTop2 = scrollTopPosition <= 0 ? 0 : scrollTopPosition;
}

Scroll();