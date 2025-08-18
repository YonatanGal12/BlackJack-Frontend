import "./GameButton.css"

interface GameButtonProps{
    text: string,
    onClick: () => void
}
function GameButton({text, onClick}: GameButtonProps)
{
    return(
        <>
            <button className="game-button" onClick={onClick}>{text}</button>
        </>
    )
}

export default GameButton;