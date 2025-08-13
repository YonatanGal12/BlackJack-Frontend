import "./CardRow.css"
import { GameCard, rankToValue } from "../../utils/types";
import Card from "../Card/Card";


interface CardRowProps 
{
  cards: GameCard[];
}

function CardRow({cards}: CardRowProps)
{
    return(
        <div className="card-row">
            {cards.map((card, index) => (
                <Card
                    key={index}
                    rank={card.rank}
                    suit={card.suit}
                />
            ))}
        </div>
    );
}

export default CardRow;

