import { useEffect, useState } from "react";
import BookCard from "../components/BookCard";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(stored);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen px-6 md:px-10 pt-28">

      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold">
        ❤️ Your Favorites
      </h1>

      {/* Empty State */}
      {favorites.length === 0 && (
        <p className="text-gray-400 mt-6">
          No favorite books yet 😢
        </p>
      )}

      {/* Centered Grid */}
      <div className="mt-10 flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {favorites.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>

    </div>
  );
};

export default Favorites;