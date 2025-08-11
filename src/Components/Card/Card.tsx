import "./Card.css";
import { getCardImage } from "../../Utils/helper";

interface CardProps{
    name: string,
    value: number
}

function Card({name, value}: CardProps) {
    return(
        <>
            <div className='card-container'>
                <img className='card-image' src={getCardImage("ace","clubs")} alt="King of hearts"></img>
            </div>
        </>
    )
}

export default Card;