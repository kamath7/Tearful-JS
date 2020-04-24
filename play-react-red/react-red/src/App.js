import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from './actions/index';
import {logger} from './actions/logger';
import './App.css';

function App() {
  const counter = useSelector(state=> state.counter);
  const isLogged = useSelector(state=> state.isLogged)
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h3> Counter: {counter}</h3>
      <button onClick={()=>{dispatch(increment(5))}}>+</button>
      <button onClick={()=>{dispatch(decrement())}}>-</button>
    <h3>Is the user Logged? {isLogged? (<h1>User Logged LMAO</h1>):<h3>Not Logged</h3>}</h3>
    <button onClick={()=>{dispatch(logger())}}>Toggle Log In</button>
    </div>
  );
}

export default App;
