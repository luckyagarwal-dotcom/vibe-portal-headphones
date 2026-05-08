import { motion } from "framer-motion";

function ProductCard({
  image,
  title,
  color,
  price,
  description,
  onClick,
  addToCart,
}) {
  return (
    <motion.div
      onClick={onClick}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="group bg-white/70 backdrop-blur-md rounded-[40px] p-8 cursor-pointer border border-white/50 shadow-sm hover:shadow-2xl hover:-translate-y-3 duration-500"
    >

      {/* IMAGE AREA */}
      <div className="relative flex justify-center">

        <div className="absolute w-44 h-44 bg-[#efe7dc] rounded-full blur-2xl opacity-80 group-hover:scale-110 duration-500"></div>

        <img
          src={image}
          alt={title}
          className="relative z-10 w-[220px] h-[220px] object-contain group-hover:scale-105 duration-500"
        />

      </div>

      {/* CONTENT */}
      <div className="mt-8">

        <div className="flex items-start justify-between mb-6">

          <div>

            <h3 className="text-2xl font-semibold mb-2">
              {title}
            </h3>

            <p className="text-gray-500 dark:text-gray-400">
              {color}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-3 leading-relaxed">
  {description}
</p>

          </div>

          <div className="text-xl font-semibold">
            ${price}
          </div>

        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            addToCart();
          }}
          className="w-full bg-black text-white py-4 rounded-full hover:bg-gray-900 duration-300"
        >
          Add to Cart
        </button>

      </div>

    </motion.div>
  );
}

export default ProductCard;