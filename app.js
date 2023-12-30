let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const genCompChoice = () => {
    // rock, paper, scissors
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
  console.log("game was draw.");
}

const playGame = (userChoice) => {
  console.log("user choice = ", userChoice);
  // Generate computer choice
  const compChoice = genCompChoice();
  console.log("comp choice = ", compChoice);

  if(userChoice === compChoice) {
    // Draw Game
    drawGame();
  } else {
    let userWin = true; 
  }
}

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  })
})