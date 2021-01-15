var secret = Math.floor(Math.random() * 10) + 1;

document.getElementById("buttonGuessing") = guess;

function buttonGuessing() {
    while (guess != secret) {
        var guess = prompt("Guess a number between 1 and 10");

        var answer = parseInt(guess);
        if (answer > secret) {
            alert("Incorrect too high")
        } else if (answer < secret) {
            alert("Incorrect,too low")
        }
    }
    alert("Correct!");
    reloadPage();

}

buttonGuessing();

function reloadPage() {
    location.reload();
}