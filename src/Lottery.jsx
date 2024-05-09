import { useState } from "react";
import './Lottery.css';




function Lottery(){
    let [ticket , setTicket] = useState([0, 0, 0]);
    let [isWin,setIsWin]=useState(false);
    
let rool=()=>{
  
    let n1=Math.floor(Math.random()*10);
    let n2=Math.floor(Math.random()*10);
    let n3=Math.floor(Math.random()*10);
    (n1==n2 &&  n2==n3 && n1==n3)?setIsWin(true):setIsWin(false);

    if(isWin){
        console.log("You Win Lottery!");
    }
    

    setTicket([n1,n2,n3]);
};

let win="You Win Lottery!";

    return(
        <div>
            <div>
                        <span className="win" style = {  (isWin)? { } : {display: "none"}}>{win}</span>
            </div>
         
            <div>
        <h1 className="head">Lottery</h1>
            </div>
       
        <div style={ isWin ? {width:"10rem", height:"5rem",  color:"rgb(255, 255, 122)", marginLeft:"8%"}:{}} className="ticketBox">
            <h3 className="ticketNum">{ticket[0]}</h3>
            <h3 className="ticketNum">{ticket[1]}</h3>
            <h3 className="ticketNum">{ticket[2]}</h3>
        </div> 
           <button className="spin" onClick={rool}>Spin</button>
        
    </div>

    );
}



export default Lottery;