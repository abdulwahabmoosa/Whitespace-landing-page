// components/HeroSection.js
export default function HeroSection() {
    return (
      <section className="bg-blue-900 text-white relative overflow-hidden">
        {/* Background Wave Lines */}
        <img 
          src=" /desktopsquiggle.png"
          alt="Background lines"
          className=" hidden md:block absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
        <img 
          src=" /mobilesquiggle.png"
          alt="Background lines"
          className="md:hidden absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
  
        {/* Content Container */}
        <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center relative z-10">
          {/* Text Left */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Get More Done with <br className="hidden md:block" /> whitepace
            </h1>
            <p className="text-gray-200 mb-6">
              Project management software that enables your teams to collaborate,
              plan, analyze and manage everyday tasks
            </p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white px-6 py-2 rounded cursor-pointer hover:shadow-xl transition duration-300">
              Try Whitepace free 
            </button>
          </div>
  
          {/* Placeholder Image or Illustration Right */}
          <div className="md:w-1/2 mt-10 md:mt-0">
            <div className="w-full h-64 bg-blue-200 rounded-md"></div>
          </div>
        </div>
      </section>
    );
  }
  
  