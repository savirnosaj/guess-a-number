let num = Math.floor(Math.random() * 11);

let check = true;
let guessCount = 0;

while(check){
    let guess = prompt("guess a number between 1 and 10");

    if(num == 0) {
        num++;
    }

    if(num == guess) {
        guessCount++;
        alert("Got it!");
        alert("Congratulations! You guessed the correct number, which was " + num + " and it took you " + guessCount + " guesses.");
        check = false;
    }
    else if(guess < num) {
        guessCount++;
        console.log("Higher!")
    }
    else if(guess > num) {
        guessCount++;
        console.log("Lower!")
    }
}
