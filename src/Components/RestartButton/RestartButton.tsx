import "./RestartButton.css";

interface RestartButtonProps{
    onClick: () => void
}

function RestartButton({onClick}: RestartButtonProps)
{
    return(
        <button className="restart-btn" onClick={onClick}>⟳</button>
    )
}

export default RestartButton;