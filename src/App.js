import { useState } from "react";
import CardZone from "./components/CardZone";
import ScoreZone from "./components/ScoreZone";

const App =()=> {


  const [current_score, setCurrentScore] = useState(0);

  return ( 
    <div>
      <h1>Memory Card</h1>
      <ScoreZone current_score={current_score}></ScoreZone>
      <CardZone current_score={current_score} setCurrentScore={setCurrentScore}></CardZone>
    </div>
  );
}

export default App;
