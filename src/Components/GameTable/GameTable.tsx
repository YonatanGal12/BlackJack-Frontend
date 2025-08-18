import { ReactNode, useState } from 'react';
import './GameTable.css';
import StartButton from '../StartButton/StartButton';
import CardRow from '../CardRow/CardRow';
import { useBlackjackGame } from '../../utils/useBlackjackGame';
import { GameCard } from '../../utils/types';
import Score from '../Score/Score';
import GameOverModal from '../GameOverModal/GameOverModal';
import { GamePhase} from '../../utils/types';

interface GameTableProps{
    dealerHand: GameCard[],
    dealerScore: number | string,
    playerHand: GameCard[],
    playerScore: number,
    phase: GamePhase,
    message: string,
    handleStart: () => void,
}
function GameTable({dealerHand, dealerScore, playerHand, playerScore, phase, message, handleStart}:  GameTableProps) {

    return(
        <>
            <div className="table-border">
                <div className="table-body">
                    {phase !== "idle" && (
                        <>
                            <Score value={dealerScore}></Score>
                            <CardRow cards={dealerHand} />
                            <CardRow cards={playerHand} />
                            <Score value={playerScore}></Score>
                        </>
                    )}
                    {phase === "over" && 
                        <GameOverModal message={message} handleStart={handleStart}/>
                    }
                    {phase === "idle" && (
                        <StartButton onClick={handleStart} />
                    )}
                </div>
            </div>
        </>
    )
}

export default GameTable;