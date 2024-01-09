import React, { useState } from 'react'

function HookcounterTwo() {
    const initialCount=0
    const [count, setCount]=useState(initialCount)

    const incrementThree=()=>{
        for(let i=0; i<3; i++){
            setCount(prevCount=>prevCount+1)
        }
    }

  return (
    <div>
      Count:{count}
      <button onClick={()=>setCount(initialCount)}>Reset</button>
      <button onClick={()=>setCount(prevCount=>prevCount+1)}>Increment</button>
      <button onClick={()=>setCount(prevCount=>prevCount-1)}>Decrement</button>
      <button onClick={incrementThree}>IncrementThree</button>
    </div>
  )
}

export default HookcounterTwo
