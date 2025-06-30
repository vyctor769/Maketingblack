import React from 'react';
import { Check } from 'lucide-react';

interface Benefit {
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    title: "Estratégia de tráfego que passa batido na auditoria",
    description: "Método invisível que não aciona os sistemas de detecção das plataformas"
  },
  {
    title: "Copy que converte mesmo com público frio",
    description: "Scripts comprovados que geram engajamento e vendas imediatas"
  },
  {
    title: "Ferramentas camufladas e métodos atualizados",
    description: "Tecnologia stealth que mantém suas contas seguras"
  },
  {
    title: "Modelo de página blindada pra Facebook e Insta",
    description: "Landing pages que não são derrubadas pelas plataformas"
  },
  {
    title: "Passo a passo validado com resultado em 24h",
    description: "Implementação rápida com retorno imediato"
  }
];

const BenefitsSection: React.FC = () => {
  return (
    <section className="py-20 border-b border-gray-800">
      <div className="container mx-auto px-5">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-red-500 relative">
          🪙 O Que Você Vai Descobrir
          <div className="absolute left-1/2 transform -translate-x-1/2 mt-4 w-24 h-1 bg-gradient-to-r from-red-500 to-red-400 rounded-full"></div>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900/70 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 md:p-12 shadow-[0_5px_15px_rgba(0,0,0,0.5)]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-gray-800/80 border border-gray-600 rounded-xl p-6 flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Check className="w-7 h-7 text-red-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2 leading-tight">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <a 
                href="https://go.perfectpay.com.br/PPU38CPQCMD" 
                className="group inline-flex items-center bg-gradient-to-r from-red-500 to-red-400 text-white font-bold text-lg md:text-xl px-8 md:px-12 py-4 md:py-5 rounded-full shadow-[0_5px_15px_rgba(255,45,85,0.5)] hover:shadow-[0_10px_25px_rgba(255,45,85,0.7)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></span>
                <span className="relative">👉 QUERO ACESSAR POR R$47 ANTES QUE SAIA DO AR</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;