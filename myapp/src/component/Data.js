// import React, {Component} from "react"
// class Data extends Component {
// render(){
//     const {name,names}=this.props
//     return(<h1>Hello {this.props.name} {this.props.names}</h1>)
// }
// }
// export default Data




// callback

// import React, { useState, useCallback } from 'react';

// const Counter = () => {
//   const [count, setCount] = useState(0);

//   // Using useCallback to memoize the increment function
//   const increment = useCallback(() => {
//     setCount(count + 1);
//   }, [count]);

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={increment}>Increment</button>
//     </div>
//   );
// };

// export default Counter


// useMemo Hook

// import React, { useState, useMemo } from 'react';

// const ExpensiveComponent = () => {
//   const [countA, setCountA] = useState(0);
//   const [countB, setCountB] = useState(0);
// const expensiveValue = useMemo(() => {
//     // Simulating a costly calculation
//     console.log('Calculating expensiveValue');
//     return countA * countB;
//   }, [countA, countB]);

//   return (
//     <div>
//       <p>Count A: {countA}</p>
//       <p>Count B: {countB}</p>
//       <p>Expensive Value: {expensiveValue}</p>
//       <button onClick={() => setCountA(countA + 1)}>Increment A</button>
//       <button onClick={() => setCountB(countB + 1)}>Increment B</button>
//     </div>
//   );
// };
// export default ExpensiveComponent


// useRef Hook
// import React, { useRef, useEffect } from 'react';
// function MyComponent() {
//   const myRef = useRef(null);
//  useEffect(() => {
//     if (myRef.current) {
//       myRef.current.focus();
//     }
//   }, []);
//  return <input ref={myRef} />;
// }
// export default MyComponent


// Custom Hooks

// import { useState, useEffect } from 'react';

// function useFetch(url) {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(url);
//         const result = await response.json();
//         setData(result);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [url]);

//   return { data, loading };
// }
// // Usage in a component
// function MyComponent() {
//   const { data, loading } = useFetch('https://api.example.com/data');

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   return <div>{data && <p>Data: {data}</p>}</div>;
// }
// export default MyComponent

// custom hook
// import { useState ,useEffect } from 'react';

// const useDocumentTitle = (count) => {
//   useEffect(() => {
//     document.title = `Count: ${count}`;
//   }, [count]);
// };

// // Example usage in a component
// const MyComponent = () => {
//   const [count, setCount] = useState(0);

//   useDocumentTitle(count);

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount((prevCount) => prevCount + 1)}>
//         Increment Count
//       </button>
//     </div>
//   );
// };

// export default MyComponent

// custom hook usecount
// import { useState } from 'react';

// const useCounter = (initialValue = 0) => {
//   const [count, setCount] = useState(initialValue);
//     const increment = () => {
//     setCount(count + 1);
//   };
//   const decrement = () => {
//     setCount(count - 1);
//   };
//   const reset = () => {
//     setCount(initialValue);
//   };

//   return { count, increment, decrement, reset };
// };
// const MyComponent = () => {
//   const { count, increment, decrement, reset } = useCounter(0);

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   );
// };
// export default MyComponent

// 

import { useState } from 'react';

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const reset = () => {
    setValue(initialValue);
  };

  return { value, onChange: handleChange, reset };
};

// Example usage in a component
const MyForm = () => {
  const firstNameInput = useInput('');
  const lastNameInput = useInput('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Access the input values using firstNameInput.value and lastNameInput.value
    console.log('Submitted:', firstNameInput.value, lastNameInput.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input type="text" {...firstNameInput} />
      </label>
      <br />
      <label>
        Last Name:
        <input type="text" {...lastNameInput} />
      </label>
      <br />
      <button type="submit">Submit</button>
      <button type="button" onClick={() => firstNameInput.reset()}>Reset First Name</button>
      <button type="button" onClick={() => lastNameInput.reset()}>Reset Last Name</button>
    </form>
  );
};
export default MyForm


