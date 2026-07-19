import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedProducts from "./components/FeaturedProducts";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import ProductCard from "./components/ProductCard";
import ProductModal from "./components/ProductModal";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import products from "./data/products";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Featured products appear only in the Featured section
  const catalogProducts = products.filter(
    (product) => !product.isFeatured
  );

  const filteredProducts = catalogProducts
    .filter((product) => {
      const matchesCategory =
        selectedCategory === "All" ||
        product.category === selectedCategory;

      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.id.toLowerCase().includes(searchTerm.toLowerCase());

      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "priceLow":
          return a.price - b.price;

        case "priceHigh":
          return b.price - a.price;

        case "name":
          return a.name.localeCompare(b.name);

        default:
          return 0;
      }
    });

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <Navbar />

      <Hero />

      <FeaturedProducts
        products={products}
        onProductClick={setSelectedProduct}
      />

      <WhyChooseUs />

      <Testimonials />

      <About />

      <section
        id="products"
        className="max-w-7xl mx-auto py-16 px-6"
      >
        <div className="text-center mb-12">
          <p className="uppercase tracking-[0.3em] text-pink-700 text-sm font-semibold">
            Our Collection
          </p>

          <h2 className="mt-3 text-5xl text-gray-900">
            Browse More Products
          </h2>

          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Discover elegant pieces for every occasion.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-8">
          <input
            type="text"
            placeholder="Search by product name or ID..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-full border border-gray-300 px-6 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="rounded-full border border-gray-300 px-6 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
          >
            <option value="default">Sort By</option>
            <option value="priceLow">Price: Low to High</option>
            <option value="priceHigh">Price: High to Low</option>
            <option value="name">Name (A-Z)</option>
          </select>
        </div>

        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {["All", "Kurti", "Saree", "Bedsheet"].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full border transition-all duration-300 font-medium ${
                selectedCategory === category
                  ? "bg-pink-700 text-white border-pink-700 shadow-lg"
                  : "bg-white border-gray-200 text-gray-700 hover:border-pink-500 hover:text-pink-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <p className="text-center text-gray-500 mb-8">
          Showing{" "}
          <span className="font-semibold">
            {filteredProducts.length}
          </span>{" "}
          products
        </p>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="cursor-pointer"
                onClick={() => setSelectedProduct(product)}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🛍️</div>

            <h3 className="text-2xl font-semibold text-gray-800">
              No Products Found
            </h3>

            <p className="text-gray-500 mt-2">
              Try a different search or choose another category.
            </p>
          </div>
        )}
      </section>

      <Footer />

      <WhatsAppButton />

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
}

export default App;