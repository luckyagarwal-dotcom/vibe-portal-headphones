function Testimonials() {
  const reviews = [
    {
      name: "Alex Carter",
      review:
        "The sound quality is unreal. Probably the best headphones I've owned.",
    },
    {
      name: "Sophia Lee",
      review:
        "Super comfortable even during long listening sessions.",
    },
    {
      name: "Michael Jordan",
      review:
        "Premium feel, amazing battery life and beautiful design.",
    },
  ];

  return (
    <section className="px-6 lg:px-12 py-24">

      <div className="text-center mb-16">

        <p className="text-[#c8a97e] font-semibold tracking-wide mb-4">
          TESTIMONIALS
        </p>

        <h2 className="text-4xl lg:text-5xl font-semibold">
          What Customers Say
        </h2>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-[30px]"
          >

            <div className="flex mb-6 text-yellow-500">
              ★★★★★
            </div>

            <p className="text-gray-600 mb-8 leading-relaxed">
              "{review.review}"
            </p>

            <h3 className="text-xl font-semibold">
              {review.name}
            </h3>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Testimonials;