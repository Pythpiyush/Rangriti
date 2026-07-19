function NewFooter() {
  return (
    <footer
      id="contact"
      className="bg-[#8B1E3F] text-white mt-16"
    >
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold">
              Rangriti
            </h2>

            <p className="mt-3 text-[#F3DCC6] uppercase tracking-[0.25em] text-sm">
              Elegance in Every Thread
            </p>

            <p className="mt-5 text-pink-100 leading-7">
              Discover timeless fashion with beautifully curated collections
              crafted for every occasion.
            </p>
          </div>

          {/* Collections */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Our Collection
            </h3>

            <ul className="space-y-2 text-pink-100">
              <li>• Kurtis</li>
              <li>• Sarees</li>
              <li>• Dress Materials</li>
              <li>• Bedsheets</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-pink-200 transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#featured" className="hover:text-pink-200 transition">
                  Featured Collection
                </a>
              </li>

              <li>
                <a href="#products" className="hover:text-pink-200 transition">
                  Shop
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-pink-200 transition">
                  About Us
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-pink-500/40 mt-10 pt-6 text-center text-pink-100 text-sm">
          © 2026 Rangriti. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default NewFooter;
