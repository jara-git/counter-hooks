import React, { useState } from "react";
import './counter.css';

export default function Counter() {
  // Declares a new state variable, which we will call "count"
  // Declares a setCount function that allows you to modify the count value
  const[count, setCount] = useState(0);

  return (
    <div>
      <p>The counter is at : {count} </p>
      <button className='sum' onClick={() => setCount(count + 1)}> +1 </button>
      </button>
      <input className='input_num' placeholder='Set initial value' type='number' onChange={(event)=>setCount(Number(event.target.value))}></input>
      <button className='rest' onClick={() => setCount(count - 1)}> -1 </button>
      </button>
    </div>
  );
}
