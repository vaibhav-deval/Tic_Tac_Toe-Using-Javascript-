const buttons = document.querySelectorAll(".buttonsDiv button");
const msgContainer = document.querySelector(".msgContainer");
const msg = document.querySelector(".msg");
let turnO = true;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const showWinner = (position1) => {
  msg.innerHTML = `Congratulations, Winner is ${position1}`;
  msgContainer.classList.remove("hide");
  console.log("shwowinner");
};

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (turnO) {
      button.innerHTML = "O";
      button.disabled = true;
      turnO = false;
      winner();
    } else {
      button.innerHTML = "X";
      button.disabled = true;
      turnO = true;
      winner();
    }
  });
});

const winner = () => {
  let win = false;
  for (pattern of winPatterns) {
    let position1 = buttons[pattern[0]].innerHTML;
    let position2 = buttons[pattern[1]].innerHTML;
    let position3 = buttons[pattern[2]].innerHTML;
    if (
      position1 != "" &&
      position2 != "" &&
      position3 != "" &&
      position1 === position2 &&
      position2 === position3
    ) {
      showWinner(position1);
      win = true;
      return;
    }
  }
  if (!win) {
    const allButtons = [...buttons].every((button) => {
      return button.innerHTML !== "";
    });
    if (allButtons) {
      msgContainer.classList.remove("hide");
      msg.innerText = "Match Drawn";
    }
  }
};

const reset = () => {
  turnO = true;
  for (button of buttons) {
    button.disabled = false;
    button.innerHTML = "";
    msgContainer.classList.add("hide");
  }
};
