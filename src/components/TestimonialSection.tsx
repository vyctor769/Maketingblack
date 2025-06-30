import React from 'react';
import { User } from 'lucide-react';

const TestimonialSection: React.FC = () => {
  return (
    <section className="py-20 border-b border-gray-800">
      <div className="container mx-auto px-5">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-red-500 relative">
          📈 Resultados Reais
          <div className="absolute left-1/2 transform -translate-x-1/2 mt-4 w-24 h-1 bg-gradient-to-r from-red-500 to-red-400 rounded-full"></div>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900/70 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 md:p-12 shadow-[0_5px_15px_rgba(0,0,0,0.5)]">
            <div className="flex flex-col md:flex-row items-center bg-gray-800/80 border border-gray-600 rounded-2xl p-8 mb-8">
              <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-red-500 to-red-400 rounded-full flex items-center justify-center">
                  <User className="w-12 h-12 md:w-16 md:h-16 text-white" />
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <p className="text-lg md:text-xl italic mb-4 leading-relaxed text-gray-100">
                  "Passei 2 meses perdendo dinhero com ADS, Depois que peguei esse material, fiz minha primeira venda no D1 e tripliquei em 7 dias."
                </p>
                <p className="font-bold text-red-500">
                  — @traderoculto
                </p>
              </div>
            </div>
            
            <div className="bg-gray-950 border border-gray-600 rounded-xl p-6 text-center">
              <p className="text-gray-300 mb-4">Checkout de vendas usando o método:</p>
              <div className="bg-gray-800 border border-gray-600 rounded-lg p-8 max-w-2xl mx-auto">
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">
                  R$2.437,90 em 24 horas
                </div>
                <div className="text-red-500 text-lg">
                  Usando o Método Black 2025
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;