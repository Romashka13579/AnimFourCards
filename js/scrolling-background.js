var scrollingBackgroundParts = document.querySelectorAll('.scrolling-background-part');
var scrollingBackground = document.querySelector('.scrolling-background');
var scrollingBackgroundMain = document.querySelector('.scrolling-background-main');

let lastScrollTop = document.documentElement.scrollTop;
let backTop = scrollingBackground.offsetTop; // position of scrolling background in document = 7000+px
let backheight = scrollingBackgroundMain.getBoundingClientRect().height; // height of the block = 100vh

window.addEventListener('scroll', () => {
    const scrollTopPosition = document.documentElement.scrollTop;

    if (lastScrollTop >= backTop) {
        for (let i = 0; i < scrollingBackgroundParts.length; i++) {
            if (i < 3) { scrollingBackgroundParts[i].style.opacity = `${(backTop - lastScrollTop + backheight) / (2 * backheight) + 0.5}`; } // calculating position - last window position + height of the block and dividing it by height of the block to get value from 1 to 0
            else { scrollingBackgroundParts[i].style.opacity = `${(lastScrollTop - backTop - backheight) / (2 * backheight) + 0.5}`; }
            scrollingBackgroundParts[1].style.top = `${(lastScrollTop - backTop) / 2}px`;
            scrollingBackgroundParts[2].style.top = `${(lastScrollTop - backTop) / 3}px`;
            scrollingBackgroundParts[4].style.top = `${(backTop - lastScrollTop + 2 * backheight) / 2}px`;
            scrollingBackgroundParts[5].style.top = `${(backTop - lastScrollTop + 2 * backheight) / 3}px`;
        }
    }
    else if(lastScrollTop < backTop){
        scrollingBackgroundParts[0].style.opacity = `${(backheight - backTop + lastScrollTop) / backheight}`;
        scrollingBackgroundParts[1].style.opacity = `${(backheight - backTop + lastScrollTop) / backheight}`;
        scrollingBackgroundParts[2].style.opacity = `${(backheight - backTop + lastScrollTop) / backheight}`;
    }
    lastScrollTop = scrollTopPosition <= 0 ? 0 : scrollTopPosition;
}
);