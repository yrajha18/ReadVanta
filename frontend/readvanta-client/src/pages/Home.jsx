import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";

const Home = () => {
  return (
    <div className="bg-black text-white">

      {/* ================= HERO ================= */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative">

        {/* Glow Background */}
        <div className="absolute w-72 h-72 bg-gradient-to-r from-orange-500 to-blue-500 opacity-20 blur-3xl rounded-full top-20"></div>

        {/* Logo Icon (Optional emoji or image) */}
        <motion.div
  initial={{ scale: 0 }}
  animate={{ scale: 1 }}
  className="w-20 h-20 flex items-center justify-center rounded-2xl bg-gradient-to-r from-orange-500 to-blue-500 mb-8 shadow-lg p-3"
>
  <img src={logo} alt="ReadVanta" />
</motion.div>

        {/* Brand Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-bold leading-tight"
        >
          <span className="bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">
            ReadVanta
          </span>
        </motion.h1>

        {/* Tagline */}
        <p className="mt-4 text-gray-400 text-lg">
          AI-powered reading platform for modern learners
        </p>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-6 text-3xl md:text-5xl font-bold max-w-2xl"
        >
          Discover Books,
          <br />
          Learn Faster with AI
        </motion.h2>

        {/* CTA */}
        <Link to="/explore">
          <button className="mt-8 px-8 py-3 rounded-full bg-gradient-to-r from-orange-500 to-blue-500 text-black font-semibold hover:scale-105 transition shadow-lg">
            Start Exploring →
          </button>
        </Link>

      </section>

      {/* ================= FEATURES ================= */}
      <section className="py-20 px-6 text-center bg-gray-950">

        <h2 className="text-3xl font-bold mb-12">
          Why ReadVanta?
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {[
            {
              title: "📚 Smart Discovery",
              desc: "Find books based on your interests instantly."
            },
            {
              title: "🤖 AI Summaries",
              desc: "Understand books faster with AI-generated insights."
            },
            {
              title: "💬 Book Clubs",
              desc: "Discuss and chat with readers in real-time."
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-900 p-6 rounded-xl shadow-lg hover:scale-105 transition"
            >
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-400 mt-2">{item.desc}</p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* ================= AI SECTION ================= */}
      <section className="py-20 px-6 text-center">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-bold"
        >
          🤖 Powered by AI
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-4 text-gray-400 max-w-xl mx-auto"
        >
          Generate summaries, get recommendations, and enhance your reading experience.
        </motion.p>

        <motion.div
          initial={{ scale: 0.9 }}
          whileInView={{ scale: 1 }}
          className="mt-10 p-6 rounded-xl bg-gradient-to-r from-orange-500 to-blue-500 text-black font-semibold shadow-lg"
        >
          “Read smarter, not harder.”
        </motion.div>

      </section>

    </div>
  );
};

export default Home;