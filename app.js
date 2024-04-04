let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newgamebtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turn0=true;//playerx/playery

const resetgame=()=>{
    turn0=0;
    enableBoxes();
    msgcontainer.classList.add("hide");

}

const winPatterns=[ [0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8],
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turn0){
            box.innerHTML="O";
            turn0=0;
        }else{
            box.innerHTML="X";
            turn0=1;
        }
        box.disabled=true;

        checkWinner();
    });
});
const disableBoxes=()=>{
    for(box of boxes){
        box.disabled=true;
    }
}

const enableBoxes=()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerHTML="";
    }

}

const showWinner=(winner)=>{
    msg.innerHTML=`Congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();

};

const checkWinner=()=>{
for(let pattern of winPatterns){
   let pos1Val=boxes[pattern[0]].innerHTML;
   let pos2Val=boxes[pattern[1]].innerHTML;
   let pos3Val=boxes[pattern[2]].innerHTML;
if(pos1Val !="" && pos2Val !="" && pos3Val !=""){
    if (pos1Val==pos2Val && pos1Val==pos3Val){
        console.log("winner",pos1Val);

        showWinner(pos1Val);

    }
   }

  }
}

newgamebtn.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);