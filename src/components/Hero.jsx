function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-pink-100 via-pink-50 to-white" />

      <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <p className="uppercase tracking-[0.35em] text-pink-700 text-sm font-semibold">
              Premium Boutique
            </p>

            <h1 className="mt-6 text-5xl lg:text-7xl leading-tight text-gray-900">
              Timeless Fashion
              <span className="block text-pink-700">
                For Every Occasion
              </span>
            </h1>

            <p className="mt-8 text-lg text-gray-600 leading-8 max-w-xl">
              Discover elegant Kurtis, beautiful Sarees and premium
              Bedsheets selected with love. Every piece combines
              comfort, quality and timeless style.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#products"
                className="bg-pink-700 hover:bg-pink-800 text-white px-8 py-4 rounded-full font-semibold transition"
              >
                Shop Now
              </a>

              <a
                href="#about"
                className="border border-pink-700 text-pink-700 hover:bg-pink-700 hover:text-white px-8 py-4 rounded-full font-semibold transition"
              >
                Learn More
              </a>
            </div>

            <div className="flex gap-10 mt-14">
              <div>
                <h3 className="text-3xl font-bold text-pink-700">100+</h3>
                <p className="text-gray-600 mt-1">Products</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-pink-700">100%</h3>
                <p className="text-gray-600 mt-1">Quality</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-pink-700">❤</h3>
                <p className="text-gray-600 mt-1">Handpicked</p>
              </div>
            </div>
          </div>

          <div>
            <div className="aspect-[4/5] rounded-[40px] bg-gradient-to-br from-pink-200 via-pink-100 to-white shadow-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="text-8xl">👗</div>

                <h3 className="mt-6 text-3xl text-gray-800">
                  Your Collection
                </h3>

                <p className="mt-3 text-gray-600">
                  This space will showcase your boutique's best product
                  or banner once you add real images.
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