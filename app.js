let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");
let newBtn = document.querySelector(".new");
let section = document.querySelector("section");

let turnX = true;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnX){
            box.innerText = "X";
            turnX = false;
        } else {
            box.innerText = "O";
            turnX = true;
        }
        box.disabled = true;
        checkWinner();
    })
});

let showWinner = (winner) => {
    msg.innerHTML = `Congratulations to the winner: ${winner}`;
    msgContainer.classList.remove("hide");
    section.classList.add("hide");
}

let resetgame = () => {
    turnX = true;
    enabledBox();
    msgContainer.classList.add("hide");
    section.classList.remove("hide");
}

let enabledBox = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const checkWinner = () => {
    for(let pattern of winPatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
            
                showWinner(pos1val);
            }
        }
    }
}

newBtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);
