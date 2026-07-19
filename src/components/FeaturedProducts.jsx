import ProductCard from "./ProductCard";

function FeaturedProducts({ products, onProductClick }) {
  const featuredProducts = products.filter(
    (product) => product.isFeatured
  );

  if (featuredProducts.length === 0) return null;

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center mb-10">
        <p className="uppercase tracking-[0.3em] text-pink-700 text-sm font-semibold">
          Featured Collection
        </p>

        <h2 className="mt-3 text-5xl text-gray-900">
          Our Best Picks
        </h2>

        <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
          Discover our handpicked collection loved by our customers.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredProducts.map((product) => (
          <div
            key={product.id}
            className="cursor-pointer"
            onClick={() => onProductClick(product)}
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedProducts;