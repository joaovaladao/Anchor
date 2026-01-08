import { Anchor, Waves, Ship, MapPin, ChevronRight } from 'lucide-react';

export default function EntryScreen() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-amber-50">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 text-sky-100 opacity-40">
          <Waves size={120} />
        </div>
        <div className="absolute bottom-32 right-16 text-sky-100 opacity-30">
          <Ship size={100} />
        </div>
        <div className="absolute top-1/3 right-1/4 text-amber-100 opacity-40">
          <Anchor size={80} />
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-12 lg:py-20">
        <header className="text-center mb-16 lg:mb-24">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="p-3 bg-sky-500 rounded-2xl shadow-lg">
              <Anchor className="text-white" size={36} />
            </div>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold text-slate-800 mb-6 tracking-tight">
            Anchorage
          </h1>

          <p className="text-xl lg:text-2xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Discover local products from boats and islands near you
          </p>
        </header>

        <div className="max-w-4xl mx-auto mb-16 lg:mb-20">
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-sky-100">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="inline-flex p-4 bg-sky-50 rounded-2xl mb-4">
                  <Ship className="text-sky-500" size={32} />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">
                  Sailors & Travelers
                </h3>
                <p className="text-slate-600 text-sm">
                  Find authentic products from local sellers as you move between islands
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex p-4 bg-amber-50 rounded-2xl mb-4">
                  <MapPin className="text-amber-500" size={32} />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">
                  Location-Based
                </h3>
                <p className="text-slate-600 text-sm">
                  Connect with sellers based on real-time proximity across the Caribbean
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex p-4 bg-coral-50 rounded-2xl mb-4">
                  <Waves className="text-orange-400" size={32} />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">
                  Mobile Commerce
                </h3>
                <p className="text-slate-600 text-sm">
                  Trade freely with boats and island vendors wherever they anchor
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 group">
                Explore Nearby Products
                <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>

              <button className="px-8 py-4 bg-white hover:bg-slate-50 text-sky-600 font-semibold rounded-xl border-2 border-sky-200 hover:border-sky-300 transition-all duration-200 flex items-center justify-center gap-2">
                Become a Seller
              </button>
            </div>
          </div>
        </div>

        <footer className="text-center text-slate-500 text-sm">
          <p>
            Connecting island communities, sailors, and travelers across the Caribbean and Central America
          </p>
        </footer>
      </div>
    </div>
  );
}
