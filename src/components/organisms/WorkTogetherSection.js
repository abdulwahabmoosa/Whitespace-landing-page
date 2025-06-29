// components/WorkTogetherSection.js
export default function WorkTogetherSection() {
  return (
    <section className="bg-white py-20 text-black">
      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Left side – Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/Work Together Image.png"
            alt="Orbit with team members"
            className="w-[280px] md:w-[400px]"
          />
        </div>

        {/* Right side – Text */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold leading-tight">
            Work{" "}
            <span className="relative inline-block">
              together
              <img
                src="/yellosquiggle.png"
                alt="highlight"
                className="absolute left-0 bottom-0 w-300% object-contain pointer-events-none"
              />
            </span>
          </h2>

          <p className="mt-4 text-gray-700">
            With whitepace, share your notes with your colleagues and
            collaborate on them. You can also publish a note to the internet and
            share the URL with others.
          </p>

          <button className="mt-6 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-700 hover:shadow-lg transition">
            Try it now →
          </button>
        </div>
      </div>
    </section>
  );
}
