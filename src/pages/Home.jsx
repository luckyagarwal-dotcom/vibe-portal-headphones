import { useState } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import Features from "../components/Features";
import PromoSection from "../components/PromoSection";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import ProductModal from "../components/ProductModal";
import CartSidebar from "../components/CartSidebar";

import product1 from "../assets/black.png";
import product2 from "../assets/grey.png";
import product3 from "../assets/white.png";

function Home() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

const products = [
  {
    image: product3,
    title: "Portal Max",
    color: "Cream White",
    price: "299",
    description:
      "Balanced premium sound with adaptive spatial audio and all-day comfort.",
  },
  {
    image: product1,
    title: "Portal Air",
    color: "Matte Black",
    price: "249",
    description:
      "Ultra-lightweight headphones designed for travel and everyday listening.",
  },
  {
    image: product2,
    title: "Portal Pro",
    color: "Silver Gray",
    price: "349",
    description:
      "Studio-grade audio precision crafted for creators and audiophiles.",
  },
];

  return (
    <div className={darkMode ? "dark" : ""}>
      <div id="top"className="bg-[#f5f1eb] dark:bg-black text-black dark:text-white min-h-screen duration-500">

        <Navbar
          cartCount={cart.length}
          openCart={() => setCartOpen(true)}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

        <Hero />

        <section id="products" className="px-6 lg:px-16 pb-32">

          <div className="flex items-center justify-between mb-10">

            <h2 className="text-4xl font-semibold">
              Freshly Dropped
            </h2>

            <button className="text-gray-500 hover:text-black dark:hover:text-white duration-300">
              View All →
            </button>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {products.map((product, index) => (
              <ProductCard

                key={index}
                image={product.image}
                title={product.title}
                description={product.description}
                color={product.color}
                price={product.price}
                onClick={() => setSelectedProduct(product)}
                addToCart={() => addToCart(product)}
              />
            ))}

          </div>

        </section>

        <Features />

        <PromoSection />

        <Testimonials />

        <Footer />

        {selectedProduct && (
        <ProductModal
  product={selectedProduct}
  onClose={() => setSelectedProduct(null)}
  addToCart={addToCart}
/>
        )}

        {cartOpen && (
          <CartSidebar
            cart={cart}
            onClose={() => setCartOpen(false)}
            removeFromCart={removeFromCart}
          />
        )}

      </div>
    </div>
  );
}

export default Home;