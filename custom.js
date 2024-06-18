let userScore = 0;
let computerScore = 0;
let userScorePara = document.querySelector("#your-score");
let computerScorePara = document.querySelector("#computer-score");
let choices = document.querySelectorAll(".img-box");

const msg = document.querySelector(".play-btn");

const draw = (userChoice, compChoi) => {
  msg.innerText = `It's draw, You ${userChoice} Computer ${compChoi}`;
  msg.style.backgroundColor = "blue";
};

const showWinner = (userWin, userChoice, compChoi) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `you win ${userChoice} beats ${compChoi}`;
    msg.style.backgroundColor = "green";
  } else {
    computerScore++;
    computerScorePara.innerText = computerScore;
    msg.innerText = `you Lose ${compChoi} beats ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};
const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const playgame = (userChoice) => {
  const compChoi = genCompChoice();
  if (userChoice == compChoi) {
    draw(userChoice, compChoi);
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissors, paper
      userWin = compChoi === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //scissors, paper
      userWin = compChoi === "scissors" ? false : true;
    } else {
      userWin = compChoi === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoi);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playgame(userChoice);
  });
});
