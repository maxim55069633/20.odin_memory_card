import { useState } from "react";

const ScoreZone = (props)=>{

    const RestartGame = ()=>{
        props.setGameOn(false);
        props.setCurrentScore(0);
    }

    if(props.best_score < Number(props.current_score)){
        props.setBestScore(Number(props.current_score));
    }

    return (<div className="score-zone">
        <button onClick={RestartGame}>Restart</button>
        <span>Current Score: {Number(props.current_score)}</span> 
        <span>Best Score: {Number(props.best_score)}</span>
        </div>);
}

export default ScoreZone;