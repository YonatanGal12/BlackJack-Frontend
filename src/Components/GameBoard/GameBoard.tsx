import "./GameBoard.css"
import GameTable from "../GameTable/GameTable"
import Icon from "../Icon/Icon"
import GameButton from "../GameButton/GameButton"
import RestartButton from "../RestartButton/RestartButton"
import { useBlackjackGame } from "../../utils/useBlackjackGame"


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
      handleBetting,
      restartAll
    } = useBlackjackGame();

    return(
      <>
        <div className="restart-container">
          <RestartButton onClick={restartAll}></RestartButton>
        </div>
        <div className='items-container'>
            <div className="icon-container">
                <Icon remainingCards={remainingCards}/>
            </div>
            <GameTable dealerHand={dealerHand} dealerScore={dealerScore} playerHand={playerHand} playerScore={playerScore} phase={phase} totalMoney={totalMoney} message={message} goToBetting={goToBetting} resetMoney={resetMoney} handleBetting={handleBetting}/> 
            <div className="buttons-container">
                {phase === "playing" && <GameButton text="Hit" onClick={handleHit}></GameButton>}
                {phase === "playing" && <GameButton text="Stand" onClick={handleStand}></GameButton> }
                {(phase === "playing" && isFirstTurn && currentBet * 2 <= totalMoney + currentBet) && <GameButton text="Double" onClick={handleDouble}></GameButton> }
            </div>
            {phase === "playing" && <div className="money-stuff-container">
              {<div className="money-div">Current Bet: {currentBet}$</div>}
              {<div className="money-div">Total Money: {totalMoney}$</div>}
            </div>}
            {phase === "over" && <div className="money-stuff-container over-money-container">
              {<div className="money-div">Total Money: {totalMoney}$</div>}
            </div>}
        </div>
      </>
    )
}

export default GameBoard;