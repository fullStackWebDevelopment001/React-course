import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addFunction, subFunction } from './action/action';

const App = () => {

  const counter = useSelector((store)=>store.counter);
  // you want to access the data from store

const dispatch = useDispatch(); // trigger a action in reducer function


const handleIncrement=()=>{
  // dispatch({type:"ADD",payload:1})
  dispatch(addFunction(1)) // it returns us this action object
}
const handleDecrement=()=>{
  // dispatch({type:"SUB",payload:1})
  dispatch(subFunction(1))
}

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={handleIncrement}>increment</button>
      <button onClick={handleDecrement}>decrement</button>
    </div>
  )
}

export default App