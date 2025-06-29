export default function FavouriteSection() {
    return (
      <section className="relative bg-blue-900 text-white py-20 px-6 overflow-hidden">
        {/* Background squiggles */}
        <img
          src="/desksquig2.png"
          alt="desktop wave"
          className="hidden sm:block absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
        <img
          src="/mobsquig2.png"
          alt="mobile wave"
          className="sm:hidden absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
  
        <div className="relative max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
          {/* Left – image */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/log2.png"
              alt="Apps network"
              className="w-[260px] md:w-[360px]"
            />
          </div>
  
          {/* Right – text */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
              Work with Your <br className="sm:hidden" />
              Favorite Apps Using <br className="sm:hidden" />
              whitepace
            </h2>
  
            <p className="mt-4 text-gray-200 text-sm sm:text-base max-w-lg mx-auto md:mx-0">
              Whitepace teams up with your favorite software. Integrate with over
              1000+ apps with Zapier to have all the tools you need for your
              project success.
            </p>
  
            <button className="mt-6 bg-blue-400 hover:bg-blue-500 text-white font-medium py-3 px-6 rounded-lg transition">
              Read more
            </button>
          </div>
        </div>
      </section>
    );
  }
  