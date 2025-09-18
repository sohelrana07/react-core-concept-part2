import { useState } from "react";

export default function Task1() {
  const [counts, setCounts] = useState(0);

  const handleIncrease = () => {
    const updatedIncrease = counts + 1;
    setCounts(updatedIncrease);
  };

  const handleDecrease = () => {
    if (counts > 0) {
      const updatedDecrease = counts - 1;
      setCounts(updatedDecrease);
    }
  };

  const handleReset = () => {
    setCounts(0);
  };

  return (
    <div>
      <h3>Counter: {counts}</h3>
      <button onClick={handleIncrease}>Increase</button>
      <button style={{ margin: "5px" }} onClick={handleDecrease}>
        Decrease
      </button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
