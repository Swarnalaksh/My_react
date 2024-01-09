// import React, { useState } from 'react'

// function Hookcounter() {

// const [count, setCount]=useState(0)
//   return (
//     <div>
//       <button onClick={()=>setCount(count + 1)}>Count {count}</button>
//     </div>
//   )
// }

// export default Hookcounter

import React, { useEffect, useState } from 'react'

function Hookcounter() {
  const [count, setCount]=useState(0)
  const [name, setName]=useState('')

  useEffect(()=>{
    console.log('useEffect - Updating document title');
    document.title= `You clicked ${count} times`
  })
  return (
    <div>
      <input type='text' value={name} onChange={e=>setName(e.target.value)} />
      <button onClick={()=>setCount(count + 1)}>Click {count} times</button>
    </div>
  )
}

export default Hookcounter

