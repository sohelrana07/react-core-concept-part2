export default function Cart({ cart }) {
  const { title, body } = cart;
  console.log(title, body);

  return (
    <div className="card">
      <h4 className="card">Title: {title}</h4>
      <p>{body}</p>
    </div>
  );
}
