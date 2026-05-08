import featureImage from "../assets/features.png";

function Features() {
  const features = [
    {
      title: "Spatial Audio",
      desc: "Immersive surround sound experience.",
    },
    {
      title: "40Hr Battery",
      desc: "All-day playback with fast charging.",
    },
    {
      title: "Premium Comfort",
      desc: "Soft cushions for extended sessions.",
    },
    {
      title: "Bluetooth 5.3",
      desc: "Stable and ultra-fast connectivity.",
    },
  ];

  return (
    <section id="features" className="px-6 lg:px-16 py-32">

      <div className="text-center mb-16">

        <p className="text-[#b88e63] font-semibold tracking-wide mb-4">
          WHY PORTAL
        </p>

        <h2 className="text-4xl lg:text-5xl font-semibold">
          Designed For Pure Sound
        </h2>

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-12">

        {/* LEFT FEATURES */}
        <div className="space-y-10">

          {features.slice(0, 2).map((item, index) => (
            <div key={index}>

              <h3 className="text-2xl font-semibold mb-2">
                {item.title}
              </h3>

              <p className="text-gray-500">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

        {/* CENTER IMAGE */}
        <div className="flex justify-center">

          <div className="w-[320px] h-[320px] lg:w-[420px] lg:h-[420px] rounded-full bg-[#ece7e1] flex items-center justify-center">

            <img
              src={featureImage}
              alt="Headphones"
              className="w-[260px] lg:w-[340px] object-contain"
            />

          </div>

        </div>

        {/* RIGHT FEATURES */}
        <div className="space-y-10">

          {features.slice(2, 4).map((item, index) => (
            <div key={index}>

              <h3 className="text-2xl font-semibold mb-2">
                {item.title}
              </h3>

              <p className="text-gray-500">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Features;