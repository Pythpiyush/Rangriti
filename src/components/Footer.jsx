function Footer() {
  return (
    <footer
      id="contact"
      className="relative bg-[#5E1730] text-white overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-[#8B1E3F] blur-3xl opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-3 gap-12">

          {/* Brand */}
          <div>

            <div className="w-20 h-20 rounded-2xl border-2 border-dashed border-[#D4AF37] flex items-center justify-center text-[#D4AF37] text-sm font-semibold">
              LOGO
            </div>

            <h2 className="mt-6 text-3xl font-bold">
              Rangriti
            </h2>

            <p className="mt-2 text-[#F3DCC6] tracking-[0.2em] uppercase text-sm">
              Elegance in Every Thread
            </p>

            <p className="mt-6 text-gray-300 leading-8">
              Discover thoughtfully curated fashion that blends elegance,
              comfort, and timeless style for every occasion.
            </p>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-xl font-semibold text-[#D4AF37]">
              Quick Links
            </h3>

            <ul className="mt-6 space-y-4">

              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Home
                </a>
              </li>

              <li>
                <a href="#featured" className="text-gray-300 hover:text-white">
                  Featured Collection
                </a>
              </li>

              <li>
                <a href="#products" className="text-gray-300 hover:text-white">
                  Our Collection
                </a>
              </li>

              <li>
                <a href="#about" className="text-gray-300 hover:text-white">
                  About Rangriti
                </a>
              </li>

            </ul>

          </div>

          {/* Contact */}
          <div>

            <h3 className="text-xl font-semibold text-[#D4AF37]">
              Get in Touch
            </h3>

            <div className="mt-6 space-y-5">

              <a
                href="https://wa.me/917042038422"
                target="_blank"
                rel="noreferrer"
                className="text-gray-300 hover:text-white"
              >
                💬 WhatsApp
              </a>

              <p className="text-gray-300">
                📍 Store Location (Coming Soon)
              </p>

              <p className="text-gray-300">
                📸 Instagram (Coming Soon)
              </p>

            </div>

          </div>

        </div>

        <div className="border-t border-white/10 mt-14 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-400 text-sm">
            © 2026 Rangriti. All Rights Reserved.
          </p>

          <p className="text-gray-400 text-sm">
            Crafted with ❤ for timeless fashion.
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;
