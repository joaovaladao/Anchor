import { useState } from 'react';
import { ArrowLeft, MapPin, Compass } from 'lucide-react';
import HorizontalSection from './HorizontalSection';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';
import { Product } from '../types';
import { sections, allGridProducts } from '../data/products';

interface ProductDiscoveryProps {
  onBack: () => void;
}

export default function ProductDiscovery({ onBack }: ProductDiscoveryProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-sky-950 to-slate-900 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-sky-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"></div>
      </div>

      <div className="relative">
        <header className="sticky top-0 z-40 bg-slate-900/80 backdrop-blur-md border-b border-sky-500/10 transition-smooth">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <button
              onClick={onBack}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-sky-500/10 hover:bg-sky-500/20 text-sky-300 transition-smooth group"
            >
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              Back
            </button>

            <div className="flex items-center gap-2 text-sky-200">
              <MapPin size={18} />
              <span className="text-sm font-medium">Nearby Sellers</span>
            </div>

            <div className="text-sky-200/60 text-sm">
              {allGridProducts.length} products
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {sections.map((section, idx) => (
            <div key={section.id} style={{ animation: `slideUp 0.8s ease-out ${idx * 0.1}s both` }}>
              <HorizontalSection
                section={section}
                onProductClick={setSelectedProduct}
              />
            </div>
          ))}

          <section className="mt-20">
            <div className="flex items-center gap-2 mb-8">
              <Compass size={24} className="text-sky-300" />
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Browse All Products
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {allGridProducts.map((product, idx) => (
                <div
                  key={product.id}
                  style={{ animation: `slideUp 0.8s ease-out ${idx * 0.05}s both` }}
                >
                  <div className="h-full">
                    <ProductCard
                      product={product}
                      onClick={setSelectedProduct}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="mt-20 text-center py-16 rounded-2xl bg-gradient-to-br from-sky-500/10 to-cyan-500/10 border border-sky-500/20">
            <p className="text-sky-200/80 text-lg mb-4">
              More sellers are coming online as you explore the islands
            </p>
            <p className="text-sky-300/60 text-sm">
              Check back regularly for fresh inventory and new vendors
            </p>
          </div>
        </main>
      </div>

      <ProductModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
}
