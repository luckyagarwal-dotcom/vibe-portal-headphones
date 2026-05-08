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
          ? "sticky top-0 z-50 px-6 lg:px-16 py-6 backdrop-blur-md bg-black/80 border-b border-white/10"
          : "sticky top-0 z-50 px-6 lg:px-16 py-6 backdrop-blur-md bg-[#f5f1eb]/80 border-b border-black/5"
      }
    >

      <div className="flex items-center justify-between">

        {/* LOGO */}
        <h1 className="text-2xl tracking-[8px] font-semibold">
          PORTAL
        </h1>

        {/* DESKTOP NAV */}
        <ul className="hidden lg:flex gap-10 text-sm font-medium">

          <a
            href="#top"
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

        {/* RIGHT */}
        <div className="flex items-center gap-5">

          {/* DARK MODE */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="hidden lg:flex"
          >
            {darkMode ? <Sun /> : <Moon />}
          </button>

          {/* CART */}
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

          {/* MOBILE MENU BUTTON */}
          <button
            className="lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>

      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="lg:hidden mt-8 bg-white dark:bg-[#1a1a1a] rounded-[30px] p-8 shadow-sm">

          <ul className="flex flex-col gap-6 text-lg font-medium">

            <a
              href="#top"
              onClick={() => {
                setActive("HOME");
                setMenuOpen(false);
              }}
              className={`pb-1 duration-300 ${
                active === "HOME"
                  ? "text-black dark:text-white"
                  : "text-gray-500"
              }`}
            >
              HOME
            </a>

            <a
              href="#features"
              onClick={() => {
                setActive("FEATURES");
                setMenuOpen(false);
              }}
              className={`pb-1 duration-300 ${
                active === "FEATURES"
                  ? "text-black dark:text-white"
                  : "text-gray-500"
              }`}
            >
              FEATURES
            </a>

            <a
              href="#products"
              onClick={() => {
                setActive("PRODUCTS");
                setMenuOpen(false);
              }}
              className={`pb-1 duration-300 ${
                active === "PRODUCTS"
                  ? "text-black dark:text-white"
                  : "text-gray-500"
              }`}
            >
              PRODUCTS
            </a>

            <a
              href="#faq"
              onClick={() => {
                setActive("FAQ");
                setMenuOpen(false);
              }}
              className={`pb-1 duration-300 ${
                active === "FAQ"
                  ? "text-black dark:text-white"
                  : "text-gray-500"
              }`}
            >
              FAQ
            </a>

            <a
              href="#contact"
              onClick={() => {
                setActive("CONTACT");
                setMenuOpen(false);
              }}
              className={`pb-1 duration-300 ${
                active === "CONTACT"
                  ? "text-black dark:text-white"
                  : "text-gray-500"
              }`}
            >
              CONTACT
            </a>

          </ul>

          {/* MOBILE ACTIONS */}
          <div className="flex items-center gap-5 mt-8">

            <button
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? <Sun /> : <Moon />}
            </button>

            <div
              className="relative cursor-pointer"
              onClick={() => {
                openCart();
                setMenuOpen(false);
              }}
            >

              <ShoppingBag />

              {cartCount > 0 && (
                <div className="absolute -top-2 -right-2 w-5 h-5 bg-black text-white text-xs rounded-full flex items-center justify-center">
                  {cartCount}
                </div>
              )}

            </div>

          </div>

        </div>
      )}

    </nav>
  );
}

export default Navbar;