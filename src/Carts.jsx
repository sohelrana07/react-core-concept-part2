import { use } from "react";
import Cart from "./Cart";

export default function Carts({ cartsPromise }) {
  const carts = use(cartsPromise);
  console.log(carts);

  return (
    <div className="card">
      <h4>All Carts: {carts.length}</h4>
      {carts.map((cart) => (
        <Cart key={cart.id} cart={cart}></Cart>
      ))}
    </div>
  );
}
