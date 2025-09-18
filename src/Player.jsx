// export default function Player({ player }) {
//   const { name, username, email } = player;

//   return (
//     <div className="card">
//       <h3>username: {username}</h3>
//       <h3>name: {name}</h3>
//       <p>email: {email}</p>
//     </div>
//   );
// }

// export default function Player({ player }) {
//   console.log(player);

//   const { name, username, email } = player;

//   return (
//     <div className="card">
//       <h3>name: {name}</h3>
//       <h4>username: {username}</h4>
//       <p>email: {email}</p>
//     </div>
//   );
// }

export default function Player({ player }) {
  console.log(player);

  const { name, username, email } = player;

  return (
    <div className="card">
      <h3>name: {name}</h3>
      <h4>username: {username}</h4>
      <p>email: {email}</p>
    </div>
  );
}
