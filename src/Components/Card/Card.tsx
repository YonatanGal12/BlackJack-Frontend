import "./Card.css"

interface CardProps{
    name: string,
    value: number
}

function Card({name, value}: CardProps) {
    return(
        <>
            <div className='card-container'>
                <img className='card-image' src={'/images/king_of_hearts.png'} alt="King of hearts"></img>
            </div>
        </>
    )
}

export default Card;