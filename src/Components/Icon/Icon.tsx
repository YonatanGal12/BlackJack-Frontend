import './Icon.css'

interface IconProps{
    remainingCards: number
}
function Icon({remainingCards}: IconProps)
{
    return(
        <>
            <div className='icon-container'>
                <span className="remaining-cards">{remainingCards}</span>
                <img className="icon-image" src={'/images/dealer_image.png'} alt="Dealer" />
            </div>
        </>
    )
}

export default Icon;