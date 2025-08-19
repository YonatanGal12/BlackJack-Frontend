import "./BetWindow.css"
import { useState } from "react";

interface BetWindowProps{
    totalMoney: number,
    handleBetting: (amount: number) => void,
    resetMoney: () => void
}

function BetWindow({totalMoney, handleBetting, resetMoney}: BetWindowProps)
{
    const [bet, setBet] = useState(Math.floor(totalMoney / 2));

    return(
        <div className="bet-container">
            {totalMoney !== 0 && <span className="total-money">You have a total of: <span>{Math.floor(totalMoney)}</span>$.<br/> Please bet <span>1</span>$ - <span>{totalMoney}</span>$. <br/> You won't be able to double if your bet is above <span>{Math.floor(totalMoney/2)}</span>$</span>}
            {totalMoney !== 0 && <input id="bet-input" className="bet-input" type="number" value={bet} min={1} max={Math.floor(totalMoney)} onChange={(e) => setBet(parseInt(e.target.value))}/>}
            {totalMoney !== 0 && <button className="place-bet-btn" onClick={() => handleBetting(bet)}>Place bet</button>}

            {totalMoney === 0 && <span className="total-money">You have absolutely no money.</span>}
            {totalMoney === 0  && <button className="loser-btn" onClick={() => {setBet(50); resetMoney();}}>Loser! Reset money.</button>}
        </div>
    )
}

export default BetWindow;