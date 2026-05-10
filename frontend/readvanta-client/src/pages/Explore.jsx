import { useState, useEffect } from "react";
import BookCard from "../components/BookCard";
import { getBooks } from "../services/api";

const Explore = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true);
        const data = await getBooks(search, category);
        setBooks(data);
      } catch (error) {
        console.error("Failed to fetch books", error);
      } finally {
        setLoading(false);
      }
    };
    
    // Add a slight debounce for typing in search
    const delayDebounceFn = setTimeout(() => {
      fetchBooks();
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [search, category]);

  return (
    <div className="bg-black text-white min-h-screen px-6 md:px-10 pt-24 pb-12">

      {/* Container */}
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">
          Explore Books 
        </h1>

        {/* Search Bar */}
        <div className="mt-6">
          <input
            type="text"
            placeholder="Search books, authors..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-96 p-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* Categories */}
        <div className="mt-5 flex flex-wrap gap-3">
          {["All", "Self-help", "Tech", "Fiction"].map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm transition ${
                category === cat
                  ? "bg-gradient-to-r from-orange-400 to-blue-400 text-black font-semibold"
                  : "bg-white/5 border border-white/10 hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Books Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {loading ? (
             <p className="text-gray-400 mt-10">Loading books...</p>
          ) : books.length > 0 ? (
            books.map((book) => (
              <div
                key={book._id}
                className="transform hover:scale-105 transition duration-300"
              >
                <BookCard book={{...book, id: book._id}} />
              </div>
            ))
          ) : (
            <p className="text-gray-400 mt-10">
              No books found 
            </p>
          )}

        </div>

      </div>
    </div>
  );
};

export default Explore;