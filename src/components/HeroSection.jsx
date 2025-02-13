import React from 'react';

export default function HeroSection() {
  return (
    <section className="pt-20 lg:pt-24">
      <div className="relative h-[600px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1920"
            alt="Solar Panel Farm"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Usinas Solares para Venda de Energia
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Sustentabilidade e Retorno Financeiro
          </p>
          <a
            href="#contato"
            className="bg-yellow-500 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
          >
            Saiba Mais
          </a>
        </div>
      </div>
    </section>
  );
}