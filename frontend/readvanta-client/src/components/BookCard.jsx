import { useNavigate } from "react-router-dom";

const BookCard = ({ book }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition">

      {/* Image */}
      <img
        src={book.image}
        alt={book.title}
        className="w-full h-64 object-cover"
      />

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold">{book.title}</h3>
        <p className="text-gray-400 text-sm">{book.author}</p>

        <button
          onClick={() => navigate(`/book/${book.id}`)}
          className="mt-4 w-full bg-gradient-to-r from-orange-400 to-blue-400 text-black py-2 rounded-lg font-semibold hover:opacity-90 transition"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default BookCard;