import './StartButton.css'


interface StartButtonProps{
    onClick?: () => void
}

function StartButton({onClick}: StartButtonProps) {
    return(
        <div>
            <button className="start-btn" onClick={onClick}>Start Game</button>
        </div>
    )
}

export default StartButton;