function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#FFF8F2]">

      {/* Decorative Background */}
      <div className="absolute inset-0">
        <div className="absolute -top-32 -left-20 w-96 h-96 rounded-full bg-[#F8EAD8] blur-3xl opacity-70"></div>

        <div className="absolute bottom-0 right-0 w-[32rem] h-[32rem] rounded-full bg-[#F2DDC2] blur-3xl opacity-70"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left Content */}

          <div>

            <p className="uppercase tracking-[0.4em] text-[#8B1E3F] font-semibold text-sm">
              Welcome to Rangriti
            </p>

            <h1 className="mt-6 text-5xl lg:text-7xl font-bold leading-tight text-[#2E2E2E]">

              Discover
              <span className="block text-[#8B1E3F]">
                Timeless Elegance
              </span>

            </h1>

            <p className="mt-8 text-lg leading-9 text-gray-600 max-w-xl">
              Curated collections of elegant kurtis, graceful sarees,
              premium bedsheets, and fashion essentials crafted to
              celebrate every occasion with style, comfort, and
              confidence.
            </p>

            <div className="flex flex-wrap gap-5 mt-12">

              <a
                href="#products"
                className="bg-[#8B1E3F] hover:bg-[#6E1632] text-white px-9 py-4 rounded-full font-semibold shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                Shop Collection
              </a>

              <a
                href="#about"
                className="border-2 border-[#8B1E3F] text-[#8B1E3F] hover:bg-[#8B1E3F] hover:text-white px-9 py-4 rounded-full font-semibold transition-all duration-300"
              >
                Our Story
              </a>

            </div>

            {/* Boutique Stats */}

            <div className="grid grid-cols-3 gap-8 mt-16">

              <div>
                <h3 className="text-4xl font-bold text-[#8B1E3F]">
                  100+
                </h3>

                <p className="mt-2 text-gray-600">
                  Designs
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-[#8B1E3F]">
                  Premium
                </h3>

                <p className="mt-2 text-gray-600">
                  Quality
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-[#8B1E3F]">
                  ❤
                </h3>

                <p className="mt-2 text-gray-600">
                  Handpicked
                </p>
              </div>

            </div>

          </div>

          {/* Right Side */}

          <div className="relative">

            <div className="absolute -top-8 -left-8 w-full h-full rounded-[45px] border-2 border-[#D4AF37]/40"></div>

            <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl bg-gradient-to-br from-[#F7EBDD] via-[#FFF8F2] to-[#F2DDC2]">

              {/* Replace this section later with your boutique banner */}

              <div className="absolute inset-0 flex flex-col items-center justify-center">

                <div className="text-9xl">
                  👗
                </div>

                <h2 className="mt-8 text-4xl font-bold text-[#8B1E3F]">
                  Rangriti
                </h2>

                <p className="mt-4 text-center text-gray-600 max-w-sm leading-8 px-8">
                  Soon this section will feature your boutique's
                  signature collection and seasonal highlights.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;
