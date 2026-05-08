import { motion } from "framer-motion";
import HeadphoneModel from "./HeadphoneModel";

function Hero() {
  return (
    <section className="px-6 lg:px-12 pt-10 pb-32 overflow-hidden">

      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >

          <p className="text-[#b88e63] font-semibold tracking-[4px] uppercase">
            Audio Beyond Reality
          </p>

          <h1 className="text-6xl lg:text-8xl font-semibold leading-[0.95] tracking-[-3px]">
            YOUR WORLD,
            <br />
            YOUR WAY
          </h1>

          <p className="text-gray-500 text-xl max-w-xl leading-relaxed">
            Experience immersive premium sound crafted for modern listeners.
          </p>

          <div className="flex gap-6 flex-wrap">

           <a
  href="#products"
  className="bg-black text-white px-8 py-4 rounded-full hover:scale-105 hover:shadow-[0_0_40px_rgba(0,0,0,0.25)] duration-300 inline-block"
>
  Explore Collection
</a>

            <a
  href="#features"
  className="border border-black/10 dark:border-white/10 px-8 py-4 rounded-full hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black hover:scale-105 duration-300 inline-block"
>
  Learn More
</a>

          </div>

          <div className="flex gap-12 pt-10">

            <div>
              <h3 className="text-3xl font-semibold">
                10K+
              </h3>

              <p className="text-gray-500">
                Happy Customers
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-semibold">
                4.9
              </h3>

              <p className="text-gray-500">
                Average Rating
              </p>
            </div>

          </div>

        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >

          <div className="absolute w-[500px] h-[500px] bg-[#ece7e1] rounded-full blur-3xl opacity-80"></div>

          <div className="relative overflow-hidden w-[340px] h-[340px] lg:w-[620px] lg:h-[620px] rounded-full bg-gradient-to-br from-[#f3f0eb] to-[#e7e1d9] flex items-center justify-center shadow-2xl">

            <HeadphoneModel />
          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default Hero;
