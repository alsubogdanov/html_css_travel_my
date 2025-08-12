import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); // 0 — значение по умолчанию
  const myFun = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <p>Счётчик: {count}</p>
      <button onClick={myFun}>+1</button>
    </div>
  );
}

export default Counter;
