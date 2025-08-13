import { ReactNode, useState } from 'react';
import './GameTable.css';
import Icon from '../Icon/Icon';
import { GameCard, rankToValue } from '../../utils/types';
import { getCardImage } from '../../utils/helper';
import Button from '../StartButton/StartButton';
import Card from '../Card/Card';
import CardRow from '../CardRow/CardRow';




function GameTable() {
    return(
        <>
            <img className='table-image' src="/images/blackJackTable.png" alt="" />
        </>
    )
}

export default GameTable;