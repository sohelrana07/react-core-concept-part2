import { useState } from "react";

// export default function Batsman() {
//   const [runs, setRuns] = useState(0);
//   const [sixes, setSixes] = useState(0);

//   const handleSingle = () => {
//     const updatedRuns = runs + 1;
//     setRuns(updatedRuns);
//   };

//   const handleSix = () => {
//     const updatedRuns = runs + 6;
//     const updatedSixes = sixes + 1;
//     setSixes(updatedSixes);
//     setRuns(updatedRuns);
//   };

//   return (
//     <div>
//       <h3>Player: Bangla Batsman</h3>
//       <p>
//         <small>Six: {sixes}</small>
//       </p>
//       {runs >= 50 && <p>You score: {runs}</p>}
//       <h1>Score: {runs}</h1>
//       <button onClick={handleSingle}>singles</button>
//       <button style={{ margin: "2px" }} onClick={handleSix}>
//         Six
//       </button>
//     </div>
//   );
// }

export default function Batsman() {
  const [runs, setRuns] = useState(0);
  const [singles, setSingles] = useState(0);
  const [fours, setFours] = useState(0);
  const [sixes, setSixes] = useState(0);

  const handleSingle = () => {
    const updatedRuns = runs + 1;
    const updateSingles = singles + 1;
    setSingles(updateSingles);
    setRuns(updatedRuns);
  };

  const handleFour = () => {
    const updatedRuns = runs + 4;
    const countFour = fours + 1;
    setFours(countFour);
    setRuns(updatedRuns);
  };

  const handleSixes = () => {
    const updatedRuns = runs + 6;
    const countSixes = sixes + 1;
    setSixes(countSixes);
    setRuns(updatedRuns);
  };

  return (
    <div>
      <h3>Bangladeshi Player</h3>
      <h1>Run Score: {runs}</h1>
      {runs >= 50 && <p>Half Century</p>}
      {runs >= 100 && <p>Century</p>}
      <div
        style={{
          display: "flex",
          gap: "30px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h3>Single: {singles}</h3>
        <h3>Four: {fours}</h3>
        <h3>Six: {sixes}</h3>
      </div>
      <button onClick={handleSingle}>Single</button>
      <button style={{ margin: "5px" }} onClick={handleFour}>
        Four
      </button>
      <button onClick={handleSixes}>Six</button>
    </div>
  );
}

// export default function Batsman() {
//   const [runs, setRuns] = useState(0);
//   const [singles, setSingles] = useState(0);
//   const [fours, setFours] = useState(0);
//   const [sixes, setSixes] = useState(0);

//   const handleSingle = () => {
//     const updatedRuns = runs + 1;
//     const updateSingles = singles + 1;
//     setSingles(updateSingles);
//     setRuns(updatedRuns);
//   };

//   const handleFour = () => {
//     const updatedRuns = runs + 4;
//     const updatedFour = fours + 4;
//     setFours(updatedFour);
//     setRuns(updatedRuns);
//   };

//   const handleSixes = () => {
//     const updatedRuns = runs + 6;
//     const updatedSixes = sixes + 1;
//     setSixes(updatedSixes);
//     setRuns(updatedRuns);
//   };

//   return (
//     <div>
//       <h3>Bangladeshi Batsman</h3>
//       <h1>Score: {runs}</h1>
//       <h3>Singles: {singles}</h3>
//       <h3>Fours: {fours}</h3>
//       <h3>Sixes: {sixes}</h3>
//       <button onClick={handleSingle}>singles</button>
//       <button style={{margin: '5px'}} onClick={handleFour}>Four</button>
//       <button onClick={handleSixes}>Sixes</button>
//     </div>
//   );
// }
