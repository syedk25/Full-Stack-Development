import React, { useState } from 'react';
import styled from 'styled-components';

let Button1 = styled.button`   //creating button
  background-color: green;
  color: white;
  width: 100px;
  height: 50px;   
`

let Button2 = styled(Button1)`
  box-shadow: 10px 10px 5px red;
  background-color: red;
`
const CounterApp = () => {
  // ✅ useState inside the component
  const [count, setCount] = useState(0);
   
  return (
    <div>
      <h1>Counter Application : {count} </h1>
      <Button1 onClick={()=>{setCount((preCount)=>preCount+1)}}>Increment</Button1>
      <Button2 onClick={()=>{setCount((preCount)=>preCount-1)}}>Decrement</Button2>
    </div>
  );
};

export default CounterApp;