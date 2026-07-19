function ProductCard({ product }) {
  const phoneNumber = "917042038422";

  const message = `Hi! I'm interested in:

${product.name}
Product ID: ${product.id}
Price: ₹${product.price}`;

  return (
    <div className="group bg-white rounded-[28px] overflow-hidden border border-[#F1E4D6] shadow-sm hover:shadow-2xl hover:shadow-[#8B1E3F]/10 transition-all duration-500 hover:-translate-y-2 cursor-pointer">

      {/* Image Section */}
      <div className="relative h-96 overflow-hidden bg-gradient-to-br from-[#FFF8F2] via-[#F7EBDD] to-[#F2DDC2]">

        {product.isNew && (
          <span className="absolute top-4 left-4 z-20 bg-[#8B1E3F] text-white text-xs font-semibold px-4 py-2 rounded-full shadow-lg">
            New Arrival
          </span>
        )}

        {product.isFeatured && (
          <span className="absolute top-4 right-4 z-20 bg-[#D4AF37] text-[#2E2E2E] text-xs font-semibold px-4 py-2 rounded-full shadow-lg">
            ★ Bestseller
          </span>
        )}

        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center">
            <div className="text-8xl">👗</div>

            <p className="mt-4 text-gray-500 font-medium">
              Product Image
            </p>
          </div>
        )}

        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-500"></div>

      </div>

      {/* Content */}
      <div className="p-7">

        <p className="uppercase tracking-[0.25em] text-xs font-semibold text-[#8B1E3F]">
          {product.category}
        </p>

        <h3 className="mt-3 text-2xl font-bold text-[#2E2E2E] group-hover:text-[#8B1E3F] transition-colors duration-300">
          {product.name}
        </h3>

        <p className="mt-3 text-gray-600 leading-7 min-h-[56px]">
          {product.description}
        </p>

        <div className="mt-6 flex justify-between items-end">

          <div>
            <p className="text-sm text-gray-400">
              Starting From
            </p>

            <p className="text-3xl font-bold text-[#8B1E3F]">
              ₹{product.price}
            </p>
          </div>

          <span className="text-xs text-gray-400 font-medium">
            {product.id}
          </span>

        </div>

        <a
          href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
          target="_blank"
          rel="noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="mt-7 w-full flex items-center justify-center gap-2 bg-[#8B1E3F] hover:bg-[#6E1632] text-white py-4 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
        >
          💬 Order on WhatsApp
        </a>

      </div>

    </div>
  );
}

export default ProductCard;
