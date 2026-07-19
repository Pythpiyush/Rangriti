function Testimonials() {
  const reviews = [
    {
      name: "Priya Sharma",
      rating: 5,
      review:
        "Beautiful collection and excellent quality. The kurti looked exactly like the photos.",
    },
    {
      name: "Neha Gupta",
      rating: 5,
      review:
        "Very helpful seller and smooth WhatsApp ordering. Highly recommended!",
    },
    {
      name: "Anjali Verma",
      rating: 5,
      review:
        "Loved the fabric and fitting. Will definitely order again.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-14">
        <p className="uppercase tracking-[0.3em] text-pink-700 text-sm font-semibold">
          Testimonials
        </p>

        <h2 className="mt-3 text-5xl text-gray-900">
          What Our Customers Say
        </h2>

        <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
          We love making our customers happy with quality products and
          personalized service.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {reviews.map((review) => (
          <div
            key={review.name}
            className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-300"
          >
            <div className="text-yellow-500 text-xl mb-4">
              {"⭐".repeat(review.rating)}
            </div>

            <p className="text-gray-600 italic leading-7">
              "{review.review}"
            </p>

            <h3 className="mt-6 text-lg font-semibold text-gray-900">
              {review.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;