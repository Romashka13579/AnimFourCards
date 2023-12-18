var List = [document.querySelector('.item-card-hover')];

window.addEventListener('mousemove', (e) => {
    List.forEach(item => {
        item.style.left = `${e.clientX - item.offsetWidth/2}px`;
        item.style.top = `${e.clientY - item.offsetHeight/2}px`;
        console.log(e.clientX);
    });
});
