import { useState, useEffect, useRef } from "react";
import { GameCard } from "./types";
import { GamePhase } from "./types";

export function useBlackjackGame() 
{
    const [playerHand, setPlayerHand] = useState<GameCard[]>(() => {
      const saved = localStorage.getItem("Game");
      return saved ? JSON.parse(saved).playerHand : [];
    });

    const [playerScore, setPlayerScore] = useState(() => {
      const saved = localStorage.getItem("Game");
      return saved ? JSON.parse(saved).playerScore : 0;
    });

    const [dealerHand, setDealerHand] = useState(() => {
      const saved = localStorage.getItem("Game");
      return saved ? JSON.parse(saved).dealerHand : [];
    });

    const [dealerScore, setDealerScore] = useState(() => {
      const saved = localStorage.getItem("Game");
      return saved ? JSON.parse(saved).dealerScore : "?";
    });

    const [message, setMessage] = useState(() => {
      const saved = localStorage.getItem("Game");
      return saved ? JSON.parse(saved).message : "";
    });

    const [remainingCards, setRemainingCards] = useState(() => {
      const saved = localStorage.getItem("Game");
      return saved ? JSON.parse(saved).remainingCards : 52;
    });

    const [isFirstTurn, setIsFirstTurn] = useState(() => {
      const saved = localStorage.getItem("Game");
      return saved ? JSON.parse(saved).isFirstTurn : true;
    });

    const [phase, setPhase] = useState<GamePhase>(() => {
      const saved = localStorage.getItem("Game");
      return saved ? JSON.parse(saved).phase : "idle";
    });

    const [totalMoney, setTotalMoney] = useState(() => {
      const saved = localStorage.getItem("Game");
      return saved ? JSON.parse(saved).totalMoney : 100;
    });

    const [currentBet, setCurrentBet] = useState(() => {
      const saved = localStorage.getItem("Game");
      return saved ? JSON.parse(saved).currentBet : 0;
    });


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

        setIsFirstTurn(false);
        const gameDetails = await res.json();
        console.log(gameDetails);

        setPlayerHand(gameDetails.playerHand);
        setDealerHand(gameDetails.dealerHand);
        setPlayerScore(gameDetails.playerScore);
        setRemainingCards(gameDetails.remainingCards);
        setMessage(gameDetails.message);

        if (gameDetails.message.includes("You Busted")) 
        {
          setPhase("over");
          setDealerScore(gameDetails.dealerScore);
          setTotalMoney(gameDetails.totalMoney);
          setCurrentBet(0);
        }
        else if(gameDetails.message.includes("You Win") || gameDetails.message.includes("You Lose"))
        {
          setPhase("over");
          setDealerScore(gameDetails.dealerScore);
          setTotalMoney(gameDetails.totalMoney);
          setCurrentBet(0);
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

        console.log(gameDetails);
        
        setPlayerHand(gameDetails.playerHand);
        setPlayerScore(gameDetails.playerScore);
        setDealerHand(gameDetails.dealerHand);
        setDealerScore(gameDetails.dealerScore);
        setRemainingCards(gameDetails.remainingCards);
        setMessage(gameDetails.message);
        setTotalMoney(gameDetails.totalMoney);
        setCurrentBet(0);
        setPhase("over");

      }
      catch(error)
      {
        setMessage('Stand error: ' + (error instanceof Error ? error.message : 'Unknown error'));
      }
    }

    function goToBetting()
    {
      setRemainingCards(52);
      setPhase("betting");
    }

    async function resetMoney()
    {
      const res = await fetch('http://localhost:3001/game/resetMoney', {
        method: "POST"
      });

      if(!res.ok)
      {
        setMessage("Failed to reset money.");
          return;
      }

      const moneyData = await res.json();
      setTotalMoney(moneyData.totalMoney);
      setCurrentBet(moneyData.currentBet);
    }

    async function handleBetting(amount: number)
    {
      try
      {
        const res = await fetch("http://localhost:3001/game/betting", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({amount}),
        });

        if(totalMoney === 0)
        {
          console.log("somehow here");
          setTotalMoney(100);
        }
        if(!res.ok)
        {
          console.log("ggg");
          setMessage("Bet failed.");
          return;
        }

        const betDetails = await res.json();
        setCurrentBet(betDetails.currentBet);
        setTotalMoney(betDetails.totalMoney);
        setPhase("playing");
        setMessage(betDetails.message);
        handleStart();
      }
      catch(error)
      {
        setMessage('Error starting game: ' + (error instanceof Error ? error.message : 'Unknown error'));
      }
    }

    async function handleStart() 
    {
      try 
      {
        const res = await fetch("http://localhost:3001/game/start");
        if (!res.ok) 
        {
          console.log("Failed to start the game")
          setMessage("Failed to start the game");
          return;
        }
        const gameDetails = await res.json();

        console.log(gameDetails);
        setPlayerHand(gameDetails.playerHand);
        setDealerHand(gameDetails.dealerHand);
        setDealerScore("?");
        setPlayerScore(gameDetails.playerScore);
        setRemainingCards(gameDetails.remainingCards);
        setMessage(gameDetails.message || 'Game started!');
        setIsFirstTurn(true);
        setPhase("playing");

        if(gameDetails.message.includes("Blackjack"))
        {
          setDealerScore(gameDetails.dealerScore);
          setTotalMoney(gameDetails.totalMoney);
          setCurrentBet(0);
          setPhase("over");
        }
      } 
      catch (error) 
      {
        setMessage('Error starting game: ' + (error instanceof Error ? error.message : 'Unknown error'));
      }
    }

    async function handleDouble() 
    {
      try 
      {
        const res = await fetch('http://localhost:3001/game/double');
        if (!res.ok) 
        {
          setMessage('Failed to double');
          return;
        }
        const gameDetails = await res.json();
        console.log(gameDetails.message)
        setPlayerHand(gameDetails.playerHand);
        setDealerHand(gameDetails.dealerHand);
        setPlayerScore(gameDetails.playerScore);
        setDealerScore(gameDetails.dealerScore);
        setRemainingCards(gameDetails.remainingCards);
        setMessage(gameDetails.message);
        setTotalMoney(gameDetails.totalMoney);
        setCurrentBet(0);
        setPhase("over");
        //setRemainingCards(52);
      }
      catch (error) 
      {
        setMessage('Error starting game: ' + (error instanceof Error ? error.message : 'Unknown error'));
      }
    }

    async function handleResume()
    {
      try
      {
        const saved = localStorage.getItem("Game");
        console.log(saved);

        if(!saved)
        {
          setMessage("No game to resume.");
          return;
        }

        const res = await fetch('http://localhost:3001/game/resume', {
          method: "POST",
          headers: { "Content-Type": "application/json"},
          body: saved
        });

        if (!res.ok) 
        {
          setMessage("Failed to resume game");
          return;
        }

        const gameDetails = await res.json();
        setMessage(gameDetails.message);
        setPlayerHand(gameDetails.playerHand);
        setPlayerScore(gameDetails.playerScore);
        setDealerScore(gameDetails.dealerScore);
        setDealerHand(gameDetails.dealerHand);
        setRemainingCards(gameDetails.remainingCards);
        setTotalMoney(gameDetails.totalMoney);
        setCurrentBet(gameDetails.currentBet);
        setPhase(gameDetails.phase);
      }
      catch(error)
      {
        setMessage('Error starting game: ' + (error instanceof Error ? error.message : 'Unknown error'));
      }
    }

    const didRun = useRef(false);

    useEffect(() => {
      if(!didRun.current)
      {
        didRun.current = true;
        handleResume();
      }
    }, [])

    useEffect(() => {
      const gameState = {
        playerHand,
        playerScore,
        dealerHand,
        dealerScore,
        message,
        remainingCards,
        isFirstTurn,
        phase,
        totalMoney,
        currentBet
      };
      localStorage.setItem("Game", JSON.stringify(gameState));
    }, [playerHand, playerScore, dealerHand, dealerScore, message, remainingCards, isFirstTurn, phase]);

    return {
        playerHand,
        playerScore,
        dealerHand,
        dealerScore,
        message,
        remainingCards,
        isFirstTurn,
        phase,
        totalMoney,
        currentBet,
        handleHit,
        handleStand,
        handleStart,
        handleDouble,
        goToBetting,
        resetMoney,
        handleBetting
    };
}