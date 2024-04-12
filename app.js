const userName = prompt("Welcome to the game! What is your name?");
console.log(userName);

function play() {
  const secretNumber = Math.floor(Math.random() * 11);

  let guess = prompt(`Hey Please guess number between 0 and 10, ${userName}`);
  let numGuess = Number(guess);
  console.log(secretNumber);

  while (true) {
    debugger;
    if (guess === null) {
      alert(`You didn't enter right answer, ${userName}`);
    } else if (Number.isNaN(numGuess)) {
      alert(`Please enter the number, ${userName}`);
    } else if (numGuess < secretNumber) {
      alert(`That's too low!!`);
    } else if (numGuess > secretNumber) {
      alert(`That's too high!`);
    } else {
      alert(`You guesses it correct!`);
      break;
    }
  }
}

play();
