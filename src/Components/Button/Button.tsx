import './Button.css'


interface ButtonProps{
    text: string,
    onClick?: () => void
}

function Button({text, onClick}: ButtonProps) {
    if(text.includes("Start"))
        return(
            <button className="start" onClick={onClick}>{text}</button>
        )
    return(
        <button className={text.toLocaleLowerCase()} onClick={onClick}>{text}</button>
    )
}

export default Button;