import { useState } from "react";
import CardZone from "./components/CardZone";
import ScoreZone from "./components/ScoreZone";

const App =()=> {

  const [current_score, setCurrentScore] = useState(0);
  const [best_score, setBestScore] = useState(0);
  const [gameOn, setGameOn] = useState(false);

  return ( 
    <div>
      <h1>Memory Card</h1>
      {gameOn
      ?
      <div><ScoreZone 
      current_score={current_score} 
      setCurrentScore={setCurrentScore} 
      setGameOn={setGameOn}
      best_score={best_score}
      setBestScore={setBestScore}>
      </ScoreZone>
      <CardZone current_score={current_score} setCurrentScore={setCurrentScore}></CardZone></div>
      :
      <div className="description">
        <p>The default order of animals is: 1.rat, 2.ox, 3.tiger, 4.rabbit, 5.dragon, 6.snake, 7.horse, 8.goat, 9.monkey, 10.rooster, 11.dog, 12.pig. Every time you click on an animal card, the order of animals changes. Can you pick up the right card per round in default order?</p>
        <button onClick={()=>{setGameOn(true)}}>Get Game On</button>
      </div>
    }

    </div>
  );
}

export default App;
