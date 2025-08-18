import "./Card.css";
import { getCardImage } from "../../utils/helper";
import { Rank, Suit } from "../../utils/types";

interface CardProps{
    rank: Rank,
    suit: Suit
}

function Card({rank, suit}: CardProps) {
    return(
        <>
            <div className='card-container'>
                <img className='card-image' src={getCardImage(rank,suit)} alt="King of hearts"></img>
            </div>
        </>
    )
}

export default Card;