import { X } from "lucide-react";
import { motion } from "framer-motion";

function CartSidebar({ cart, onClose, removeFromCart }) {
  const total = cart.reduce(
    (sum, item) => sum + Number(item.price),
    0
  );

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex justify-end">

      <motion.div
        initial={{ x: 500 }}
        animate={{ x: 0 }}
        exit={{ x: 500 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md bg-[#f8f6f3] h-screen p-8 overflow-y-auto shadow-2xl"
      >

        {/* TOP */}
        <div className="flex items-center justify-between mb-10">

          <div>

            <p className="text-sm tracking-[3px] uppercase text-gray-500 mb-2">
              Shopping Cart
            </p>

            <h2 className="text-4xl font-semibold">
              Your Cart
            </h2>

          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm"
          >
            <X size={20} />
          </button>

        </div>

        {/* EMPTY */}
        {cart.length === 0 && (
          <div className="h-[70vh] flex items-center justify-center text-center">

            <div>

              <h3 className="text-2xl font-semibold mb-4">
                Cart is Empty
              </h3>

              <p className="text-gray-500">
                Add some premium headphones.
              </p>

            </div>

          </div>
        )}

        {/* ITEMS */}
        <div className="space-y-6">

          {cart.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-[30px] p-5 flex gap-4 shadow-sm"
            >

              <div className="w-24 h-24 bg-[#ece7e1] rounded-[20px] flex items-center justify-center">

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-20 object-contain"
                />

              </div>

              <div className="flex-1">

                <h3 className="text-lg font-semibold mb-1">
                  {item.title}
                </h3>

                <p className="text-gray-500 text-sm mb-3">
                  {item.color}
                </p>

                <div className="font-semibold text-lg">
                  ${item.price}
                </div>

              </div>

              <button
                onClick={() => removeFromCart(index)}
                className="text-red-500 text-sm"
              >
                Remove
              </button>

            </div>
          ))}

        </div>

        {/* FOOTER */}
        {cart.length > 0 && (
          <div className="mt-10 border-t border-black/10 pt-8">

            <div className="flex items-center justify-between text-2xl font-semibold mb-6">

              <span>Total</span>

              <span>${total}</span>

            </div>

            <button className="w-full bg-black text-white py-4 rounded-full hover:scale-[1.02] duration-300">
              Checkout
            </button>

          </div>
        )}

      </motion.div>

    </div>
  );
}

export default CartSidebar;