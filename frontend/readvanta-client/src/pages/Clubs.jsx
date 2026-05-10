import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getClubs } from "../services/api";

const Clubs = () => {
  const navigate = useNavigate();
  const [clubs, setClubs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getClubs()
      .then(data => {
        setClubs(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching clubs", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-black text-white min-h-screen px-6 md:px-10 pt-24 pb-12">

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">
          Book Clubs
        </h1>

        <p className="mt-3 text-gray-400">
          Join communities and discuss your favorite books
        </p>

        {/* Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {loading ? (
            <p className="text-gray-400">Loading clubs...</p>
          ) : clubs.length > 0 ? (
            clubs.map((club) => (
              <div
                key={club._id}
                onClick={() => navigate(`/club/${club._id}`)}
                className="bg-white/5 border border-white/10 rounded-xl p-6 cursor-pointer hover:scale-105 hover:bg-white/10 transition shadow-lg"
              >
                <h2 className="text-xl font-semibold">
                  {club.name}
                </h2>
                
                <p className="text-sm text-gray-300 mt-1 mb-2">
                  {club.description}
                </p>

                <p className="text-gray-400 mt-2">
                  👥 {club.members?.length || 0} members
                </p>

                <button className="mt-4 px-4 py-2 rounded-lg bg-gradient-to-r from-orange-400 to-blue-400 text-black font-semibold w-full">
                  Join Chat →
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-400">No clubs found.</p>
          )}

        </div>

      </div>
    </div>
  );
};

export default Clubs;