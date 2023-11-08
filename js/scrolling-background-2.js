var parts2 = document.querySelectorAll('.scrolling-background-part-2');

let backTop2 = document.querySelector('.scrolling-background-2').offsetTop; // position of scrolling background in document = 7000+px
let backheight2 = document.querySelector('.scrolling-background-main-2').getBoundingClientRect().height; // height of the block = 100vh

let lastScrollTop2 = document.documentElement.scrollTop;

window.addEventListener('scroll', Scroll);

function Scroll() {
    const scrollTopPosition = document.documentElement.scrollTop;
    const difference = backTop2 - lastScrollTop2;

    if(lastScrollTop2>=backTop2){
        for (let i = 0; i < parts2.length; i++) {
            if(i > 0 && i < parts2.length / 2){parts2[i].style.top = (Math.abs(difference) >  backheight2 * ( 1 - (i / 3))) ? `${backheight2+1}px` : `0px`;}
            else if(i > parts2.length / 2 && i <= parts2.length - 1){parts2[i].style.top = (Math.abs(difference) <  backheight2 * i / 3) ? `${backheight2+1}px` : `0px`;}
            else{parts2[i].style.opacity = (Math.abs(difference) > backheight2 * i / 3) ? `1` : `0`;}
        }
    }
    
    lastScrollTop2 = scrollTopPosition <= 0 ? 0 : scrollTopPosition;
}

Scroll();