import React from 'react';

const VSLSection: React.FC = () => {
  return (
    <section className="py-20 border-b border-gray-800">
      <div className="container mx-auto px-5">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-red-500 relative">
          🧠 O Que Realmente Funciona
          <div className="absolute left-1/2 transform -translate-x-1/2 mt-4 w-24 h-1 bg-gradient-to-r from-red-500 to-red-400 rounded-full"></div>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900/70 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 md:p-12 shadow-[0_5px_15px_rgba(0,0,0,0.5)]">
            <div className="text-center space-y-6">
              <p className="text-lg md:text-xl leading-relaxed text-gray-100">
                Você já tentou de tudo: curso de R$997, live motivacional, fórmula mágica... e nada.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-gray-100">
                Aqui é diferente. Isso aqui é o que os caras que realmente ganham grana no Marketing estão usando, mas não contam nos grupos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VSLSection;