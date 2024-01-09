import React from 'react'
const Hello = () => {
// return(
//     <div className='dummyclass'>
//         <h1>This is React-JSX</h1>
//     </div>
//)
return React.createElement('div', { id:'Hii', className:'dummyclass'},
React.createElement('h1', null, 'This is Reactjs JSX'))
}
export default Hello 
