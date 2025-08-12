import "./Card.css";
import { getCardImage } from "../../Utils/helper";
import { Rank, Suit } from "../../Utils/types";
interface CardProps{
    rank: Rank,
    suit: Suit,
    value: number
}

function Card({rank, suit, value}: CardProps) {
    return(
        <>
            <div className='card-container'>
                <img className='card-image' src={getCardImage(rank,suit)} alt="King of hearts"></img>
            </div>
        </>
    )
}

export default Card;