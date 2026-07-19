function ShopCategory({ onCategorySelect }) {
  const categories = [
    {
      name: "Kurti",
      icon: "👗",
      description: "Elegant everyday & festive wear",
    },
    {
      name: "Saree",
      icon: "🥻",
      description: "Traditional styles with timeless elegance",
    },
    {
      name: "Bedsheet",
      icon: "🛏️",
      description: "Premium comfort for your home",
    },
    {
      name: "Dress Material",
      icon: "🧵",
      description: "Create your perfect outfit",
    },
  ];

  return (
    <section className="relative py-24 bg-white overflow-hidden">

      {/* Decorative Background */}
      <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-[#F7EBDD] blur-3xl opacity-70"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#F2DDC2] blur-3xl opacity-60"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <p className="uppercase tracking-[0.4em] text-[#8B1E3F] text-sm font-semibold">
            Shop by Category
          </p>

          <h2 className="mt-5 text-4xl lg:text-5xl font-bold text-[#2E2E2E]">
            Find Your Perfect Style
          </h2>

          <div className="w-24 h-1 bg-[#D4AF37] rounded-full mx-auto mt-6"></div>

          <p className="mt-8 text-lg text-gray-600 leading-8">
            Browse our carefully curated collections designed for every
            occasion and every home.
          </p>

        </div>

        {/* Categories */}

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => onCategorySelect(category.name)}
              className="group bg-[#FFF8F2] rounded-3xl p-8 border border-[#F1E4D6] hover:border-[#8B1E3F] hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center"
            >
              <div className="text-6xl transition-transform duration-500 group-hover:scale-110">
                {category.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-[#2E2E2E] group-hover:text-[#8B1E3F] transition-colors">
                {category.name}
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                {category.description}
              </p>

              <div className="mt-6 text-[#8B1E3F] font-semibold opacity-0 group-hover:opacity-100 transition duration-300">
                Explore Collection →
              </div>
            </button>
          ))}

        </div>

      </div>

    </section>
  );
}

export default ShopCategory;
