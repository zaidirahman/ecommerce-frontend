export default function Hero({ onShopNow }: { onShopNow: () => void }) {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center bg-sky-50 overflow-hidden">
      {/* Background Ambience - Blue Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-sky-50 to-blue-100 opacity-80 z-0" />
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-6 animate-fade-in-up">
        <h2 className="text-blue-600 font-medium tracking-widest text-sm uppercase mb-4">
            Stylish Living
        </h2>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-blue-950 leading-tight">
          Classic<br className="md:hidden" /> Charmm.
        </h1>
        <p className="text-xl md:text-2xl text-blue-800/60 font-light tracking-wide max-w-2xl mx-auto">
          Anticipating expensive décor items. Elevate your space with our curated collection.
        </p>
        
        <div className="pt-8">
            <button 
                onClick={onShopNow}
                className="bg-blue-600 text-white px-10 py-4 rounded-full text-lg font-medium hover:scale-105 hover:bg-blue-700 transition-all duration-300 shadow-xl shadow-blue-200"
            >
                Explore Collection
            </button>
        </div>
      </div>
      
      {/* Decorative element */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-t from-blue-200 to-transparent blur-3xl opacity-40 rounded-full z-0" />
    </section>
  );
}
