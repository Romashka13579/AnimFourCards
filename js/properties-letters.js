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