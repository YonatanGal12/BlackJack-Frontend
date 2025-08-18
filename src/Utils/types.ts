export type Suit = "spades" | "hearts" | "diamonds" | "clubs" | "hidden";

export type Rank = '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'jack' | 'queen' | 'king' | 'ace';

export type GameCard = {
    suit: Suit,
    rank: Rank,
};

export const rankToValue: Record<Rank, number> = {
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    '10': 10,
    'jack': 10,
    'queen': 10,
    'king': 10,
    'ace': 11
};

export type GamePhase = "idle" | "playing" | "over";


