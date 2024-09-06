let boxes = document.querySelectorAll(".Box");
let reset = document.querySelector(".resetbtn");
let newgamebtn = document.querySelector("#gamebtn");
let newmsg = document.querySelector("#msg");
let msgcont = document.querySelector(".msg-container");
let turnO = true;
let count = 0;
let winning = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
    [6,4,2],
];
const resetgame = () =>{
    trueO = true;
    count = 0;
    enablebtn();
    msgcont.classList.add("hide");
    
}
boxes.forEach((Box) => {
    Box.addEventListener("click", () => {
        // console.log("box was clicked");
        if(turnO){
            Box.style.color = "Black";
                Box.innerText = "O";
                
                turnO = false;
            }
            else{
                Box.innerText = "X";
                turnO = true;
            }
            Box.disabled = true;
            count++;
            let winner = checkwinner(); 
            if (count === 9 && !winner) {
                gameDraw();
              }
    });
});
const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgcont.classList.remove("hide");
    disablebtn();
  };

const disablebtn = () =>{
    for( let box of boxes){
        box.disabled = true;
    }
}
const enablebtn = () =>{
    for( let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
const showwinner = (winner) =>{
    newmsg.innerText = `Congratulations, Winner is ${winner}`;
    msgcont.classList.remove("hide");
    disablebtn();

}

const checkwinner = () => {
 for(let pattern of winning){
    let pos1value =  boxes[pattern[0]].innerText;
    let pos2value =  boxes[pattern[1]].innerText;
    let pos3value =  boxes[pattern[2]].innerText;
    if(
        pos1value != "" && pos2value != "" && pos3value != ""){
            if( pos1value === pos2value && pos2value === pos3value)
           {
              showwinner(pos1value);
            }
        }

 }
};
newgamebtn.addEventListener("click", resetgame);
reset.addEventListener("click", resetgame);