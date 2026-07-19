import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ShopCategory from "./components/ShopCategory";
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

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);

    const section = document.getElementById("products");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

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
    <div className="min-h-screen bg-[#FFF8F2]">
      <Navbar />

      <Hero />

      <ShopCategory
        onCategorySelect={handleCategorySelect}
      />

      <FeaturedProducts
        products={products}
        onProductClick={setSelectedProduct}
      />

      <section
        id="products"
        className="max-w-7xl mx-auto py-24 px-6"
      >
        <div className="text-center mb-14">

          <p className="uppercase tracking-[0.4em] text-[#8B1E3F] text-sm font-semibold">
            Our Collection
          </p>

          <h2 className="mt-5 text-5xl font-bold text-[#2E2E2E]">
            Explore Every Style
          </h2>

          <div className="w-24 h-1 bg-[#D4AF37] rounded-full mx-auto mt-6"></div>

          <p className="mt-8 text-lg text-gray-600 max-w-2xl mx-auto leading-8">
            Browse our complete collection and discover elegant
            designs crafted with comfort, quality, and timeless
            fashion.
          </p>

        </div>

        {/* Search & Sort */}

        <div className="bg-white border border-[#F1E4D6] rounded-3xl shadow-sm p-6 max-w-5xl mx-auto mb-10">

          <div className="grid md:grid-cols-2 gap-4">

            <input
              type="text"
              placeholder="Search by product name or ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-2xl border border-[#E5D8C8] px-6 py-4 focus:outline-none focus:ring-2 focus:ring-[#8B1E3F]"
            />

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="rounded-2xl border border-[#E5D8C8] px-6 py-4 focus:outline-none focus:ring-2 focus:ring-[#8B1E3F]"
            >
              <option value="default">Sort By</option>
              <option value="priceLow">Price: Low to High</option>
              <option value="priceHigh">Price: High to Low</option>
              <option value="name">Name (A-Z)</option>
            </select>

          </div>

          <div className="flex justify-center gap-3 mt-8 flex-wrap">

            {["All", "Kurti", "Saree", "Bedsheet"].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-[#8B1E3F] text-white shadow-lg"
                    : "bg-[#FFF8F2] border border-[#E5D8C8] text-gray-700 hover:border-[#8B1E3F] hover:text-[#8B1E3F]"
                }`}
              >
                {category}
              </button>
            ))}

          </div>

        </div>

        <p className="text-center text-gray-600 mb-10 text-lg">
          Showing{" "}
          <span className="font-bold text-[#8B1E3F]">
            {filteredProducts.length}
          </span>{" "}
          products
        </p>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

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
          <div className="bg-white rounded-3xl border border-[#F1E4D6] shadow-sm py-20 text-center">

            <div className="text-7xl">
              🛍️
            </div>

            <h3 className="mt-6 text-3xl font-bold text-[#2E2E2E]">
              No Products Found
            </h3>

            <p className="mt-3 text-gray-600">
              Try another category or search for a different product.
            </p>

          </div>
        )}
      </section>

      <WhyChooseUs />

      <Testimonials />

      <About />

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
