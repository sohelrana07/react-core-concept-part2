import { useState } from "react";

export default function Task2() {
  const [isHides, setIsHides] = useState("");

  const handleHides = () => {
    setIsHides(!isHides);
  };

  return (
    <div className="card">
      {isHides && <h3>Hello, React Learner!</h3>}
      <button onClick={handleHides} style={{ margin: "5px" }}>
        {isHides ? "Unhide" : "Hide"}
      </button>
    </div>
  );
}
