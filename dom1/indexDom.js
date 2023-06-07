// Cделать три кнопки click me, при загрузке страницы каждой кнопке должна назначаться "бомба" (при клике на кнопку она меняет свою надпись на BOOM!). В любой момент времени может быть только одна кнопка с бомбой. При повторном клике на кнопку она не должна менять свою надпись. При каждой перезагрузке страницы кнопка с бомбой должна переназначаться.
function setBomb() {
  var buttons = Array.from(document.getElementsByClassName("button"));
  var bombIndex = Math.floor(Math.random() * buttons.length);
  
  buttons.forEach(function(button, index) {
    button.innerHTML = "Click Me";
    button.classList.remove("bomb");
    
    if (index === bombIndex) {
      button.addEventListener("click", function() {
        this.innerHTML = "BOOM!";
      });
      button.classList.add("bomb");
    }
  });
}

window.addEventListener("load", setBomb);
// window.addEventListener("load", setBomb);
// Напишите игру "камень, ножницы, бумага". Должно быть три кнопки для выбора игрока ("камень", "ножницы", "бумага"). При клике игрока на любую из кнопок, под кнопками выводится сообщение "компьютер выбрал: ${computerChoise}", где computerChoise - это рандомный выбор компьютера (выбор рандомим с помощью Math.round(Math.random() * 2)). В этой игре также необходимо выводить результат текущего раунда (кто выиграл).


function play(playerChoice) {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  document.getElementById("computer-choice").textContent =
    "Computer chose: " + computerChoice;

  const result = getResult(playerChoice, computerChoice);
  document.getElementById("round-result").textContent = result;
}

function getResult(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "Draw  !!!";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    return "You won!";
  } else {
    return "Computer won!";
  }
}
