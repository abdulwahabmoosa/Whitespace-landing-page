export default function SponsorsSection() {
  return (
    <section className="bg-white py-20 text-center px-6 text-black">
      <h2 className="text-3xl font-bold inline-block relative">
        Our sponsors
        <img
          src="/yellosquiggle.png"
          alt="highlight"
          className="absolute left-0 bottom-0 w-full max-w-[150px] sm:max-w-[180px] object-contain pointer-events-none"
        />
      </h2>

      <div className="mt-12 flex flex-col sm:flex-row sm:justify-center sm:items-center gap-12 sm:gap-24">
        <img src="/Apple.png" alt="Apple logo" className="h-8 sm:h-10 mx-auto" />
        <img src="/Microsoft.png" alt="Microsoft logo" className="h-8 sm:h-10 mx-auto" />
        <img src="/Slack.png" alt="Slack logo" className="h-8 sm:h-10 mx-auto" />
        <img src="/Google.png" alt="Google logo" className="h-8 sm:h-10 mx-auto" />
      </div>
    </section>
  );
}
