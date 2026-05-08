function Footer() {
  return (
    <footer
      id="contact"
      className="bg-black text-white px-6 lg:px-16 pt-24 pb-12"
    >

      {/* TOP */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-20">

        {/* BRAND */}
        <div>

          <h2 className="text-4xl font-semibold tracking-[6px] mb-6">
            PORTAL
          </h2>

          <p className="text-gray-400 leading-relaxed max-w-md">
            Premium audio engineered for immersive listening,
            modern aesthetics and all-day comfort.
          </p>

        </div>

        {/* LINKS */}
        <div>

          <h3 className="text-xl font-semibold mb-6">
            Navigation
          </h3>

          <ul className="space-y-4 text-gray-400">

            <li>
              <a
                href="#top"
                className="hover:text-white duration-300"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#features"
                className="hover:text-white duration-300"
              >
                Features
              </a>
            </li>

            <li>
              <a
                href="#products"
                className="hover:text-white duration-300"
              >
                Products
              </a>
            </li>

            <li>
              <a
                href="#faq"
                className="hover:text-white duration-300"
              >
                Faq
              </a>
            </li>

          </ul>

        </div>

        {/* CONTACT */}
        <div>

          <h3 className="text-xl font-semibold mb-6">
            Contact
          </h3>

          <div className="space-y-4 text-gray-400">

            <p>
              support@portal.audio
            </p>

            <p>
              +91 98765 43210
            </p>

            <p>
              Kolkata, India
            </p>

          </div>

        </div>

      </div>

      {/* BOTTOM */}
      <div className="pt-8 border-t border-white/10 flex flex-col lg:flex-row items-center justify-between gap-6">

        <p className="text-gray-400 text-sm">
          © 2026 PORTAL. All rights reserved.
        </p>

        <div className="flex gap-8 text-sm text-gray-400">

          <a
            href="#"
            className="hover:text-white duration-300"
          >
            Instagram
          </a>

          <a
            href="#"
            className="hover:text-white duration-300"
          >
            Twitter
          </a>

          <a
            href="#"
            className="hover:text-white duration-300"
          >
            YouTube
          </a>

        </div>

      </div>

    </footer>
  );
}

export default Footer;