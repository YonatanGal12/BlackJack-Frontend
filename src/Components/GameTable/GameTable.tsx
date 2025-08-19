import { ReactNode, useState } from 'react';
import './GameTable.css';
import StartButton from '../StartButton/StartButton';
import CardRow from '../CardRow/CardRow';
import { useBlackjackGame } from '../../utils/useBlackjackGame';
import { GameCard } from '../../utils/types';
import Score from '../Score/Score';
import GameOverModal from '../GameOverModal/GameOverModal';
import { GamePhase} from '../../utils/types';
import BetWindow from '../BetWindow/BetWindow';

interface GameTableProps{
    dealerHand: GameCard[],
    dealerScore: number | string,
    playerHand: GameCard[],
    playerScore: number,
    phase: GamePhase,
    totalMoney: number,
    currentBet: number,
    message: string,
    handleStart: () => void,
    goToBetting: () => void,
    resetMoney: () => void,
    handleBetting: (amount: number) => void
}
function GameTable({dealerHand, dealerScore, playerHand, playerScore, phase, totalMoney, currentBet, message, handleStart, goToBetting, resetMoney, handleBetting}:  GameTableProps) {

    return(
        <>
            <div className="table-border">
                <div className="table-body">
                    {(phase !== "idle" && phase !== "betting") && (
                        <>
                            <Score value={dealerScore}/>
                            <CardRow cards={dealerHand}/>
                            <CardRow cards={playerHand}/>
                            <Score value={playerScore}/>
                        </>
                    )}
                    {phase === "betting" && 
                        <BetWindow totalMoney={totalMoney} handleBetting={handleBetting} resetMoney={resetMoney}/>
                    }
                    {phase === "over" && 
                        <GameOverModal message={message} handleStart={goToBetting}/>
                    }
                    {phase === "idle" && (
                        <StartButton onClick={goToBetting}/>
                    )}
                </div>
            </div>
        </>
    )
}

export default GameTable;