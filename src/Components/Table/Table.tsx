import { ReactNode, useState } from 'react';
import './Table.css';
import Icon from '../Icon/Icon';
import { GameCard, rankToValue } from '../../Utils/types';
import { getCardImage } from '../../Utils/helper';
import Button from '../Button/Button';
import Card from '../Card/Card';

interface TableProps{
    children: ReactNode;
}

function Table({children}: TableProps)
{

    const [playerCards, setPlayerCards] = useState<GameCard[]>([]);

    function addCard(card: GameCard)
    {
        setPlayerCards(previous => [...previous, card]);
    }

    return(
        <>
            <div className="table-container">
                <img className="table-image" src={'/images/blackJackTable.png'} alt="Blackjack table" />
                <div className="table-overlay">{children}</div>
                <div className='dealer-icon-container'>
                    <Icon />
                </div>
                <div className="player-cards">
                    {playerCards.map((card,index) => (
                        <Card rank={card.rank} suit={card.suit} value={rankToValue[card.rank]}></Card>
                    ))}
                </div>
                <div className='player-icon-container'>
                    <Icon />
                </div>
                <button onClick={() => addCard({ rank: "ace", suit: "spades" })}>Add Card</button>
            </div>
        </>
    )
}

export default Table;