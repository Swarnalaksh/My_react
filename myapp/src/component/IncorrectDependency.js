// import React, { useState, useEffect } from 'react';

// function IncorrectDependency() {
//   const [count, setCount] = useState(0);

//   // Incorrect dependency: setCount
//   useEffect(() => {
//     console.log('Effect ran');
//     // This effect uses setCount, but it doesn't need to be in the dependency array
//     // This can lead to unnecessary re-execution of the effect
//   }, [count, setCount]);

//   const increment = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={increment}>Increment</button>
//     </div>
//   );
// }

// export default IncorrectDependency;


// usecontext hook

// import React, { createContext, useContext } from 'react';
// // Step 1: Create a context
// const MyContext = createContext();
// // Step 2: Create a provider component
// const MyProvider = ({ children }) => {
//   const sharedValue = 'Hello from Context!';

//   return (
//     <MyContext.Provider value={sharedValue}>
//       {children}
//     </MyContext.Provider>
//   );
// };

// // Step 3: Use the context in a functional component using useContext
// const MyComponent = () => {
//   const contextValue = useContext(MyContext);

//   return <div>{contextValue}</div>;
// };

// // Step 4: Wrap your components with the provider
// const App = () => {
//   return (
//     <MyProvider>
//       <MyComponent />
//     </MyProvider>
//   );
// };

// export default App;


// userender

// import React, { useReducer } from 'react';

// // Step 1: Define a reducer function
// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return { count: state.count + 1 };
//     case 'DECREMENT':
//       return { count: state.count - 1 };
//     default:
//       return state;
//   }
// };

// // Step 2: Use useReducer in a functional component
// const Counter = () => {
//   // Initial state and dispatch function returned by useReducer
//   const [state, dispatch] = useReducer(reducer, { count: 0 });

//   return (
//     <div>
//       <p>Count: {state.count}</p>
//       <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
//       <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
//     </div>
//   );
// };

// export default Counter;


// usereducer(simple & )

// import React, { useReducer } from 'react';
// // Step 1: Define a reducer function
// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return { count: state.count + 1 };
//     case 'DECREMENT':
//       return { count: state.count - 1 };
//     case 'RESET':
//       return { count: 0 };
//     default:
//       return state;
//   }
// };
// // Step 2: Use useReducer in a functional component
// const Counter = () => {
//   // Initial state and dispatch function returned by useReducer
//   const [state, dispatch] = useReducer(reducer, { count: 0 });

//   return (
//     <div>
//       <p>Count: {state.count}</p>
//       <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
//       <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
//       <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
//     </div>
//   );
// };

// export default Counter;


// React Hooks useReducer (complex state & action) 

// import React, { useReducer } from 'react';

// // Step 1: Define a complex reducer function
// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return { ...state, count: state.count + 1 };
//     case 'DECREMENT':
//       return { ...state, count: state.count - 1 };
//     case 'SET_USER':
//       return { ...state, user: action.payload };
//     default:
//       return state;
//   }
// };

// // Step 2: Use useReducer in a functional component
// const ComplexCounter = () => {
//   // Initial complex state and dispatch function returned by useReducer
//   const [state, dispatch] = useReducer(reducer, { count: 0, user: null });

//   return (
//     <div>
//       <p>Count: {state.count}</p>
//       <p>User: {state.user ? state.user : 'No User'}</p>
//       <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
//       <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
//       <button onClick={() => dispatch({ type: 'SET_USER', payload: 'Swarna' })}>Set User</button>
//     </div>
//   );
// };

// export default ComplexCounter;


// React Hooks Multiple useReducers

// import React, { useReducer } from 'react';

// // Step 1: Define reducer functions for different slices of state
// const counterReducer = (state, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return { count: state.count + 1 };
//     case 'DECREMENT':
//       return { count: state.count - 1 };
//     default:
//       return state;
//   }
// };
// const userReducer = (state, action) => {
//   switch (action.type) {
//     case 'SET_USER':
//       return { user: action.payload };
//     default:
//       return state;
//   }
// };
// // Step 2: Use useReducer for different slices of state
// const MultiReducersExample = () => {
//   const [counterState, counterDispatch] = useReducer(counterReducer, { count: 0 });
//   const [userState, userDispatch] = useReducer(userReducer, { user: null });

//   return (
//     <div>
//       <p>Count: {counterState.count}</p>
//       <p>User: {userState.user ? userState.user : 'No User'}</p>
//       <button onClick={() => counterDispatch({ type: 'INCREMENT' })}>Increment</button>
//       <button onClick={() => counterDispatch({ type: 'DECREMENT' })}>Decrement</button>
//       <button onClick={() => userDispatch({ type: 'SET_USER', payload: 'Swar' })}>Set User</button>
//     </div>
//   );
// };

// export default MultiReducersExample;



// React Hooks useReducer with useContext
// import React, { createContext, useContext, useReducer } from 'react';
// // Step 1: Create a context
// const AppContext = createContext();
// // Step 2: Define a reducer function
// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return { count: state.count + 1 };
//     case 'DECREMENT':
//       return { count: state.count - 1 };
//     default:
//       return state;
//   }
// };
// // Step 3: Create a provider component with useReducer
// const AppProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, { count: 0 });

//   return (
//     <AppContext.Provider value={{ state, dispatch }}>
//       {children}
//     </AppContext.Provider>
//   );
// };

// // Step 4: Use useContext in components to access state and dispatch
// const CounterComponent = () => {
//   const { state, dispatch } = useContext(AppContext);

//   return (
//     <div>
//       <p>Count: {state.count}</p>
//       <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
//       <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <AppProvider>
//       <CounterComponent />
//     </AppProvider>
//   );
// };

// export default App;


// import React, { useEffect, useReducer } from 'react';

// // Step 1: Define reducer functions
// const initialState = {
//   data: null,
//   loading: true,
//   error: null,
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'FETCH_SUCCESS':
//       return {
//         data: action.payload,
//         loading: false,
//         error: null,
//       };
//     case 'FETCH_ERROR':
//       return {
//         data: null,
//         loading: false,
//         error: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// // Step 2: Create a component with useReducer for fetching data
// const DataFetchingComponent = () => {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://api.example.com/data');
//         const data = await response.json();
//         dispatch({ type: 'FETCH_SUCCESS', payload: data });
//       } catch (error) {
//         dispatch({ type: 'FETCH_ERROR', payload: error.message });
//       }
//     };

//     fetchData();
//   }, []); // Empty dependency array to run the effect only once on mount

//   return (
//     <div>
//       {state.loading && <p>Loading...</p>}
//       {state.error && <p>Error: {state.error}</p>}
//       {state.data && (
//         <div>
//           <h1>Data:</h1>
//           <pre>{JSON.stringify(state.data, null, 2)}</pre>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DataFetchingComponent;



