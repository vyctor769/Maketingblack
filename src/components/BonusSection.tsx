import React from 'react';
import { Lock } from 'lucide-react';
import CountdownTimer from './CountdownTimer';

const BonusSection: React.FC = () => {
  return (
    <section className="py-20 border-b border-gray-800">
      <div className="container mx-auto px-5">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-red-500 relative">
          🔥 Bônus Exclusivo
          <div className="absolute left-1/2 transform -translate-x-1/2 mt-4 w-24 h-1 bg-gradient-to-r from-red-500 to-red-400 rounded-full"></div>
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-900/70 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 md:p-12 shadow-[0_5px_15px_rgba(0,0,0,0.5)]">
            <div className="text-center bg-gray-800/80 border-2 border-dashed border-red-500 rounded-2xl p-8 md:p-12 relative overflow-hidden">
              <Lock className="w-12 h-12 text-red-500 mx-auto mb-6" />
              
              <h3 className="text-2xl md:text-3xl font-bold text-red-500 mb-6">
                Bônus Exclusivo (Liberado por Tempo Limitado)
              </h3>
              
              <p className="text-lg md:text-xl leading-relaxed text-gray-100 mb-8">
                Ao garantir o material agora, você recebe um mini-relatório com as landers e criativos black que passaram direto pela auditoria do Meta em 2025.
              </p>
              
              <CountdownTimer />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;