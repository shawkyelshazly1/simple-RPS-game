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

let gameBtn = document.querySelector(".startBtn");
let menuBtn = document.querySelector(".menuBtn");
let menuContainer = document.querySelector(".menuContainer");
let gameContainer = document.querySelector(".gameContainer");

let btns = [gameBtn, menuBtn];

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    menuContainer.classList.toggle("hidden");
    gameContainer.classList.toggle("hidden");
  });
});
