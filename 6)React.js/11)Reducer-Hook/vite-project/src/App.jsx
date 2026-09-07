import { useState, useReducer } from 'react'
import './App.css'
import Form from './Form'


function App() {

  
  let COUNTER_ACTION = {
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT',
    RESET: 'RESET'
  }

  function reducer(state, action) {
     console.log(state, action)
    switch (action.type) {
      case COUNTER_ACTION.INCREMENT:
        return { ...state, count: state.count + 1 }
      case COUNTER_ACTION.DECREMENT:
        return { ...state, count: state.count - 1 }
      case COUNTER_ACTION.RESET:
        return { ...state, count: 0 }
      default:
        throw new Error()
    }
  }

  const [state, dispatch] = useReducer(reducer, { count: 0 })

  return (
    <>
    <Form />
      <section id="center">

        <h1>Use Reducer Hook</h1>

        <span className="counter">{state.count}</span>

        <button className="counter" onClick={() => dispatch({ type: COUNTER_ACTION.INCREMENT })}>Increment</button>
        <button className="counter" onClick={() => dispatch({ type: COUNTER_ACTION.DECREMENT })}>Decrement</button>
        <button className="counter" onClick={() => dispatch({ type: COUNTER_ACTION.RESET })}>Reset</button>

      </section>
    </>
  ) 
}

export default App
