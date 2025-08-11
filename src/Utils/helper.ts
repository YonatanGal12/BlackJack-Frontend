export function getCardImage(rank: string, suit: string): string
{
    return `/images/${rank}_of_${suit}.png`;
}