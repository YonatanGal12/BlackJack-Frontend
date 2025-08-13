import './App.css';
import { useBlackjackGame } from "../utils/useBlackjackGame";
import Icon from '../Components/Icon/Icon';
import GameTable from '../Components/GameTable/GameTable';

function App() 
{
     const {
      playerHand,
      dealerHand,
      message,
      handleStart,
      handleHit,
      handleStand,
    } = useBlackjackGame();

    return(
      <>
        <div className='items-container'>
         <Icon/>
          <GameTable/>  
          <Icon/>
        </div>
      </>
    )

}

export default App;