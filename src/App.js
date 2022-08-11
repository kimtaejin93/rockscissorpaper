import { useState } from 'react';
import './App.css';
import Box from "./component/Box"


const choice={
  rock:{
    name:"rock",
    img:"https://search.pstatic.net/sunny/?src=https%3A%2F%2Fopenclipart.org%2Fimage%2F800px%2F170870&type=sc960_832"
    },
  scissor:{
    name:"scissor",
    img:"https://search.pstatic.net/sunny/?src=https%3A%2F%2Fcdn-icons-png.flaticon.com%2F512%2F129%2F129494.png&type=sc960_832"
  },
  paper:{
    name:"paper",
    img:"https://search.pstatic.net/sunny/?src=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Fvintage-scroll-paper-1553705.jpg&type=sc960_832"
  }
}



function App() {
  const [userSelect,setUserSelect]=useState(null);
  const [computerSelect,setComputerSelect]=useState(null);
  const [judgement,setJudgement]=useState("");
  const [computerJudgement,setComputerJudgement]=useState("");
  const random=()=>{
    let itemArray=Object.keys(choice);
    let randomItem=itemArray[Math.floor(Math.random()*3)];
    console.log("randomItem",randomItem);
    return choice[randomItem];
  }
  const computerJudge=(userJudge)=>{
    if(userJudge=="TIE"){return "TIE";}
    else if (userJudge=="WIN") return "LOSE";
    else return "WIN";
  }
  const judge=(user,computer)=>{
    
    if(user.name==computer.name){
      return "TIE";
    }else if(user.name=="rock")return computer.name=="scissor"?"WIN":"LOSE";
    else if(user.name=="scissor")return computer.name=="paper"?"WIN":"LOSE";
    else if(user.name=="paper")return computer.name=="rock"?"WIN":"LOSE";
    

  }
  const play=(select)=>{
    let userChoice=choice[select]
    setUserSelect(choice[select]);  
    let computerChoice=random();
    setComputerSelect(computerChoice);
    let userJudge=judge(userChoice,computerChoice)
    setJudgement(userJudge);
    let computerState=computerJudge(userJudge);
    setComputerJudgement(computerState);
    

    
  }
  return(
  <div>
    <div className="main">
      <Box title="YOU" choice={userSelect} judge={judgement}/>
      <Box title="COMPUTER" choice={computerSelect} judge={computerJudgement}/>
    </div>
    <div className="main">
      <button onClick={()=>{play("scissor")}}>가위</button>
      <button onClick={()=>{play("rock")}}>바위</button>
      <button onClick={()=>{play("paper")}}>보</button>
    </div>
  </div>
  );
}

export default App;
