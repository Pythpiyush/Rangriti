function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 border-b border-pink-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <div>
          <h1 className="text-2xl font-bold text-pink-700 tracking-wide">
            Elegant Boutique
          </h1>

          <p className="text-xs text-gray-500">
            Fashion • Style • Elegance
          </p>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <a
            href="#"
            className="hover:text-pink-700 transition"
          >
            Home
          </a>

          <a
            href="#products"
            className="hover:text-pink-700 transition"
          >
            Collection
          </a>

          <a
            href="#about"
            className="hover:text-pink-700 transition"
          >
            About
          </a>
        </nav>

        <a
          href="https://wa.me/917042038422"
          target="_blank"
          rel="noreferrer"
          className="bg-pink-700 hover:bg-pink-800 text-white px-6 py-3 rounded-full transition font-semibold"
        >
          Contact Us
        </a>

      </div>
    </header>
  );
}

export default Navbar;