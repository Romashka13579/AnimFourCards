var List = [document.querySelectorAll('.item-card'), document.querySelectorAll('.item-over'), document.querySelectorAll('.item-button-over'), document.querySelectorAll('.item-button')];

window.addEventListener('mousemove', (e) => {
    List.forEach(itemlist => {
        itemlist.forEach(item => {
            hover = item.querySelector('.item-hover');
            hover.style.left = `${e.clientX - hover.offsetWidth/2 - item.getBoundingClientRect().left}px`;
            hover.style.top = `${e.clientY - hover.offsetHeight/2 - item.getBoundingClientRect().top}px`;
        });
    });
});
