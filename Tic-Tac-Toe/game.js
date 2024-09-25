let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset_button");
let turn0 = true;
let msg = document.querySelector("#msg");
let msg_con = document.querySelector(".msg-container");
let newbtn = document.querySelector("#newbtn");
let container = document.querySelector(".container"); 

let winpatterens = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const disable = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enable = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = ""; 
  }
};

const showwinner = (winner) => {
  msg.innerText = `Congratulations, the winner is ${winner}`;
  msg_con.classList.remove("hide");
  container.classList.add("hide"); 
  disable();
};

const reset = () => {
  turn0 = true;
  enable();
  msg_con.classList.add("hide");
  container.classList.remove("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    if (box.innerText === "") {
      if (turn0) {
        e.target.textContent = "0";
        turn0 = false;
      } else {
        box.innerText = "X";
        turn0 = true;
      }
      checkwinner();
    }
  });
});

function checkwinner() {
  for (let pat of winpatterens) {
    let pos0 = boxes[pat[0]].innerText;
    let pos1 = boxes[pat[1]].innerText;
    let pos2 = boxes[pat[2]].innerText;

    if (pos0 !== "" && pos1 !== "" && pos2 !== "") {
      if (pos0 === pos1 && pos1 === pos2) {
        showwinner(pos0);
        break;
      }
    }
  }
}

resetbtn.addEventListener("click", reset);
newbtn.addEventListener("click", reset);
