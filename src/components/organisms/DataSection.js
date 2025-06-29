export default function DataSection() {
    return (
      <section className="bg-white py-20 text-black">
        <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-12">
          {/* Left side – Text */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-bold leading-tight">
              100%{" "}
              <span className="relative inline-block">
                your data
                <img
                  src="/yellosquiggle.png"
                  alt="highlight"
                  className="absolute left-0 bottom-0 w-[110%] object-contain pointer-events-none"
                />
              </span>
            </h2>
  
            <p className="mt-4 text-gray-700">
              The app is open source and your notes are saved to an open format,
              so you’ll always have access to them. Uses End-To-End Encryption
              (E2EE) to secure your notes and ensure no-one but yourself can
              access them.
            </p>
  
            <button className="mt-6 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-700 hover:shadow-lg transition">
              Read more →
            </button>
          </div>
  
          {/* Right side – Image */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/datalogo.png"
              alt="Data encryption diagram"
              className="w-[280px] md:w-[420px]"
            />
          </div>
        </div>
      </section>
    );
  }
  