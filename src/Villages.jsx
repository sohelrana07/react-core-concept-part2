import { use } from "react";

export default function Villages({ villagesPromise }) {
  const villages = use(villagesPromise);
  console.log(villages);

  return (
    <div className="card">
      <h3>Villages: {villages.length}</h3>
    </div>
  );
}
