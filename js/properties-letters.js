var LettersBlocks = document.querySelectorAll('.letters-block');

LettersBlocks.forEach(block => {
    var letters = block.querySelector('.letters');
    console.log(letters);
    var lettersArray = letters.dataset.text.split('');
    for (let i = 0; i < lettersArray.length; i++) {
        var newDiv = document.createElement("div");
        newDiv.innerHTML = lettersArray[i];
        newDiv.classList.add('letter');
        switch (letters.dataset.text) {
            case "Jumping":
                newDiv.classList.add('jumping');
                newDiv.style.animationDelay = `${(i * 4) / lettersArray.length}s`;
                break;
            case "Floating":
                newDiv.classList.add('floating');
                newDiv.style.animationDelay = `${(i * 4) / lettersArray.length}s`;
                break;
        }
        letters.append(newDiv);
        console.log("a");
    }
});