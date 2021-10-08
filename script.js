const options = ["paper", "rock", "scissor"];

function computerPlay() {
  let random_pos = Math.floor(Math.random() * options.length);
  return options[random_pos];
}

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection == "rock" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "scissor") ||
    (playerSelection == "scissor" && computerSelection == "rock")
  ) {
    console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
    return "c";
  } else if (
    (playerSelection == "rock" && computerSelection == "scissor") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissor" && computerSelection == "paper")
  ) {
    console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
    return "p";
  } else {
    console.log("It's a Tie!");
    return "t";
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  let gameRounds = 5;

  while (gameRounds > 0) {
    let computerSelection = computerPlay();
    let playerSelection = null;
    do {
      playerSelection = prompt(
        'Please select ["paper","rock","scissor"]'
      ).toLowerCase();
    } while (!options.includes(playerSelection));

    let roundResult = playRound(playerSelection, computerSelection);
    if (roundResult == "c") {
      computerScore += 1;
    } else if (roundResult == "p") {
      playerScore += 1;
    }

    --gameRounds;
  }

  console.log("Game Over!!!");
  if (computerScore > playerScore) {
    console.log(`You Lost!`);
  } else {
    console.log(`You Win!`);
  }
  console.log(
    `Results:::   Your Score: ${playerScore}  computer Score: ${computerScore} `
  );
}

