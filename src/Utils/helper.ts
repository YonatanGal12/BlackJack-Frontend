export function getCardImage(rank: string, suit: string): string
{
    if(suit === "hidden")
        return `/images/back.png`;
    return `/images/${rank}_of_${suit}.png`;
}