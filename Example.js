var secret = 7;

document.getElementById("buttonGuessing") = guess;

function buttonGuessing() {
    var guess = prompt("Guess a number between 1 and 10");

    var answer = parseInt(guess);
    if (answer != 7) {
        alert("Incorrect");
        //  return buttonGuessing;
    } else {
        alert("Correct!");
    }

    if (answer > 7) {
        alert("Incorrect too high")
    } else if (answer < 7) {
        alert("Incorrect,too low")
    }
}

buttonGuessing();