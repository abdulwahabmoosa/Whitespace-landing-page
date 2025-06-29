export default function ReviewSection() {
    const testimonials = [
      {
        text: "Taskkey is designed as a collaboration tool for businesses that is a full project management solution.",
        name: "Oberon Shaw, MCH",
        title: "Head of Talent Acquisition, North America",
        avatar: "/Avater1.png", 
        bg: "bg-white text-black",
      },
      {
        text: "Whitepace is designed as a collaboration tool for businesses that is a full project management solution.",
        name: "Oberon Shaw, MCH",
        title: "Head of Talent Acquisition, North America",
        avatar: "/Avater2.png",
        bg: "bg-blue-400 text-white",
      },
      {
        text: "Whitepace is designed as a collaboration tool for businesses that is a full project management solution.",
        name: "Oberon Shaw, MCH",
        title: "Head of Talent Acquisition, North America",
        avatar: "/Avater3.png",
        bg: "bg-blue-400 text-white",
      },
    ];
  
    return (
      <section className="bg-white py-20 px-6 text-center text-black">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 inline-block relative">
          What Our{" "}
          <span className="relative inline-block">
            Clients
            <img
              src="/yellosquiggle.png"
              alt="highlight"
              className="absolute left-0 bottom-0 w-[115%] object-contain pointer-events-none"
            />
          </span>{" "}
          Says
        </h2>
  
        {/* Testimonials container */}
        <div className="flex flex-col sm:flex-row sm:justify-center sm:items-stretch gap-6 overflow-x-auto snap-x snap-mandatory sm:overflow-visible mt-10">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className={`${item.bg} rounded-xl p-6 max-w-md min-w-[90%] sm:min-w-[300px] snap-center shadow-md flex flex-col justify-between`}
            >
              <p className="text-sm">{item.text}</p>
  
              <hr className="my-4 border-gray-300 opacity-50" />
  
              <div className="flex items-center gap-4">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="text-left">
                  <h4 className="font-bold text-sm">{item.name}</h4>
                  <p className="text-xs opacity-80">{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
  
        {/* Dots */}
        <div className="mt-6 flex justify-center gap-2 sm:hidden">
          {testimonials.map((_, i) => (
            <span
              key={i}
              className={`w-2 h-2 rounded-full ${
                i === 0 ? "bg-blue-700" : "bg-gray-300"
              }`}
            ></span>
          ))}
        </div>
      </section>
    );
  }
  