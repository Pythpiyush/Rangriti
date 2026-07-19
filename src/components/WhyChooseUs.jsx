function WhyChooseUs() {
  const features = [
    {
      icon: "🌸",
      title: "Handpicked Collection",
      description:
        "Every product is carefully selected to offer style, comfort, and quality.",
    },
    {
      icon: "🚚",
      title: "Easy Ordering",
      description:
        "Order directly through WhatsApp with quick responses and personal assistance.",
    },
    {
      icon: "💖",
      title: "Trusted Quality",
      description:
        "We focus on premium fabrics and beautiful designs you'll love to wear.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-14">
        <p className="uppercase tracking-[0.3em] text-pink-700 text-sm font-semibold">
          Why Choose Us
        </p>

        <h2 className="mt-3 text-5xl text-gray-900">
          Shopping Made Personal
        </h2>

        <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
          We believe every customer deserves personal attention and beautiful
          products at affordable prices.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-300 text-center"
          >
            <div className="text-5xl">{feature.icon}</div>

            <h3 className="mt-6 text-2xl text-gray-900">
              {feature.title}
            </h3>

            <p className="mt-4 text-gray-600 leading-7">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseUs;