import React, {useState} from "react";
import './style.css'

const App = () => {
    const [number,setNumber] = useState(0)
    return  <div>
      <h1>{number}</h1>
      <button onClick={()=>setNumber(number+1)} className="button">Add</button>
      <button onClick={()=>setNumber(number-1)} className="button">Less</button>
      <button onClick={()=>setNumber(9)} className="button">Reset</button>
      <br></br>
      <button onClick={()=>setNumber(number*2)} className="button">Double it</button>
      <br></br>
      <button onClick={()=>setNumber(number*100)} className="button">Jackpot</button>

    </div>
}

export default App;