import "./GameBoard.css"
import GameTable from "../GameTable/GameTable"
import StartButton from "../StartButton/StartButton"
import Icon from "../Icon/Icon"
import GameButton from "../GameButton/GameButton"
import { useBlackjackGame } from "../../utils/useBlackjackGame"
import GameOverModal from "../GameOverModal/GameOverModal"
import { useEffect } from "react"

function GameBoard()
{
    const {
      playerHand,
      playerScore,
      dealerHand,
      dealerScore,
      message,
      isFirstTurn,
      phase,
      remainingCards,
      totalMoney,
      currentBet,
      handleStart,
      handleHit,
      handleStand,
      handleDouble,
      goToBetting,
      resetMoney,
      handleBetting
    } = useBlackjackGame();

    return(
      <>
        <div className='items-container'>
            <div className="icon-container">
                <Icon remainingCards={remainingCards}/>
            </div>
            <GameTable dealerHand={dealerHand} dealerScore={dealerScore} playerHand={playerHand} playerScore={playerScore} phase={phase} totalMoney={totalMoney} currentBet={currentBet} message={message} handleStart={handleStart} goToBetting={goToBetting} resetMoney={resetMoney} handleBetting={handleBetting}/> 
            <div className="buttons-container">
                {phase === "playing" && <GameButton text="Hit" onClick={handleHit}></GameButton>}
                {phase === "playing" && <GameButton text="Stand" onClick={handleStand}></GameButton> }
                {(phase === "playing" && isFirstTurn) && <GameButton text="Double" onClick={handleDouble}></GameButton> }
            </div>
            {phase === "playing" && <div className="money-stuff-container">
              {<div className="money-div">Current bet: {currentBet}$</div>}
              {<div className="money-div">Total money: {totalMoney}$</div>}
            </div>}
            {phase === "over" && <div className="money-stuff-container over-money-container">
              {<div className="money-div">Total money: {totalMoney}$</div>}
            </div>}
        </div>
      </>
    )
}

export default GameBoard;