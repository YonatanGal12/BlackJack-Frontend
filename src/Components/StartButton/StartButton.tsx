import './StartButton.css'


interface StartButtonProps{
    text: string,
    onClick?: () => void
}

function StartButton({text, onClick}: StartButtonProps) {
    return(
        <div>
            <button className="start-btn" onClick={onClick}>{text}</button>
        </div>
    )
}

export default StartButton;