import React from 'react';
import { Check } from 'lucide-react';

const OfferSection: React.FC = () => {
  return (
    <section className="py-20 border-b border-gray-800">
      <div className="container mx-auto px-5">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-900/70 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 md:p-12 shadow-[0_5px_15px_rgba(0,0,0,0.5)]">
            <div className="text-center bg-gray-800/80 border border-red-500 rounded-2xl p-8 md:p-12 relative overflow-hidden">
              <h2 className="text-3xl md:text-4xl font-bold text-red-500 mb-6 relative">
                💸 Oferta Final
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-4 w-24 h-1 bg-gradient-to-r from-red-500 to-red-400 rounded-full"></div>
              </h2>
              
              <div className="text-5xl md:text-7xl font-bold text-red-500 my-8 drop-shadow-[0_0_10px_rgba(255,45,85,0.5)]">
                R$47
              </div>
              
              <div className="text-lg md:text-xl mb-8 leading-relaxed text-gray-100 space-y-2">
                <p>Sem mensalidade. Sem enrolação. Sem promessa vazia.</p>
                <p>Receba acesso imediato após a compra.</p>
              </div>
              
              <div className="bg-red-500/10 border border-red-500 rounded-xl p-4 mb-8">
                <div className="flex items-center justify-center">
                  <Check className="w-6 h-6 text-red-500 mr-2" />
                  <span className="text-gray-100">E se não curtir, tem 7 dias de garantia</span>
                </div>
              </div>
              
              <a 
                href="https://go.perfectpay.com.br/PPU38CPQCMD" 
                className="group inline-flex items-center bg-gradient-to-r from-black to-gray-800 border border-red-500 text-white font-bold text-lg md:text-xl px-8 md:px-12 py-4 md:py-5 rounded-full shadow-[0_5px_15px_rgba(0,0,0,0.7)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.9)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></span>
                <span className="relative">👉 QUERO ACESSAR AGORA – ÚLTIMAS VAGAS DISPONÍVEIS</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;