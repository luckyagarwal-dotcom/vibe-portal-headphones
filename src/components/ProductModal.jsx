import { X } from "lucide-react";
import { motion } from "framer-motion";

function ProductModal({ product, onClose, addToCart }) {
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-6">

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-[40px] max-w-4xl w-full p-10 relative"
      >

        <button
          onClick={onClose}
          className="absolute top-6 right-6"
        >
          <X />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div className="flex justify-center">

            <img
              src={product.image}
              alt={product.title}
              className="w-[300px] object-contain"
            />

          </div>

          <div>

            <p className="text-[#c8a97e] font-semibold mb-4">
              PREMIUM AUDIO
            </p>

            <h2 className="text-5xl font-semibold mb-6">
              {product.title}
            </h2>

            <p className="text-gray-500 dark:text-gray-400 mb-8 leading-relaxed">
  {product.description}
</p>

            <div className="text-3xl font-semibold mb-8">
              ${product.price}
            </div>

          <button
  onClick={() => addToCart(product)}
  className="bg-black text-white px-8 py-4 rounded-full hover:scale-105 duration-300"
>
  Add to Cart
</button>

          </div>

        </div>

      </motion.div>

    </div>
  );
}

export default ProductModal;