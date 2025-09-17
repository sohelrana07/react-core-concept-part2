// import { useState } from "react";

import { useState } from "react";

// export default function Counter() {
//   const [count, setState] = useState(0);

//   const handleAdd = () => {
//     const newCount = count + 1;
//     setState(newCount);
//   };

//   const counterStyle = {
//     border: "2px solid yellow",
//   };
//   return (
//     <div style={counterStyle}>
//       <h3>Count: {count}</h3>
//       <button onClick={handleAdd}>Add</button>
//     </div>
//   );
// }

export default function Counter() {
  const [count, setState] = useState(0);

  const handleAdd = () => {
    const newCount = count + 1;
    setState(newCount);
  };

  const counterStyle = {
    border: "2px solid tomato",
    margin: '5px'
  };

  return (
    <div style={counterStyle}>
      <h3>Count: {count}</h3>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}
