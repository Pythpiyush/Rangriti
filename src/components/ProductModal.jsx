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
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl overflow-hidden shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white shadow text-xl hover:bg-gray-100"
          >
            ✕
          </button>

          <div className="h-80 bg-gradient-to-br from-pink-100 to-pink-200 flex items-center justify-center">
            <div className="text-center">
              <div className="text-7xl">🛍️</div>
              <p className="mt-3 text-gray-600">
                Product Photo
              </p>
            </div>
          </div>
        </div>

        <div className="p-8">
          <p className="uppercase tracking-[0.3em] text-pink-700 text-sm font-semibold">
            {product.category}
          </p>

          <h2 className="text-4xl mt-2">
            {product.name}
          </h2>

          <p className="text-3xl font-bold text-pink-700 mt-3">
            ₹{product.price}
          </p>

          <p className="mt-6 text-gray-600 leading-8">
            {product.description}
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">
                Fabric
              </h3>

              <p className="text-gray-600">
                {product.fabric}
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 mb-2">
                Available Sizes
              </h3>

              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <span
                    key={size}
                    className="px-3 py-1 rounded-full bg-pink-100 text-pink-700"
                  >
                    {size}
                  </span>
                ))}
              </div>
            </div>

            <div className="md:col-span-2">
              <h3 className="font-semibold text-gray-800 mb-2">
                Available Colors
              </h3>

              <div className="flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <span
                    key={color}
                    className="px-3 py-1 rounded-full bg-gray-100"
                  >
                    {color}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <a
            href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-xl font-semibold flex justify-center transition"
          >
            Order on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;