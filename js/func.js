document.getElementById("imageButton").addEventListener("click", rollDice);

function rollDice() {
    // within range (min-max)(1-6,  tulis 0-6 jos ei olis tota +1)
    //math.floor= tulee tasalukuja vaan eikä desimaaleja
    var number = Math.floor(Math.random() * 6) + 1;

    var diceElement = document.getElementById("imageButton");

    diceElement.innerHTML = `<img src="./img/${number}.png" />`;
}