import { use } from "react";

export default function Books({ fetchBooks }) {
  const books = use(fetchBooks);
  console.log(books);

  return (
    <div className="card">
      <h3>Books: {books.length}</h3>
    </div>
  );
}
