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

      {/* ================= HOW IT WORKS (ABOUT) ================= */}
      <section id="about" className="py-20 px-6 bg-black relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>
        
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              ReadVanta combines the joy of reading with the power of AI to transform your learning journey.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Connection lines (desktop only) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-800 -z-10 transform -translate-y-1/2"></div>

            {[
              {
                step: "01",
                icon: "🔍",
                title: "Discover",
                desc: "Browse our curated collection of books across various categories. Find your next great read in seconds.",
                color: "from-orange-500 to-orange-300"
              },
              {
                step: "02",
                icon: "🧠",
                title: "AI Analysis",
                desc: "Get instant AI-generated summaries and insights. Understand complex concepts without spending hours.",
                color: "from-blue-500 to-blue-300"
              },
              {
                step: "03",
                icon: "👥",
                title: "Connect",
                desc: "Join book clubs, discuss with fellow readers, and share your insights in a vibrant community.",
                color: "from-purple-500 to-purple-300"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-3xl border border-gray-800 hover:border-orange-500/50 transition-all group"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-3xl mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <div className="text-sm font-bold text-orange-500 mb-2">{item.step}</div>
                <h3 className="text-2xl font-bold mb-4 text-white">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-16 text-center"
          >
            <div className="inline-block p-1 rounded-full bg-gradient-to-r from-orange-500 via-blue-500 to-purple-500">
              <div className="px-8 py-3 rounded-full bg-black text-white font-medium">
                Ready to transform your reading?
              </div>
            </div>
          </motion.div>
        </div>
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