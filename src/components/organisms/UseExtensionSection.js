// components/UseExtensionSection.js
export default function UseExtensionSection() {
    return (
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          
          {/* 📝 Left Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-bold leading-tight">
              Use as <br />
              <span className="relative inline-block align-baseline">
                <span className="relative z-10">Extension</span>
                <img
                  src="/yellosquiggle.png"
                  alt="highlight"
                  className="absolute -bottom-1 left-0 w-full h-[0.6em] md:h-[0.9em] object-contain z-0 pointer-events-none"
                />
              </span>
            </h2>
  
            <p className="text-gray-200 mt-4">
              Use the web clipper extension, available on Chrome and Firefox,
              to save web pages or take screenshots as notes.
            </p>
  
            <button className="mt-6 bg-blue-500 hover:bg-blue-700 text-white px-6 py-2 rounded cursor-pointer hover:shadow-xl transition duration-300">
              Let’s Go 
            </button>
          </div>
  
          {/* 🖼️ Right Side – Placeholder */}
          <div className="md:w-1/2 w-full h-64 bg-blue-200 rounded-md"></div>
        </div>
      </section>
    );
  }
  