var jumpingLetters = document.querySelector('.jumping-letters');

var letters = jumpingLetters.dataset.text.split('');
for (let i = 0; i < letters.length; i++) {
    var newDiv = document.createElement("div");
    newDiv.innerHTML = letters[i];
    newDiv.classList.add('jumping-letter');
    newDiv.style.animationDelay = `${(i * 4)/letters.length}s`;
    jumpingLetters.append(newDiv);
    console.log("a");
}