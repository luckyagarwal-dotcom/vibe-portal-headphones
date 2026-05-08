import limitedBox from "../assets/limitedphoto.png";

function PromoSection() {
  return (
    <section id="faq" className="px-6 lg:px-16 pb-32">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* LEFT CARD */}
        <div className="bg-black text-white rounded-[40px] p-10 min-h-[350px] flex flex-col justify-between">

          <div>

            <p className="text-gray-400 mb-4">
              PREMIUM EXPERIENCE
            </p>

            <h2 className="text-4xl font-semibold leading-tight mb-6">
              Next-Level <br />
              Noise Cancellation
            </h2>

            <p className="text-gray-400 max-w-sm">
              Hear only what matters with adaptive sound isolation.
            </p>

          </div>

          <button className="bg-white text-black px-6 py-3 rounded-full w-fit hover:scale-105 duration-300">
            Explore More
          </button>

        </div>

        {/* RIGHT CARD */}
        <div className="bg-[#ece7e1] rounded-[40px] p-10 min-h-[400px] flex flex-col items-center justify-center text-center">

          <img
            src={limitedBox}
            alt="Headphones"
            className="w-[220px] object-contain mb-6"
          />

          <h2 className="text-3xl font-semibold mb-4">
            Limited Edition
          </h2>

          <p className="text-gray-500 max-w-sm">
            Crafted for audiophiles who appreciate timeless design and precision sound.
          </p>

        </div>

      </div>

    </section>
  );
}

export default PromoSection;