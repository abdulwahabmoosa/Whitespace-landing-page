export default function HeroSection() {
    return (
      <section className="bg-blue-900 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">Get More Done with whitespace</h1>
            <p className="max-w-md">Project management software for teams to collaborate, plan, and manage tasks.</p>
            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded mt-4">Try Whitespace free →</button>
          </div>
          <div className="w-full md:w-1/2 h-64 bg-blue-300 mt-10 md:mt-0 rounded-lg"></div>
        </div>
      </section>
    );
  }
  