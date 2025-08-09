import './Score.css'

interface ScoreProps{
    value: number
}


function Score({value}: ScoreProps)
{

    return(
        <>
            <div className="score-container">{value}</div>
        </>
    )
}

export default Score;