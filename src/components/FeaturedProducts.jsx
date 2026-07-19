import ProductCard from "./ProductCard";

function FeaturedProducts({ products, onProductClick }) {
  const featuredProducts = products.filter(
    (product) => product.isFeatured
  );

  if (featuredProducts.length === 0) return null;

  return (
    <section
      id="featured"
      className="relative py-24 bg-[#FFF8F2] overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-[#F7EBDD] blur-3xl opacity-70"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#F2DDC2] blur-3xl opacity-60"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">

          <p className="uppercase tracking-[0.4em] text-[#8B1E3F] text-sm font-semibold">
            Featured Collection
          </p>

          <h2 className="mt-5 text-4xl lg:text-5xl font-bold text-[#2E2E2E]">
            Our Signature Picks
          </h2>

          <div className="w-24 h-1 bg-[#D4AF37] rounded-full mx-auto mt-6"></div>

          <p className="mt-8 text-lg text-gray-600 leading-8">
            Carefully selected designs that reflect elegance, comfort,
            and timeless style. Discover the pieces our customers love
            the most.
          </p>

        </div>

        {/* Product Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {featuredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => onProductClick(product)}
              className="cursor-pointer"
            >
              <ProductCard product={product} />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default FeaturedProducts;
