import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getBooks } from "../services/api";

function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks().then(setBooks).catch(console.error);
  }, []);

  return (
    <div className="p-10 bg-black text-white min-h-screen">
      <h2 className="text-3xl mb-6">Books</h2>

      {books.map((book) => (
        <div key={book._id} className="mb-4">
          <h3 className="text-xl font-bold">{book.title}</h3>
          <p className="text-gray-400">{book.author}</p>
          <Link to={`/book/${book._id}`} className="text-blue-400 underline">View</Link>
        </div>
      ))}
    </div>
  );
}

export default Books;