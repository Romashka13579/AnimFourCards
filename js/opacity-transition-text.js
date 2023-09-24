var textOpacityTransitions = document.querySelectorAll('.text-opacity-transition');

textOpacityTransitions.forEach(text => {
    var textSplitted = text.innerText.split("");
    var length = text.innerText.length;
    text.innerText = "";
    TextOpacity(textSplitted, text, length);
});

function TextOpacity(textSplitted, object, length) {
    const spanBack = document.createElement("div");
    spanBack.className = "text-opacity-span-back";
    spanBack.style.width = `${parseInt(object.dataset.sizing) * 3}px`;
    spanBack.style.height = `${parseInt(object.dataset.sizing) * 2}px`;
    spanBack.animate({
        opacity: 1
    }, { duration: 1000, fill: "forwards" });

    object.appendChild(spanBack);

    textSplitted.forEach((letter, i) => {
        timeout = setTimeout(() => {
            const span = document.createElement("span");
            span.className = "text-opacity-span";
            span.innerText = letter;
            object.appendChild(span);
            span.animate({
                opacity: 1,
                color: "white"
            }, { duration: 500, fill: "forwards" });
            setTimeout(() => {
                span.animate({
                    color: "rgb(192, 192, 192)"
                }, { duration: 500, fill: "forwards" });
            }, 700);

            spanBack.style.left = `${span.offsetLeft}px`;
            spanBack.style.top = `${span.offsetTop}px`;
            if (i == length-1) {spanBack.style.filter = "blur(50px)";}

        }, (100 * i));
    });
}