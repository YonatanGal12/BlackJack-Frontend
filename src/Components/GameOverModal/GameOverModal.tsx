import "./GameOverModal.css";
import StartButton from "../StartButton/StartButton";

interface GameOvelModalProps{
    message: string,
    handleStart: () => void
}

function GameOverModal({message, handleStart}: GameOvelModalProps)
{
    return(
        <div className="message-container">
            {message}
            <button onClick={handleStart}>Play again</button>
        </div>
    )
}

export default GameOverModal;