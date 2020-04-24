import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { createStore} from "redux";
import allReducer from './reducers/index';
import {Provider} from 'react-redux';
const myStore = createStore(allReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(<Provider store={myStore}>
  <App />
  </Provider>
  , document.getElementById("root"));




//Store -> Holds all data. Master state
//Action -> Describes what is to be done.
//Reducer -> Describes how the action should transform the state
//Dispatch -> Send the action to the reducer and store gets updated
/* 
//Actions
const increment = () => ({type: "INCREMENT"});
const decrement = () => ({type: "DECREMENT"});

//Reducer
const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};
//Store

let store = createStore(counter);


store.subscribe(()=>console.log(store.getState()));

store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());


*/