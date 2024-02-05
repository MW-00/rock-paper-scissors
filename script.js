// ["ROCK", "PAPER", "SCISSORS"];
// 20.04.2023
const rpsLinks = [
    "paws/ROCK.png",
    "paws/PAPER.png",
    "paws/SCISSORS.png"
  ];
  
  const randomButton = document.getElementById("playButton");
  const rockButton = document.getElementById("choiceRock");
  const paperButton = document.getElementById("choicePaper");
  const scissorsButton = document.getElementById("choiceScissors");
  const resultButton = document.getElementById("resultButton");
  const resetButton = document.getElementById("resetButton");
  
  randomButton.addEventListener("click", playRandom);
  rockButton.addEventListener("click", playRock);
  paperButton.addEventListener("click", playPaper);
  scissorsButton.addEventListener("click", playScissors);
  resetButton.addEventListener("click", resetScore);
  
  function getRandom() {
    return Math.floor(Math.random() * 3);
  }
  
  function playRock() {
    const outcome = [0, getRandom()];
    document.getElementById("player1cat").src = rpsLinks[outcome[0]];
    document.getElementById("player2cat").src = rpsLinks[outcome[1]];
    winner(outcome);
  }
  
  function playPaper() {
    const outcome = [1, getRandom()];
    document.getElementById("player1cat").src = rpsLinks[outcome[0]];
    document.getElementById("player2cat").src = rpsLinks[outcome[1]];
    winner(outcome);
  }
  
  function playScissors() {
    const outcome = [2, getRandom()];
    document.getElementById("player1cat").src = rpsLinks[outcome[0]];
    document.getElementById("player2cat").src = rpsLinks[outcome[1]];
    winner(outcome);
  }
  
  function playRandom() {
    const outcome = [getRandom(), getRandom()];
    document.getElementById("player1cat").src = rpsLinks[outcome[0]];
    document.getElementById("player2cat").src = rpsLinks[outcome[1]];
    winner(outcome);
  }
  
  // wyniki
  let scoreText = document.getElementById("score");
  let p1Score = 0;
  let p2Score = 0;
  
  function winner(outcome) {
    if (outcome[0] == outcome[1]) {
      resultButton.textContent = "IT'S A DRAW!";
    } else if (
      (outcome[0] == 0 && outcome[1] == 2) ||
      (outcome[0] == 1 && outcome[1] == 0) ||
      (outcome[0] == 2 && outcome[1] == 1)
    ) {
      resultButton.textContent = "YOU WIN!";
      p1Score++;
      scoreUpdate();
    } else {
      resultButton.textContent = "YOU LOSE!";
      p2Score++;
      scoreUpdate();
    }
  }
  
  function scoreUpdate() {
    scoreText.textContent = p1Score + " : " + p2Score;
  }
  
  function resetScore() {
    p1Score = 0;
    p2Score = 0;
    scoreUpdate();
  }
  