import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getBookById, generateSummary } from "../services/api";

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [summary, setSummary] = useState("");
  const [loadingSummary, setLoadingSummary] = useState(false);
  const [loadingBook, setLoadingBook] = useState(true);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const data = await getBookById(id);
        setBook(data);
      } catch (err) {
        console.error("Failed to fetch book", err);
      } finally {
        setLoadingBook(false);
      }
    };
    fetchBook();
  }, [id]);

  if (loadingBook) return <div className="bg-black text-white min-h-screen pt-24 text-center"><p>Loading...</p></div>;
  if (!book) return <div className="bg-black text-white min-h-screen pt-24 text-center"><h2>Book not found</h2></div>;

  const handleSummarize = async () => {
    try {
      setLoadingSummary(true);
      const res = await generateSummary({
        title: book.title,
        author: book.author,
        description: book.description,
      });
      setSummary(res.summary);
    } catch (err) {
      alert("Error generating summary");
    } finally {
      setLoadingSummary(false);
    }
  };

  return (
    <div className="bg-black text-white min-h-screen px-6 md:px-10 pt-24 pb-12">

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10">

        {/* Image */}
        <div className="flex justify-center">
          <img
            src={book.image}
            alt={book.title}
            className="w-72 md:w-80 rounded-xl shadow-2xl hover:scale-105 transition"
          />
        </div>

        {/* Details */}
        <div className="flex-1">

          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">
            {book.title}
          </h1>

          <h3 className="text-gray-400 mt-2 text-lg">
            {book.author}
          </h3>

          <p className="mt-6 text-gray-300 leading-relaxed max-w-lg">
            {book.description}
          </p>

          {/* Button */}
          <button
            onClick={handleSummarize}
            className="mt-6 px-6 py-3 rounded-lg bg-gradient-to-r from-orange-400 to-blue-400 text-black font-semibold shadow-lg hover:scale-105 transition"
            disabled={loadingSummary}
          >
            {loadingSummary ? "Generating..." : "🤖 Generate AI Summary"}
          </button>

          {/* Loading */}
          {loadingSummary && (
            <p className="mt-4 text-gray-400 animate-pulse">
              Generating summary...
            </p>
          )}

          {/* Summary */}
          {summary && (
            <div className="mt-6 p-5 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg">
              <h3 className="font-semibold mb-2 text-orange-400">
                AI Summary
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {summary}
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default BookDetails;