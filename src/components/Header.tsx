import React from 'react';
import { Flame } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="relative bg-gradient-to-b from-black to-red-950 text-center py-16 border-b border-red-500 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-red-500/10 via-transparent to-transparent z-10"></div>
      
      <div className="container mx-auto px-5 relative z-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-5 text-white leading-tight">
            <span className="drop-shadow-[0_0_10px_rgba(255,0,0,0.7)]">
              Tudo Que Te Ensinaram Sobre Marketing Digital Está Errado
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-10 text-red-300 max-w-3xl mx-auto leading-relaxed">
            Descubra a estratégia Black que ainda funciona em 2025 — mesmo com bloqueio, conta nova ou sem audiência.
          </p>
          
          <a 
            href="https://go.perfectpay.com.br/PPU38CPQCMD" 
            className="group inline-flex items-center bg-gradient-to-r from-red-500 to-red-400 text-white font-bold text-lg md:text-xl px-8 md:px-12 py-4 md:py-5 rounded-full shadow-[0_5px_15px_rgba(255,45,85,0.5)] hover:shadow-[0_10px_25px_rgba(255,45,85,0.7)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></span>
            <span className="relative">👉 QUERO ACESSAR CONTEÚDO PROIBIDO</span>
            <Flame className="ml-2 w-6 h-6 animate-pulse" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;