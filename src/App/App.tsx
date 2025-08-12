import { useEffect, useState } from 'react';
import './App.css';
import Button from '../Components/Button/Button';
import Card from '../Components/Card/Card';
import Table from '../Components/Table/Table';
import Score from '../Components/Score/Score';
import Icon from '../Components/Icon/Icon';

function App() {



    const [playerHand, setPlayerHand] = useState([]);
    const [playerScore, setPlayerScore] = useState(0);

    const [dealerHand, setDealerHand] = useState([]);
    const [dealerScore, setDealerScore] = useState(0);

    const [message, setMessage] = useState('');
    const [remainingCards, setRemainingCards] = useState(52);


    async function handleHit()
    {
      try
      {
        const res = await fetch('http://localhost:3001/game/hit');
        if(!res.ok)
        {
          setMessage('Hit unsucessful.');
          return;
        }

        const gameDetails = await res.json();
        setPlayerHand(gameDetails.playerHand);
        setPlayerScore(gameDetails.playerScore);
        setRemainingCards(gameDetails.remainingCards);
        setMessage(gameDetails.message);


        if (message.includes('Busted')) 
        {
          //Play again, imma do this later
        }
      }
      catch(error)
      {
        setMessage('Hit error: ' + (error instanceof Error ? error.message : 'Unknown error'));
      }
    }

    async function handleStand()
    {
      try
      {
        const res = await fetch('http://localhost:3001/game/stand');
        if(!res.ok)
        {
          setMessage('Stand unsucessful.');
          return;
        }

        const gameDetails = await res.json();

        setPlayerHand(gameDetails.playerHand);
        setPlayerScore(gameDetails.playerScore);
        setDealerHand(gameDetails.dealerHand);
        setDealerScore(gameDetails.dealerScore);
        setRemainingCards(gameDetails.remainingCards);
        setMessage(gameDetails.message);
      }
      catch(error)
      {
        setMessage('Stand error: ' + (error instanceof Error ? error.message : 'Unknown error'));
      }
    }

    async function handleStart() 
    {
      try 
      {
        const res = await fetch('http://localhost:3001/game/start');
        if (!res.ok) 
        {
          setMessage('Failed to start the game');
          return;
        }
        const data = await res.json();

        setPlayerHand(data.playerHand);
        setPlayerScore(data.playerScore);
        setRemainingCards(data.remainingCards);
        setMessage(data.message || 'Game started!');

      } 
      catch (error) 
      {
        setMessage('Error starting game: ' + (error instanceof Error ? error.message : 'Unknown error'));
      }
  }

    return(
      <>
        <Table> 
          <Button text='Start Game!' onClick={handleStart}></Button>
        </Table>
      </>
    );
}

export default App;