var parts = document.querySelectorAll('.scrolling-background-part');

let backTop = document.querySelector('.scrolling-background').offsetTop; // position of scrolling background in document = 7000+px
let backheight = document.querySelector('.scrolling-background-main').getBoundingClientRect().height; // height of the block = 100vh

let lastScrollTop = document.documentElement.scrollTop;

window.addEventListener('scroll', Scroll);

function Scroll() {
    const scrollTopPosition = document.documentElement.scrollTop;
    const difference = backTop - lastScrollTop;

    if (difference < 0) {
        for (let i = 0; i < parts.length; i++) {

            if (i < 3) { parts[i].style.opacity = `${(difference + backheight) / (2 * backheight) + 0.5}`; } // calculating position - last window position + height of the block and dividing it by height of the block to get value from 1 to 0
            else { parts[i].style.opacity = `${(-difference - backheight) / (2 * backheight) + 0.5}`; }

            parts[1].style.top = `${(-difference) / 2}px`;
            parts[2].style.top = `${(-difference) / 3}px`;
            if ((-difference) <= backheight * 2) {
                parts[4].style.top = `${(difference + 2 * backheight) / 2}px`;
                parts[5].style.top = `${(difference + 2 * backheight) / 3}px`;
            }
            else {
                parts[4].style.top = `0px`;
                parts[5].style.top = `0px`;
            }
        }
    }
    else if(difference > 0){
        for (let i = 0; i < parts.length; i++) {
            if (i < 3) { parts[i].style.opacity = `1`; }
            if (i >= 3) { parts[i].style.opacity = `0`; }
        }
    }
    lastScrollTop = scrollTopPosition <= 0 ? 0 : scrollTopPosition;
}

Scroll();