export default function Device({ device }) {
  const { title, body } = device;

  return (
    <div className="card">
      <h4 className="card">Title: {title}</h4>
      <p>{body}</p>
    </div>
  );
}
