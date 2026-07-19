function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-[#FFF8F2]/90 backdrop-blur-xl border-b border-[#EADCCB] shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div>
          <h1 className="text-3xl font-bold tracking-wide text-[#8B1E3F]">
            Rangriti
          </h1>

          <p className="text-sm text-[#8C7B6A] tracking-[0.25em] uppercase mt-1">
            Elegance in Every Thread
          </p>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-10">

          <a
            href="#"
            className="text-gray-700 font-medium hover:text-[#8B1E3F] transition duration-300"
          >
            Home
          </a>

          <a
            href="#products"
            className="text-gray-700 font-medium hover:text-[#8B1E3F] transition duration-300"
          >
            Collection
          </a>

          <a
            href="#about"
            className="text-gray-700 font-medium hover:text-[#8B1E3F] transition duration-300"
          >
            About
          </a>

        </nav>

        {/* Contact Button */}
        <a
          href="https://wa.me/917042038422"
          target="_blank"
          rel="noreferrer"
          className="hidden md:flex items-center gap-2 bg-[#8B1E3F] hover:bg-[#6E1632] text-white px-7 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
        >
          💬 Contact Us
        </a>

      </div>
    </header>
  );
}

export default Navbar;
