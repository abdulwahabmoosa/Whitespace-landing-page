// components/ProjectManagementSection.js
export default function ProjectManagementSection() {
    return (
      <section className="relative bg-white text-black overflow-hidden py-16">
        {/* Background squiggles */}
        <img
          src="/projmansquig.png"
          alt="background squiggle"
          className="hidden md:block absolute w-[180px] left-[-40px] top-[30px]"
        />
        <img
          src="/mobprojmansquig.png"
          alt="background squiggle"
          className="md:hidden absolute top-0 left-0 w-70% "
        />
  
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          {/* Left Side */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-bold leading-tight">
                Project <br />
                <span className="relative inline-block">
                  <span className="relative z-10">Management</span>
                  <img
                    src="/Element.svg"
                    alt="highlight"
                    className="absolute bottom-0 left-0 w-full h-auto z-0 object-contain pointer-events-none"
                  />
                </span>
              </h2>
  
            <p className="text-gray-700 mt-4">
              Images, videos, PDFs and audio files are supported. Create math
              expressions and diagrams directly from the app. Take photos with
              the mobile app and save them to a note.
            </p>
  
            <button className="mt-6 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-700 hover:shadow-lg transition">
              Get Started 
            </button>
          </div>
  
          {/* Right Placeholder */}
          <div className="md:w-1/2 w-full h-64 bg-blue-200 rounded"></div>
          {/* Replace with an image if needed */}
        </div>
      </section>
    );
  }
  