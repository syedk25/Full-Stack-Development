import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment,incrementByValue } from "./store/CounterSlice";

function Couter() 
{
  let count = useSelector((state) => state.count.value); // READ

  const dispatch=useDispatch(); // ACCESS()

  return (
    <div>
      <h1>Count {count}</h1>    {/* READ */}
      <button onClick={()=>{dispatch(increment())}}>+</button> {/*  ACCESS() */}
      <button onClick={()=>{dispatch(decrement())}}>-</button> {/*  ACCESS() */}

      <button onClick={()=>{dispatch(incrementByValue(5,1))}}>+5</button>
    </div>
  );
}

export default Couter;

 