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
    console.log(lettersOfText);
}
