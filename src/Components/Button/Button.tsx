
type ButtonProps = {
    text: string
}

function Button({text}: ButtonProps) {
    return(
        <>
            <button className={text}>{text}</button>
        </>
    )
}

export default Button;