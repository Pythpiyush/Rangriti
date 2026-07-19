function WhyChooseUs() {
  const features = [
    {
      icon: "🌸",
      title: "Handpicked Collection",
      description:
        "Every design is carefully selected to bring together elegance, comfort, and timeless fashion for every occasion.",
    },
    {
      icon: "🚚",
      title: "Fast & Easy Ordering",
      description:
        "Order directly through WhatsApp with quick responses, personalized assistance, and a smooth shopping experience.",
    },
    {
      icon: "💎",
      title: "Premium Quality",
      description:
        "We focus on quality fabrics, beautiful craftsmanship, and products you'll love for years to come.",
    },
    {
      icon: "💖",
      title: "Affordable Luxury",
      description:
        "Enjoy stylish collections at prices that make premium fashion accessible without compromising quality.",
    },
  ];

  return (
    <section className="relative py-24 bg-white overflow-hidden">

      {/* Decorative Background */}
      <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-[#F7EBDD] blur-3xl opacity-60"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#F2DDC2] blur-3xl opacity-60"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">

          <p className="uppercase tracking-[0.4em] text-[#8B1E3F] text-sm font-semibold">
            Why Choose Rangriti
          </p>

          <h2 className="mt-5 text-4xl lg:text-5xl font-bold text-[#2E2E2E]">
            Fashion with Elegance & Care
          </h2>

          <div className="w-24 h-1 bg-[#D4AF37] rounded-full mx-auto mt-6"></div>

          <p className="mt-8 text-lg text-gray-600 leading-8">
            Every product is chosen with attention to quality, comfort,
            and style so you can shop with confidence and enjoy a
            personalized boutique experience.
          </p>

        </div>

        {/* Feature Cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="group bg-[#FFF8F2] border border-[#F1E4D6] rounded-3xl p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:border-[#8B1E3F] hover:shadow-2xl"
            >

              <div className="w-20 h-20 mx-auto rounded-full bg-white shadow-md flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>

              <h3 className="mt-8 text-2xl font-bold text-[#2E2E2E] group-hover:text-[#8B1E3F] transition-colors duration-300">
                {feature.title}
              </h3>

              <p className="mt-5 text-gray-600 leading-8">
                {feature.description}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default WhyChooseUs;
