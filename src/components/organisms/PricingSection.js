"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

export default function PricingSection() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      description: "Capture ideas and find them quickly",
      icon: "/blacktick.png",
      features: [
        "Sync unlimited devices",
        "10 GB monthly uploads",
        "200 MB max. note size",
        "Customize Home dashboard and access extra widgets",
        "Connect primary Google Calendar account",
        "Add due dates, reminders, and notifications to your tasks",
      ],
      bg: "border-yellow-300",
      buttonStyle: "text-black border border-yellow-300",
    },
    {
      name: "Personal",
      price: "$11.99",
      description: "Keep home and family on track",
      icon: "/yellowtick.png",
      features: [
        "Sync unlimited devices",
        "10 GB monthly uploads",
        "200 MB max. note size",
        "Customize Home dashboard and access extra widgets",
        "Connect primary Google Calendar account",
        "Add due dates, reminders, and notifications to your tasks",
      ],
      bg: "bg-blue-900 text-white",
      buttonStyle: "bg-blue-600 text-white",
    },
    {
      name: "Organization",
      price: "$49.99",
      description: "Capture ideas and find them quickly",
      icon: "/blacktick.png",
      features: [
        "Sync unlimited devices",
        "10 GB monthly uploads",
        "200 MB max. note size",
        "Customize Home dashboard and access extra widgets",
        "Connect primary Google Calendar account",
        "Add due dates, reminders, and notifications to your tasks",
      ],
      bg: "border-yellow-300",
      buttonStyle: "text-black border border-yellow-300",
    },
  ];

  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Track scroll position for dot indicator
  useEffect(() => {
    const container = scrollRef.current;
    const onScroll = () => {
      const scrollLeft = container.scrollLeft;
      const width = container.offsetWidth;
      const index = Math.round(scrollLeft / width);
      setActiveIndex(index);
    };
    container.addEventListener("scroll", onScroll);
    return () => container.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="py-16 px-4 bg-white text-black">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold">
          Choose <span className="relative inline-block">
            Your Plan
            <span className="absolute -bottom-1 left-0 w-full h-2 bg-yellow-300 -z-10 rounded"></span>
          </span>
        </h2>
        <p className="mt-4 text-gray-600">
          Whether you want to get organized, keep your personal life on track,
          or boost workplace productivity, Evernote has the right plan for you.
        </p>

        {/* Desktop View */}
        <div className="hidden sm:grid mt-12 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-lg p-6 border ${
                plan.bg.includes("bg-")
                  ? `${plan.bg}`
                  : `border ${plan.bg}`
              } transform transition duration-300 hover:scale-105`}
            >
              <h3 className="text-lg font-semibold">{plan.name}</h3>
              <p className="text-3xl font-bold mt-2">{plan.price}</p>
              <p className="mt-2 text-sm">{plan.description}</p>
              <ul className="mt-6 space-y-4 text-left text-sm">
                {plan.features.map((feature, i) => (
                    <li
                    key={i}
                    className="flex items-start gap-3 w-full"
                    >
                    <div className="w-5 h-5 mt-[2px] flex-shrink-0">
                        <Image
                        src={plan.icon}
                        alt="tick"
                        width={20}
                        height={20}
                        className="w-full h-full object-contain"
                        />
                    </div>
                    <span className="leading-snug">{feature}</span>
                    </li>
                ))}
                </ul>


              <button
                className={`mt-6 px-4 py-2 rounded ${plan.buttonStyle} hover:opacity-80 transition`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        {/* Mobile View: Slider */}
        <div
          ref={scrollRef}
          className="sm:hidden flex overflow-x-auto snap-x snap-mandatory mt-10 space-x-4 pb-4"
        >
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`flex-shrink-0 w-full snap-center rounded-lg p-6 border ${
                plan.bg.includes("bg-")
                  ? `${plan.bg}`
                  : `border ${plan.bg}`
              }`}
            >
              <h3 className="text-lg font-semibold">{plan.name}</h3>
              <p className="text-3xl font-bold mt-2">{plan.price}</p>
              <p className="mt-2 text-sm">{plan.description}</p>
              <ul className="mt-6 space-y-3 text-left text-sm">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Image
                      src={plan.icon}
                      alt="tick"
                      width={20}
                      height={20}
                      className="mt-1"
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`mt-6 px-4 py-2 rounded ${plan.buttonStyle} hover:opacity-80 transition`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="sm:hidden flex justify-center mt-4 space-x-2">
          {plans.map((_, idx) => (
            <span
              key={idx}
              className={`w-2 h-2 rounded-full ${
                activeIndex === idx ? "bg-blue-700" : "bg-gray-300"
              } transition-all duration-300`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}
