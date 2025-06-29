export default function YourWorkSection() {
    return (
      <section className="bg-[#043873] text-white px-6 py-20">
        <div className="max-w-4xl mx-auto text-center sm:text-left">
          <h2 className="text-3xl sm:text-5xl font-bold leading-tight">
            Your work, everywhere{" "}
            <span className="relative inline-block">
              <span className="relative z-10">you are</span>
              <img
                src="/bluesquiggle.png"
                alt="underline"
                className="absolute left-0 bottom-0 w-[115%] sm:w-[120%] h-auto object-contain pointer-events-none"
              />
            </span>
          </h2>
  
          <p className="text-sm sm:text-base text-gray-200 mt-6 max-w-xl mx-auto sm:mx-0">
            Access your notes from your computer, phone or tablet by synchronising
            with various services, including whitepace, Dropbox and OneDrive. The
            app is available on Windows, macOS, Linux, Android and iOS. A terminal
            app is also available!
          </p>
  
          <div className="mt-8">
            <button className="bg-blue-400 hover:bg-blue-500 text-white font-medium py-3 px-6 rounded-lg transition">
              Try Taskey →
            </button>
          </div>
        </div>
      </section>
    );
  }
  