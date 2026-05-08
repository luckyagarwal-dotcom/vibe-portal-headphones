import {
  ShoppingBag,
  Menu,
  X,
  Moon,
  Sun,
} from "lucide-react";

import { useState } from "react";

function Navbar({
  cartCount,
  openCart,
  darkMode,
  setDarkMode,
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("HOME");

  return (
    <nav
      className={
        darkMode
          ? "sticky top-0 z-50 px-6 lg:px-12 py-6 backdrop-blur-md bg-black/80 border-b border-white/10"
          : "sticky top-0 z-50 px-6 lg:px-12 py-6 backdrop-blur-md bg-[#f8f6f3]/80 border-b border-black/5"
      }
    >

      <div className="flex items-center justify-between">

        <h1 className="text-2xl tracking-[8px] font-semibold">
          PORTAL
        </h1>

        <ul className="hidden lg:flex gap-10 text-sm font-medium">

          <a
  href="#"
  onClick={() => setActive("HOME")}
  className={`pb-1 cursor-pointer duration-300 ${
    active === "HOME"
      ? "border-b-2 border-current"
      : "text-gray-500 hover:text-current"
  }`}
>
  HOME
</a>

 <a
  href="#features"
  onClick={() => setActive("FEATURES")}
  className={`pb-1 cursor-pointer duration-300 ${
    active === "FEATURES"
      ? "border-b-2 border-current"
      : "text-gray-500 hover:text-current"
  }`}
>
  FEATURES
</a>

 <a
  href="#products"
  onClick={() => setActive("PRODUCTS")}
  className={`pb-1 cursor-pointer duration-300 ${
    active === "PRODUCTS"
      ? "border-b-2 border-current"
      : "text-gray-500 hover:text-current"
  }`}
>
  PRODUCTS
</a>

<a
  href="#faq"
  onClick={() => setActive("FAQ")}
  className={`pb-1 cursor-pointer duration-300 ${
    active === "FAQ"
      ? "border-b-2 border-current"
      : "text-gray-500 hover:text-current"
  }`}
>
  FAQ
</a>

<a
  href="#contact"
  onClick={() => setActive("CONTACT")}
  className={`pb-1 cursor-pointer duration-300 ${
    active === "CONTACT"
      ? "border-b-2 border-current"
      : "text-gray-500 hover:text-current"
  }`}
>
  CONTACT
</a>

        </ul>

        <div className="flex items-center gap-5">

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="hidden lg:flex"
          >
            {darkMode ? <Sun /> : <Moon />}
          </button>


          <div
            className="relative cursor-pointer hidden lg:block"
            onClick={openCart}
          >

            <ShoppingBag />

            {cartCount > 0 && (
              <div className="absolute -top-2 -right-2 w-5 h-5 bg-white text-black text-xs rounded-full flex items-center justify-center">
                {cartCount}
              </div>
            )}

          </div>

          <button
            className="lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>

      </div>

      {menuOpen && (
        <div className="lg:hidden mt-8 bg-white dark:bg-[#1a1a1a] rounded-[30px] p-8 shadow-sm">

          <ul className="flex flex-col gap-6 text-lg font-medium">
            <li>HOME</li>
            <li>FEATURES</li>
            <li>PRODUCTS</li>
            <li>FAQ</li>
            <li>CONTACT</li>
          </ul>

        </div>
      )}

    </nav>
  );
}

export default Navbar;