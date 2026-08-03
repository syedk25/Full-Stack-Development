import { useState } from 'react';

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  function sayHello(name="Hello Syed!") {
    alert(name);
  }
  return (
    <>

      {/*no argument => only reference  */}
      <button style={{ marginTop: '29vh', color: 'green' }} onClick={handleClick}>Clicked {count} times</button>

      {/* if you not specify arrow function that call automatically when load 
      and not work when you click*/}
      {/* <button onClick={sayHello('without ()=>{} arrow function automatically called when the component change')}>{"!()=>"}</button>
 */}
 
      {/* if argument => specify arrow function*/}
      <button onClick={() => sayHello()}>say Hello</button>

    </>
  )
}

export { MyButton };