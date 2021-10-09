const options = ["paper", "rock", "scissor"];

// Init vars & elements
let resultP = document.querySelector(".result");
let playerScore = 0;
let computerScore = 0;
let playerScoreText = document.querySelector(".pScore");
let computerScoreText = document.querySelector(".cScore");

// Selection random computer moves
function computerPlay() {
  let random_pos = Math.floor(Math.random() * options.length);
  return options[random_pos];
}

// Init containers to track selections
let playerMovesContainer = document.querySelector(".pMoves");
let computerMovesContainer = document.querySelector(".cMoves");

// Tracking moves and showing them side by side on the screen
// by creating new span on each container
function trackMoves(playerMove, computerMove) {
  let pSpan = document.createElement("span");
  let cSpan = document.createElement("span");
  pText = playerMove.charAt(0).toUpperCase();
  pText += playerMove.slice(1);
  cText = computerMove.charAt(0).toUpperCase();
  cText += computerMove.slice(1);
  pSpan.textContent = pText;
  cSpan.textContent = cText;
  playerMovesContainer.appendChild(pSpan);
  computerMovesContainer.appendChild(cSpan);
}

// Playing round based on player selection and random computer move
function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection == "rock" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "scissor") ||
    (playerSelection == "scissor" && computerSelection == "rock")
  ) {
    resultP.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
    trackMoves(playerSelection, computerSelection);
    increaseScore("c");
  } else if (
    (playerSelection == "rock" && computerSelection == "scissor") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissor" && computerSelection == "paper")
  ) {
    resultP.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
    trackMoves(playerSelection, computerSelection);
    increaseScore("p");
  } else {
    resultP.textContent = "It's a Tie!";
    trackMoves(playerSelection, computerSelection);
    return "t";
  }
}

// Increasing score for the winner and showing on the screen
function increaseScore(winner) {
  if (winner == "p") {
    playerScore += 1;
    playerScoreText.textContent = playerScore;
  } else if (winner == "c") {
    computerScore += 1;
    computerScoreText.textContent = computerScore;
  }
}

let gameBtn = document.querySelector(".startBtn");
let menuBtn = document.querySelector(".menuBtn");
let menuContainer = document.querySelector(".menuContainer");
let gameContainer = document.querySelector(".gameContainer");

// Reseting game once any player reaches 5
function resetGame() {
  playerScore = 0;
  computerScore = 0;
  playerScoreText.textContent = playerScore;
  computerScoreText.textContent = computerScore;
  computerMovesContainer.textContent = "";
  playerMovesContainer.textContent = "";
}

// Game button event to start the game,
// [ hide Main Menu & show Game Screen]
gameBtn.addEventListener("click", () => {
  menuContainer.classList.toggle("hidden");
  gameContainer.classList.toggle("hidden");
  resetGame();
});

let winnerBanner = document.querySelector(".winnerBanner");

// Getting player selection based on image clicked using classes
// then generating random computer move & playing round
let selections = document.querySelectorAll(".selection");
selections.forEach((selection) => {
  selection.addEventListener("click", (e) => {
    let compMove = computerPlay();
    switch (e.target.classList[0]) {
      case "rock_selection":
        playRound("rock", compMove);
        break;
      case "paper_selection":
        playRound("paper", compMove);
        break;
      case "scissors_selection":
        playRound("scissor", compMove);
        break;
    }
    if (playerScore == 5 || computerScore == 5) {
      // moving to Game Over screen once one reaches score of 5
      showWinnerScreen();
    }
  });
});

let winnerScreenContainer = document.querySelector(".winnerScreen");

// Loading the Game Over screen with text and image based on the winner
function showWinnerScreen() {
  gameContainer.classList.toggle("hidden");
  winnerScreenContainer.classList.toggle("hidden");
  if (playerScore == 5) {
    winnerBanner.textContent = "Congrats, You Won!";
    let image = document.querySelector(".final_image");
    image.setAttribute("src", "/images/celebrate.png");
  } else {
    winnerBanner.textContent = "I Think You Should Try Again!";
    let image = document.querySelector(".final_image");
    image.setAttribute("src", "/images/game_over.png");
  }
}

// Menu Button to go back to main menu
menuBtn.addEventListener("click", () => {
  winnerScreenContainer.classList.toggle("hidden");
  menuContainer.classList.toggle("hidden");
});
