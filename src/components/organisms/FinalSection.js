export default function FinalSection() {
    return (
      <section className="bg-blue-900 text-white py-20 px-6 text-center">
        <h2 className="text-3xl font-bold">Try Whitepace today</h2>
  
        <p className="mt-4 text-sm">
          Get started for free. <br className="sm:hidden" />
          Add your whole team as your needs grow.
        </p>
  
        <button className="mt-6 bg-blue-400 hover:bg-blue-500 text-white px-6 py-3 rounded-lg transition">
          Try Taskey free 
        </button>
  
        <p className="mt-6 text-sm">On a big team? Contact sales</p>
  
        <div className="mt-6 flex justify-center">
          <img
            src="/App-icon.png"
            alt="Platform Icons"
            className="h-6 sm:h-8 w-auto"
          />
        </div>
      </section>
    );
  }
  