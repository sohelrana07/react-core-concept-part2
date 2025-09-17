export default function Detail({ detail }) {

  const { title, body } = detail;

  return (
    <div className="card">
      <h3 className="card">Title: {title}</h3>
      <p>{body}</p>
    </div>
  );
}
