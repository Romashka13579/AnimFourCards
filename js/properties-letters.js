var jumpingLetters = document.querySelector('.jumping-letters');

var letters = jumpingLetters.dataset.text.split();
letters.forEach(letter => {
    jumpingLetters.append(`${letter}`);
});
console.log(letters);