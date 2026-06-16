import React from 'react';

const buttonStyle = {
  width: '150px',
  height: '50px',
  backgroundColor: 'red',
  color: 'white',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
};

function CounterApp() {
  
  const [data, setData] = React.useState("success");  

  function displayComponent() {
    switch (data) {
      case "loading":
      return loadingComponent();
      case "error":
      return errorComponent();
      case "success":
      return successComponent();
    }
  }


  const [count, setCount] = React.useState(0);

  let remainingClicks = 10 - count;

  const increase = () => {
    setCount(count + 1);
  };

  if (count > 10) {
    <>
      <p>you clicked {count} times</p>
      <p>Remaining clicks: {remainingClicks}</p>
    </> 
  }

  return (
    <div>
      <h1>Click to Unlock Rewards 🎉</h1>
      <h1>Count: {count}</h1>
      <button style={buttonStyle} onClick={increase}>Click</button>

      {/* using ternary operator to conditionally render the message based on the count value */}
      {count >= 10 ? (<p>You have unlocked a reward! 🎁</p>) : (<p>Keep clicking to unlock rewards!</p>)}

      {/* using logical AND operator to conditionally render the message only when count is greater than or equal to 10 */}
      {count >= 10 && <p>You have unlocked a reward! 🎁</p>}

      {/* using switch statement to conditionally render different components based on the value of data */}
      {displayComponent()}


    </div>
  );
}

export default CounterApp;

function loadingComponent() {
  return (
    <div>
      <h1>Loading...⏳</h1>
    </div>
  );
}

function errorComponent() {
  return (
    <div>
      <h1>Error occurred!❌</h1>
    </div>
  );
}
function successComponent() {
  return (
    <div>
      <h1>Data loaded successfully!✅</h1>
    </div>
  );
}