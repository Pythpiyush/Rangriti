function ProductModal({ product, onClose }) {
  if (!product) return null;

  const phoneNumber = "917042038422"; // Replace with your mom's WhatsApp number

  const message = `Hi! I'm interested in:

${product.name}
Product ID: ${product.id}
Price: ₹${product.price}

Please share more details.`;

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl overflow-hidden shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image Section */}
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white shadow-lg text-xl text-gray-700 hover:bg-[#8B1E3F] hover:text-white transition-all duration-300"
          >
            ✕
          </button>

          <div className="h-96 bg-gradient-to-br from-[#FFF8F2] via-[#F8EAD8] to-[#F2DDC2] flex items-center justify-center">
            {product.image ? (
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="text-center">
                <div className="text-8xl">🛍️</div>
                <p className="mt-4 text-gray-500">
                  Product Photo
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Product Details */}
        <div className="p-8 md:p-10">

          <p className="uppercase tracking-[0.35em] text-[#8B1E3F] text-sm font-semibold">
            {product.category}
          </p>

          <h2 className="text-4xl font-bold text-gray-900 mt-3">
            {product.name}
          </h2>

          <p className="text-3xl font-bold text-[#8B1E3F] mt-4">
            ₹{product.price}
          </p>

          <p className="mt-7 text-gray-600 leading-8 text-lg">
            {product.description}
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-10">

            <div>
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">
                Fabric
              </h3>

              <p className="text-gray-600">
                {product.fabric}
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">
                Available Sizes
              </h3>

              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <span
                    key={size}
                    className="px-4 py-2 rounded-full bg-[#FFF2E7] text-[#8B1E3F] border border-[#E7D5C5] font-medium transition hover:bg-[#8B1E3F] hover:text-white cursor-pointer"
                  >
                    {size}
                  </span>
                ))}
              </div>
            </div>

            <div className="md:col-span-2">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">
                Available Colors
              </h3>

              <div className="flex flex-wrap gap-3">
                {product.colors.map((color) => (
                  <span
                    key={color}
                    className="px-4 py-2 rounded-full bg-gray-100 border border-gray-200 text-gray-700 font-medium"
                  >
                    {color}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* WhatsApp Button */}
          <a
            href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-12 w-full bg-[#8B1E3F] hover:bg-[#6E1632] text-white py-4 rounded-2xl font-semibold text-lg flex items-center justify-center gap-3 transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1"
          >
            💬 Order on WhatsApp
          </a>

        </div>
      </div>
    </div>
  );
}

export default ProductModal;
