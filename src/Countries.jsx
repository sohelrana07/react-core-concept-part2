import { use } from "react";

export default function Countries({ countriesPromise }) {
  const countries = use(countriesPromise);
  console.log(countries);

  return (
    <div className="card">
      <h3>Countries: {countries.length}</h3>
    </div>
  );
}
