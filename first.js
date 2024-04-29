let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-btn");
let flag = true;
let newgameBtn = document.querySelector("#newGm");
let msgContainer = document.querySelector(".msg-container");
let winner = document.querySelector("#winner");

const winningPaterns= [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
]; 

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(flag==true){
            box.innerText = "X";
            flag = false;
        }
        else{
            box.innerText = "O";
            flag = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const checkWinner = () => {
    for(let pattern of winningPaterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText; 

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val == pos2Val  &&  pos1Val == pos3Val){
                showWinner(pos1Val);
            }
        }
    }
}

const showWinner = (player) => {
        winner.innerText = `Congratulatins, winner is ${player}`;
        msgContainer.classList.remove("hide");
        disabledboxes();
}

const disabledboxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}


// reset-game

const resetGame = () => {
    flag = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

newgameBtn.addEventListener("click",resetGame);
reset.onclick = () => {
    resetGame();
}