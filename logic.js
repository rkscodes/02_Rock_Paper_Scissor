function computerPlay() {
  let x = Math.floor(Math.random() * 3);
  if (x == 0) return "Rock";
  if (x == 1) return "Paper";
  if (x == 2) return "Scissor";
}

function play(userSelection, computerSelection) {
  userSelection = userSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  if (userSelection == "rock") {
    if (computerSelection == "paper") {
      return "You lose!, Paper beats Rock";
    } else {
      return "You win!, Rock beats Scissor";
    }
  } else if (userSelection == "paper") {
    if (computerSelection == "rock") return "You win! paper beats rock";
    else return "You lose!, scissor beats paper";
  } else if (userSelection == "scissor") {
    if (computerSelection == "paper") return "You win!, scissor beats rock";
    else return "You lose!, Rock beats Scissors";
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    let input = prompt("Rock,Paper,Scissor enter one");
    console.log(play(input, computerPlay()));
  }
}
game();