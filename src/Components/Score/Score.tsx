import './Score.css'

interface ScoreProps{
    value: number | string
}


function Score({value}: ScoreProps)
{

    return(
        <>
            <div className="score-container">Score: {value}</div>
        </>
    )
}

export default Score;