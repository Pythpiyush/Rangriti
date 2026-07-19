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

            {/* Logo Placeholder */}

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
              Discover thoughtfully curated fashion that blends
              elegance, comfort, and timeless style for every occasion.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-semibold text-[#D4AF37]">
              Quick Links
            </h3>

            <ul className="mt-6 space-y-4">

              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#featured"
                  className="text-gray-300 hover:text-white transition"
                >
                  Featured Collection
                </a>
              </li>

              <li>
                <a
                  href="#products"
                  className="text-gray-300 hover:text-white transition"
                >
                  Our Collection
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-white transition"
                >
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
                className="flex items-center gap-3 text-gray-300 hover:text-white transition"
              >
                💬 WhatsApp
              </a>

              <div className="flex items-center gap-3 text-gray-300">
                📍 Store Location
                <span className="text-sm">(Coming Soon)</span>
              </div>

              <div className="flex items-center gap-3 text-gray-300">
                📸 Instagram
                <span className="text-sm">(Coming Soon)</span>
              </div>

            </div>

          </div>

        </div>

        {/* Divider */}

        <div className="border-t border-white/10 mt-14 pt-8">

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">

            <p className="text-gray-400 text-sm">
              © 2026 Rangriti. All Rights Reserved.
            </p>

            <p className="text-gray-400 text-sm">
              Crafted with ❤ for timeless fashion.
            </p>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;
