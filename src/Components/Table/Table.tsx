import { ReactNode } from 'react';
import './Table.css';
import Icon from '../Icon/Icon';
interface TableProps{
    children: ReactNode;
}

function Table({children}: TableProps)
{
    return(
        <>
            <div className="table-container">
                <img className="table-image" src={'/images/blackJackTable.png'} alt="Blackjack table" />
                <div className="table-overlay">{children}</div>
                <div className='dealer-icon-container'>
                    <Icon />
                </div>
                <div className='player-icon-container'>
                    <Icon />
                </div>
            </div>
        </>
    )
}

export default Table;