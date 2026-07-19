function Testimonials() {
  const reviews = [
    {
      name: "Priya Sharma",
      location: "Delhi",
      rating: 5,
      review:
        "Absolutely loved the quality and finishing of my kurti. The fabric feels premium and the colors are exactly as shown.",
    },
    {
      name: "Neha Gupta",
      location: "Lucknow",
      rating: 5,
      review:
        "Ordering through WhatsApp was super easy. The owner was very helpful and the delivery was quick. Highly recommended!",
    },
    {
      name: "Anjali Verma",
      location: "Jaipur",
      rating: 5,
      review:
        "Beautiful collection with affordable prices. I received so many compliments after wearing my saree.",
    },
  ];

  return (
    <section className="relative py-24 bg-[#FFF8F2] overflow-hidden">

      {/* Decorative Background */}
      <div className="absolute -top-20 right-0 w-80 h-80 rounded-full bg-[#F7EBDD] blur-3xl opacity-60"></div>

      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#F2DDC2] blur-3xl opacity-60"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <p className="uppercase tracking-[0.4em] text-[#8B1E3F] text-sm font-semibold">
            Testimonials
          </p>

          <h2 className="mt-5 text-4xl lg:text-5xl font-bold text-[#2E2E2E]">
            What Our Customers Say
          </h2>

          <div className="w-24 h-1 bg-[#D4AF37] rounded-full mx-auto mt-6"></div>

          <p className="mt-8 text-lg text-gray-600 leading-8">
            Every happy customer inspires us to bring even more elegance,
            quality, and personalized service to your shopping experience.
          </p>

        </div>

        {/* Reviews */}

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">

          {reviews.map((review) => (
            <div
              key={review.name}
              className="group bg-white rounded-3xl border border-[#F1E4D6] p-8 shadow-sm hover:shadow-2xl hover:border-[#8B1E3F] hover:-translate-y-2 transition-all duration-500"
            >

              {/* Quote */}

              <div className="text-5xl text-[#D4AF37] font-serif leading-none">
                “
              </div>

              {/* Stars */}

              <div className="mt-2 text-xl">
                {"⭐".repeat(review.rating)}
              </div>

              {/* Review */}

              <p className="mt-6 text-gray-600 leading-8 italic">
                {review.review}
              </p>

              {/* Customer */}

              <div className="mt-8 flex items-center gap-4">

                <div className="w-14 h-14 rounded-full bg-[#F7EBDD] flex items-center justify-center text-2xl">
                  👩
                </div>

                <div>

                  <h3 className="font-bold text-lg text-[#2E2E2E] group-hover:text-[#8B1E3F] transition-colors">
                    {review.name}
                  </h3>

                  <p className="text-gray-500 text-sm">
                    {review.location}
                  </p>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Testimonials;
