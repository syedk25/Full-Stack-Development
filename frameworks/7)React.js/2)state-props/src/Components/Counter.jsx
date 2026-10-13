import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>You clicked {count} times</h1>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
      <button onClick={() => setCount(count - 1)}>Click Me</button>
    </div>
  );
}

export default Counter;