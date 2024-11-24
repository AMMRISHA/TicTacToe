let resetbtn= document.getElementById("reset-btn");
let boxbtn  = document.querySelectorAll("#box");
let startBtn= document.querySelector("#newGame");
let msgContainer = document.querySelector(".msg-container");
let msg= document.querySelector("#msg");
let turn0=true;

const winnerPattern=[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [6,4,2]
];
let count =0;
boxbtn.forEach((box) => {

  box.addEventListener("click" ,() => {
    count++;
      if(turn0)
      {
        box.innerHTML="O";
        turn0=false;
        
      }else{
        box.innerHTML="X";
        turn0=true;
      }
      box.disabled=true;
      checkWinner(count);
    })
  
});


const showWinner=(pos1)=>{
  msg.innerHTML=`Congratulations! winner is ${pos1}`;
  msgContainer.classList.remove("hidden");
  enableBoxes();
}


const  showDrawn=()=>{
  msg.innerHTML=`Drawn`;
  count =0;
  msgContainer.classList.remove("hidden");
  enableBoxes();
}

const checkWinner=(count)=>{

  for(let pattern of winnerPattern)
  {
    let pos1= box[pattern[0]].innerText;
    let pos2= box[pattern[1]].innerText ;
    let pos3= box[pattern[2]].innerText;

    if(pos1 !="" && pos2!="" && pos3!="")
    {
      if(pos1 === pos2 && pos2 === pos3)
      {
        console.log("Winner" ,pos1);
        showWinner(pos1);
      }else if(count>=9)
      {
        showDrawn();
      }
    }

  }
};

//start button
startBtn.onclick=()=>{
  msgContainer.classList.add("hidden");
  console.log("starts");
}

//reset game
resetbtn.onclick=()=>{
  resetGame();
}



const resetGame=()=>{
  console.log("ResetGame call");
  msgContainer.classList.add("hidden");
  turn0 = true;
  enableBoxes();
}

//enable button
const enableBoxes =()=>{
  for(let box of boxbtn)
    {
      box.disabled = false;
      box.innerText="";
    }
    
}

//disable button
const disableBoxes=()=>{
  for(let box of boxbtn)
    {
      box.disabled = true;

    }
}