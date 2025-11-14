import {useState} from "react";
import './LotteryGame.css';

export default function LotteryGame(){
    let[ticket,setTicket]=useState();
    let getNewTicket=()=>{
        let num=Math.floor(Math.random()*900)+100;
        setTicket(num);
        console.log(num);
    }
    let getSum=()=>{
        let temp=ticket;
        let sum=0;
        while(temp>0){
            let rem=temp%10;
            sum+=rem;
            temp=Math.floor(temp/10);
        }
        return sum;
    }
    return(
        <>
            <div className="lottery-container">
                <div className="lottery-card">
                    <h1 className="title">🎰 Lottery Game 🎰</h1>
                    <div className="target-section">
                        <h2 className="target">🎯 Target: 15</h2>
                    </div>
                    
                    <div className="ticket-section">
                        <h3 className="ticket-label">Your Ticket Number:</h3>
                        <div className="ticket-display">
                            {ticket || "???"}
                        </div>
                    </div>

                    <div className="result-section">
                        {ticket===undefined?
                            <p className="instruction">Click below to generate your lucky number!</p>
                            :getSum()===15?
                            <p className="win-message">🎉 Congratulations! You Won! 🎉</p>
                            :<p className="try-again">😔 Oops! Try Again</p>
                        }
                    </div>
                    
                    <button className="generate-btn" onClick={getNewTicket}>
                        🎲 Generate New Ticket
                    </button>
                </div>
            </div>
        </>
    )
}