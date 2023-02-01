import { useState } from "react";

const ScoreZone = (props)=>{
    const [best_score, setBestScore] = useState(0);

    if(best_score < Number(props.current_score))
        setBestScore(Number(props.current_score));

    return (<div className="score-zone">
        <span>Current Score: {Number(props.current_score)}</span> 
        <span>Best Score: {best_score}</span>
        </div>);
}

export default ScoreZone;