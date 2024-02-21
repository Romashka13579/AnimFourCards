var textLetterChangings = document.querySelectorAll('.text-letter-changing');
var ExistingLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var interval = null;

textLetterChangings.forEach(textLetterChanging => {
    textLetterChanging.addEventListener('mouseover', () => {
        TextEffect(textLetterChanging);
    });
});

function TextEffect(textLetterChanging) {
    var lettersOfText = textLetterChanging.dataset.text.split("");
    var resulttext = "";
    var itterations = -1;
    var index = 0;
    clearInterval(interval);

    interval = setInterval(() => {
        lettersOfText.forEach(letter => {
            if (index < itterations) { resulttext += letter; index++; return; }
            if (letter == " ") { resulttext += " "; return; }
            resulttext += ExistingLetters[Math.round(Math.random() * (ExistingLetters.length - 1))];
        });
        textLetterChanging.textContent = resulttext;
        resulttext = "";
        itterations += 1 / 2;
        index = 0;
    }, 30);
    setTimeout(() => {
        
    }, lettersOfText.length*30);
    console.log(lettersOfText);
}



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




var LettersBlocks = document.querySelectorAll('.letters-block');

LettersBlocks.forEach(block => {
    var letters = block.querySelector('.letters');
    var lettersArray = letters.dataset.text.split('');
    for (let i = 0; i < lettersArray.length; i++) {
        var newDiv = document.createElement("div");
        newDiv.innerHTML = lettersArray[i];
        newDiv.classList.add('letter');
        switch (letters.dataset.text) {
            case "Jumping":
                newDiv.classList.add('jumping');
                newDiv.style.animationDelay = `${(i ) / lettersArray.length}s`;
                break;
            case "Floating":
                newDiv.classList.add('floating');
                newDiv.style.animationDelay = `${(i * Math.random() * 2.5) / lettersArray.length}s`;
                break;
            case "Scaling":
                newDiv.classList.add('scaling');
                newDiv.style.animationDelay = `${(i) / lettersArray.length}s`;
                break;
            case "Twirlling":
                newDiv.classList.add('twirlling');
                newDiv.style.animationDelay = `${(i * 0.6) / lettersArray.length}s`;
                break;
            case "Flipping":
                newDiv.classList.add('flipping');
                newDiv.style.animationDelay = `${(i * 0.6) / lettersArray.length}s`;
                break;
            case "Blowing":
                newDiv.classList.add('blowing');
                newDiv.style.animationDelay = `${(i * 0.5) / lettersArray.length}s`;
                break;
        }
        letters.append(newDiv);
    }
});