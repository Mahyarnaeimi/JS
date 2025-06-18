let userScore = 0;
let computerScore = 0;
const maxScore = 5;

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * 3)];
}

function getResult(user, computer) {
  if (user === computer) return "tie";
  if (
    (user === 'rock' && computer === 'scissors') ||
    (user === 'scissors' && computer === 'paper') ||
    (user === 'paper' && computer === 'rock')
  ) {
    return "win";
  }
  return "lose";
}

function playGame(userChoice) {
  if (userScore >= maxScore || computerScore >= maxScore) return;

  const computerChoice = getComputerChoice();
  const outcome = getResult(userChoice, computerChoice);

  document.getElementById('user-choice').textContent = `You chose: ${emoji(userChoice)} ${capitalize(userChoice)}`;
  document.getElementById('computer-choice').textContent = `Computer chose: ${emoji(computerChoice)} ${capitalize(computerChoice)}`;

  if (outcome === "win") {
    userScore++;
    document.getElementById('outcome').textContent = "You win this round! 🎉";
  } else if (outcome === "lose") {
    computerScore++;
    document.getElementById('outcome').textContent = "You lose this round! 😢";
  } else {
    document.getElementById('outcome').textContent = "It's a tie! 🤝";
  }

  updateScores();

  if (userScore === maxScore || computerScore === maxScore) {
    declareFinalWinner();
  }
}

function updateScores() {
  document.getElementById('user-score').textContent = userScore;
  document.getElementById('computer-score').textContent = computerScore;
}

function declareFinalWinner() {
  const finalMessage = userScore === maxScore ? "🎊 You are the final winner!" : "💻 Computer wins the game!";
  document.getElementById('final-result').textContent = finalMessage;

  // Disable buttons
  document.querySelectorAll("button").forEach(btn => btn.disabled = true);
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function emoji(choice) {
  if (choice === 'rock') return '🗿';
  if (choice === 'paper') return '📰';
  if (choice === 'scissors') return '✂️';
}
