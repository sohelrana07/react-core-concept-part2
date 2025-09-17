export default function Post({ post }) {
  //   console.log(post);

  const { title, body } = post;

  return (
    <div className="card">
      <h5 className="card">{title}</h5>
      <p>{body}</p>
    </div>
  );
}
