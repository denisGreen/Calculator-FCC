import React, {useReducer} from 'react';
import {reducer} from './Reducers/reducers.js'
import './App.css';

import Calculator from './Calculator.js'


const initialCountState = {count: 0};




function Counter({initialCount}) {
  const [state, dispatch] = useReducer(
    reducer,
    initialCountState,
  );
  const incrementHandler = () => dispatch({type: 'increment'})
  const incrementDecrement = () => dispatch({type: 'decrement'})
  return (
    <>
      Count: {state.count}
      <button
        onClick={() => dispatch({type: 'reset', payload: 2})}>
        Reset
      </button>
      <button onClick={incrementHandler}>+</button>
      <button onClick={incrementDecrement}>-</button>
    </>
  );
}

function App() {
 
  
  return (
    <div>
      <Calculator/>
      <Counter/>
    </div>
  );
}

export default App;
