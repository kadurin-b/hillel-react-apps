import React, { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  const onClickCounterPlus = () => {
    setCounter(counter + 1);

    
  };
  const onClickCounterMinus = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <button onClick={onClickCounterPlus} className="plus">
        +1 Button
      </button>
      <button onClick={onClickCounterMinus} className="minus">
        -1 Button
      </button>
      {counter}
      {counter}
    </div>
  );
}

export default Counter;
