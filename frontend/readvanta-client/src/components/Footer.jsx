const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6">

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Logo */}
        <div>
          <h2 className="text-white text-lg font-semibold">📚 ReadVanta</h2>
          <p className="mt-1 text-sm">
            AI-powered reading platform.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-white font-medium mb-1">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li>Home</li>
            <li>Explore</li>
            <li>Favorites</li>
          </ul>
        </div>

        {/* About */}
        <div>
          <h3 className="text-white font-medium mb-1">About</h3>
          <p className="text-sm">Built with ❤️</p>
        </div>

      </div>

      {/* Bottom */}
      <div className="text-center mt-4 text-xs text-gray-500">
        © 2026 ReadVanta
      </div>

    </footer>
  );
};

export default Footer;