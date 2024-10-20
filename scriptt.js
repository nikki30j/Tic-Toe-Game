let btn1=document.querySelectorAll(".btn1");
let resbtn=document.querySelector("#resbtn");
let newg=document.querySelector("#newg");
let msgcontainer=document.querySelector(".msgcontainer");
let msg=document.querySelector("#msg");


let turn0=true;
const winerpattern=[
 [0,1,2],
 [0,3,6],
 [0,4,8],
 [1,4,7],
 [2,5,8],
 [2,4,6],
 [3,4,5],
 [6,7,8],


];
btn1.forEach((btn1)=>
{
    btn1.addEventListener("click",()=>{
console.log("button was clicked");
if(turn0)
    {
        btn1.innerText="0";
        turn0=false;
    }
    else
    {
        btn1.innerText="X";
        turn0=true;

    }
    btn1.disabled=true;
    checkwinner();
    
    });
});

const resetgame=()=>{
    turn0=true;
    enabledbutton();
    msgcontainer.classList.add("hide");

 };

  const disabledbutton=()=>{
  for(let i of btn1)
    {
        i.disabled=true;
    }

  };
  const enabledbutton=()=>{
    for(let i of btn1)
      {
          i.disabled=false;
          i.innerText="";
      }
  
    };


  const showwinner=(winner)=>{
  msg.innerText=`congrulation,Winner is ${winner}`;
  msgcontainer.classList.remove("hide");
  disabledbutton();

 };

 
const checkwinner=()=>{
   for(let i of winerpattern)
    {
        //console.log(btn1[i[0]],btn1[i[1]],btn1[i[2]]);
        let pos1val=btn1[i[0]].innerText;
        let pos2val=btn1[i[1]].innerText;
        let pos3val=btn1[i[2]].innerText;
        if(pos1val!="" && pos2val!="" && pos3val!="")
            {
                if(pos1val===pos2val && pos2val===pos3val)
                   {
                    console.log("winner",pos1val);
                      
                    showwinner(pos1val);
                   }
            }

    }

};

newg.addEventListener("click",resetgame);
resbtn.addEventListener("click",resetgame);


