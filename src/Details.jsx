import { use } from "react";
import Detail from './Detail';

export default function Details({ detailsPromise }) {
  const details = use(detailsPromise);

  return (
    <div className="card">
      <h3>All Details: {details.length}</h3>
      {
        details.map(detail => <Detail key={detail.id} detail={detail}></Detail>)
      }
    </div>
  );
}
