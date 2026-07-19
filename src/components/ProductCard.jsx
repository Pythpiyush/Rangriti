function ProductCard({ product }) {
  const phoneNumber = "917042038422"; // Replace with your mother's WhatsApp number

  const message = `Hi! I'm interested in:

${product.name}
Product ID: ${product.id}
Price: ₹${product.price}`;

  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
      {/* Image */}
      <div className="relative h-80 overflow-hidden bg-gradient-to-br from-pink-100 via-pink-50 to-white">

        {product.isNew && (
          <span className="absolute top-4 left-4 bg-pink-600 text-white text-xs px-3 py-1 rounded-full z-10">
            NEW
          </span>
        )}

        {product.isFeatured && (
          <span className="absolute top-4 right-4 bg-yellow-400 text-gray-900 text-xs px-3 py-1 rounded-full z-10">
            ⭐ Featured
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
            <div className="text-7xl">👗</div>
            <p className="mt-4 text-gray-500">
              Product Image
            </p>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">

        <p className="uppercase tracking-widest text-xs text-pink-600 font-semibold">
          {product.category}
        </p>

        <h3 className="mt-2 text-2xl font-semibold text-gray-900">
          {product.name}
        </h3>

        <p className="mt-2 text-gray-500 line-clamp-2">
          {product.description}
        </p>

        <div className="mt-5 flex items-center justify-between">
          <span className="text-2xl font-bold text-pink-700">
            ₹{product.price}
          </span>

          <span className="text-sm text-gray-400">
            {product.id}
          </span>
        </div>

        <a
          href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
          target="_blank"
          rel="noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="mt-6 w-full block text-center bg-pink-700 hover:bg-pink-800 text-white py-3 rounded-full font-semibold transition-all duration-300"
        >
          Order on WhatsApp
        </a>

      </div>
    </div>
  );
}

export default ProductCard;