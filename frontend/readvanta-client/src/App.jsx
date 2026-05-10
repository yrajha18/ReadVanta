import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Register";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Explore from "./pages/Explore";
import BookDetails from "./pages/BookDetails";
import Books from "./pages/Books";
import Favorites from "./pages/Favorites";
import Footer from "./components/Footer";
import Clubs from "./pages/Clubs";
import ClubDetails from "./pages/ClubDetails";
import AIChat from "./pages/AIChat";

function Layout() {
  const location = useLocation();

  // ✅ Show footer ONLY on home page
  const showFooter = location.pathname === "/";

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/books" element={<Books />} />
          <Route path="/book/:id" element={<BookDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/clubs" element={<Clubs />} />
          <Route path="/club/:id" element={<ClubDetails />} />
          <Route path="/aichat" element={<AIChat />} />
        </Routes>
      </main>

      {/* ✅ Footer only on Home */}
      {showFooter && <Footer />}

    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;