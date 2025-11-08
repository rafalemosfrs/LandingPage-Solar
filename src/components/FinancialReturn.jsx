import React from 'react';
import { DollarSign, PiggyBank, BarChart } from 'lucide-react';

export default function FinancialReturn() {
  const cards = [
    {
      icon: <DollarSign className="w-12 h-12 text-yellow-500" />,
      title: 'Retorno do Investimento',
      description: '  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae exercitationem, aut repellat tenetur incidunt, corrupti enim, sunt consequuntur quis ut rem perspiciatis voluptatum odit amet voluptatibus soluta quo doloremque atque?'
    },
    {
      icon: <PiggyBank className="w-12 h-12 text-yellow-500" />,
      title: 'Economia Garantida',
      description: '  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae exercitationem, aut repellat tenetur incidunt, corrupti enim, sunt consequuntur quis ut rem perspiciatis voluptatum odit amet voluptatibus soluta quo doloremque atque?'
    },
    {
      icon: <BarChart className="w-12 h-12 text-yellow-500" />,
      title: 'Valorização do Ativo',
      description: '  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae exercitationem, aut repellat tenetur incidunt, corrupti enim, sunt consequuntur quis ut rem perspiciatis voluptatum odit amet voluptatibus soluta quo doloremque atque?'
    }
  ];

  return (
    <section id="retorno" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Retorno Financeiro
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex justify-center mb-6">
                {card.icon}
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">
                {card.title}
              </h3>
              <p className="text-gray-600 text-center">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}