export default function Home() {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Local Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 h-full w-full object-cover z-0"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/50 z-10" />

        <div className="relative z-20 flex h-full flex-col items-center justify-center px-4 text-center">
          <h1 className="text-6xl font-bold tracking-tight text-white md:text-8xl drop-shadow-xl">
            Explive
          </h1>
          <p className="mt-6 text-xl text-zinc-200 md:text-2xl max-w-2xl drop-shadow-md">
            The canvas is ready for your full-screen video experience.
          </p>
        </div>
      </section>

      {/* Upcoming Shows Carousel Section */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Upcoming Shows
          </h2>
          <button className="text-sm font-semibold opacity-70 hover:opacity-100 transition-opacity">
            View All &rarr;
          </button>
        </div>

        {/* Pure CSS Snap Carousel */}
        <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scroll-smooth" style={{ scrollbarWidth: 'none' }}>
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="min-w-[280px] md:min-w-[360px] aspect-[4/5] bg-zinc-100 dark:bg-zinc-900 rounded-3xl snap-center shrink-0 relative overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Card Background Image (Placeholder) */}
              <img
                src={`https://images.pexels.com/photos/${1190298 + i}/pexels-photo-${1190298 + i}.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load`}
                alt="Event"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Gradient Overlay for Text */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

              {/* Card Content */}
              <div className="absolute bottom-0 left-0 p-6 w-full text-left">
                <div className="flex justify-between items-end mb-2">
                  <p className="text-sm font-bold text-emerald-400 tracking-wider">OCT {20 + i} • 8:00 PM</p>
                  <p className="text-xs font-semibold bg-white/20 text-white px-2 py-1 rounded-full backdrop-blur-md">From $45</p>
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">Night Festival {i}</h3>
                <p className="text-zinc-300 text-sm font-medium">Downtown Arena • Miami, FL</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};
