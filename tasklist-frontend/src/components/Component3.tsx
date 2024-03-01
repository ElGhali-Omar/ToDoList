import { useState } from "react";
import { Component2 } from "./Component2";

export const Component3 = () => {
  const [count, setCount] = useState(0);
console.log("rendering component1");
  return (


    <div>
      <h1>Component1</h1>
      <p>This is the first component</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Count: {count}</p>
    </div>
  );
};
