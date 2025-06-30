import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t border-red-500">
      <div className="container mx-auto px-5">
        <div className="text-center">
          <div className="flex flex-wrap justify-center gap-8 mb-6">
            <a href="#" className="text-red-300 hover:text-red-500 transition-colors duration-300 hover:underline">
              Política de privacidade
            </a>
            <a href="#" className="text-red-300 hover:text-red-500 transition-colors duration-300 hover:underline">
              Termos de uso
            </a>
            <a href="#" className="text-red-300 hover:text-red-500 transition-colors duration-300 hover:underline">
              Contato
            </a>
          </div>
          
          <div className="max-w-3xl mx-auto text-gray-400 text-sm leading-relaxed space-y-4">
            <p>
              Aviso legal: "Este material é apenas para fins educacionais. Os resultados podem variar de acordo com cada pessoa. Não garantimos resultados específicos e não nos responsabilizamos por qualquer uso indevido das informações aqui contidas."
            </p>
            <p>
              © 2025 Estratégia Black 2025. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;