export default function Task({ task }) {
  console.log(task);
  const { name, address, company } = task;
  return (
    <div className="card">
      <h3>Name: {name}</h3>
      <h3>Company name: {company.name}</h3>
      <h3>City name: {address.city}</h3>
    </div>
  );
}
