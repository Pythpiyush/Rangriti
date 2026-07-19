function About() {
  return (
    <section
      id="about"
      className="relative py-24 bg-white overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-[#F7EBDD] blur-3xl opacity-60"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#F2DDC2] blur-3xl opacity-60"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image Placeholder */}

          <div>

            <div className="relative">

              <div className="absolute -top-6 -left-6 w-full h-full rounded-[40px] border-2 border-[#D4AF37]/40"></div>

              <div className="relative aspect-[4/5] rounded-[36px] overflow-hidden bg-gradient-to-br from-[#F7EBDD] via-[#FFF8F2] to-[#F2DDC2] shadow-2xl flex flex-col items-center justify-center text-center p-8">

                <div className="text-8xl">
                  🏬
                </div>

                <h3 className="mt-8 text-3xl font-bold text-[#8B1E3F]">
                  Boutique Photo
                </h3>

                <p className="mt-4 text-gray-600 leading-8 max-w-sm">
                  This space is reserved for your boutique,
                  owner photo, or a beautiful lifestyle image.
                </p>

              </div>

            </div>

          </div>

          {/* Content */}

          <div>

            <p className="uppercase tracking-[0.4em] text-[#8B1E3F] text-sm font-semibold">
              About Rangriti
            </p>

            <h2 className="mt-5 text-4xl lg:text-5xl font-bold text-[#2E2E2E] leading-tight">
              Fashion That Celebrates
              <span className="block text-[#8B1E3F]">
                Every Occasion
              </span>
            </h2>

            <p className="mt-8 text-lg text-gray-600 leading-9">
              At Rangriti, we believe fashion is more than just clothing.
              It's about expressing confidence, celebrating traditions,
              and feeling comfortable every day.
            </p>

            <p className="mt-6 text-lg text-gray-600 leading-9">
              Every kurti, saree, bedsheet, and fashion essential is
              personally selected with attention to quality, elegance,
              and affordability. We are committed to providing a warm,
              personalized shopping experience for every customer.
            </p>

            {/* Highlights */}

            <div className="mt-10 space-y-5">

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#F7EBDD] flex items-center justify-center">
                  ✓
                </div>

                <span className="text-gray-700 text-lg">
                  Premium Quality Products
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#F7EBDD] flex items-center justify-center">
                  ✓
                </div>

                <span className="text-gray-700 text-lg">
                  Personalized WhatsApp Assistance
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#F7EBDD] flex items-center justify-center">
                  ✓
                </div>

                <span className="text-gray-700 text-lg">
                  Affordable Fashion for Every Occasion
                </span>
              </div>

            </div>

            {/* CTA */}

            <a
              href="#products"
              className="inline-block mt-12 bg-[#8B1E3F] hover:bg-[#6E1632] text-white px-10 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              Explore Collection
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;
