import React, { useState } from "react";
import styled from "styled-components";

function CounterApp() {
  // ✅ useState inside the component
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-gray-200 inline-block p-4 rounded-xl space-y-2 shadow-md border">
        <h1 className="bg-gray-500 px-2 rounded-2xl pl-9"> {count} </h1>
        <div className="space-x-2">
          <button
            className="bg-red-500 w-6 px-2  rounded-2xl"
            onClick={() => {
              setCount((preCount) => preCount - 1);
            }}
          >
            -
          </button>
          <button
            className="bg-green-500 rounded-2xl px-2 "
            onClick={() => {
              setCount((preCount) => preCount + 1);
            }}
          >
            +{" "}
          </button>
        </div>
      </div>
    </>
  );
}

export default CounterApp;
