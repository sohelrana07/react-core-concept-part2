import { use } from "react";

export default function Players({ fetchPlayer }) {
  const players = use(fetchPlayer);
  console.log(players);

  return (
    <div className="card">
      <h3>Players: {players.length}</h3>
    </div>
  );
}
