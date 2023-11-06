var scrollingBackgroundParts = document.querySelectorAll('.scrolling-background-part');
var scrollingBackground = document.querySelector('.scrolling-background');
var scrollingBackgroundMain = document.querySelector('.scrolling-background-main');

let lastScrollTop = document.documentElement.scrollTop;
let firstScrollTop = document.documentElement.scrollTop;
let backTop = scrollingBackground.offsetTop;
let backheight = scrollingBackgroundMain.getBoundingClientRect().height;

window.addEventListener('scroll', () => {
    const scrollTopPosition = document.documentElement.scrollTop;

    for (let i = 0; i < scrollingBackgroundParts.length; i++) {
        if(i < 3){scrollingBackgroundParts[i].style.opacity = `${(backTop - lastScrollTop + backheight)/backheight}`;}
        else{scrollingBackgroundParts[i].style.opacity = `${(lastScrollTop - backTop - backheight)/backheight}`;}
        if(lastScrollTop >= backTop){
            scrollingBackgroundParts[1].style.top = `${(lastScrollTop - backTop)/2}px`;
            scrollingBackgroundParts[2].style.top = `${(lastScrollTop - backTop)/3}px`;
            scrollingBackgroundParts[4].style.top = `${(backTop - lastScrollTop + 2*backheight)/2}px`;
            scrollingBackgroundParts[5].style.top = `${(backTop - lastScrollTop + 2*backheight)/3}px`;
        }
    }
    lastScrollTop = scrollTopPosition <= 0 ? 0 : scrollTopPosition;
}
);