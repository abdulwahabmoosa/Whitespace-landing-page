export default function CustomiseSection() {
    return (
      <section className="bg-white text-black py-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          
          {/* Left Side – Image */}
          <div className="md:w-1/2 w-full flex justify-center">
            <div className="w-[280px] md:w-[500px] h-[200px] md:h-[350px] bg-blue-200 rounded-md"></div>
            {/* Replace above with an <img> if needed */}
          </div>
  
          {/* Right Side – Text */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-bold leading-tight">
              Customise it <br />
              <span className="relative inline-block align-baseline">
                <span className="relative z-10">to your needs</span>
                <img
                  src="/yellosquiggle.png"
                  alt="highlight"
                  className="absolute -bottom-1 left-0 w-full h-[0.7em] md:h-[1em] object-contain z-0 pointer-events-none"
                />
              </span>
            </h2>
  
            <p className="mt-4 text-gray-700">
              Customise the app with plugins, custom themes and multiple text
              editors (Rich Text or Markdown). Or create your own scripts and
              plugins using the Extension API.
            </p>
  
            <button className="mt-6 bg-blue-500 hover:bg-blue-700 text-white px-6 py-2 rounded hover:shadow-md transition">
              Let’s Go 
            </button>
          </div>
        </div>
      </section>
    );
  }
  