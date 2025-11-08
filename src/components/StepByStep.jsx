import React from 'react';
import { ClipboardCheck, Wrench, Zap, LineChart } from 'lucide-react';

export default function StepByStep() {
  const steps = [
    {
      icon: <ClipboardCheck className="w-12 h-12 text-yellow-500" />,
      title: 'Análise de Viabilidade',
      description: '  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae exercitationem, aut repellat tenetur incidunt, corrupti enim, sunt consequuntur quis ut rem perspiciatis voluptatum odit amet voluptatibus soluta quo doloremque atque?'
    },
    {
      icon: <Wrench className="w-12 h-12 text-yellow-500" />,
      title: 'Projeto e Instalação',
      description: '  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae exercitationem, aut repellat tenetur incidunt, corrupti enim, sunt consequuntur quis ut rem perspiciatis voluptatum odit amet voluptatibus soluta quo doloremque atque?'
    },
    {
      icon: <Zap className="w-12 h-12 text-yellow-500" />,
      title: 'Conexão à Rede',
      description: '  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae exercitationem, aut repellat tenetur incidunt, corrupti enim, sunt consequuntur quis ut rem perspiciatis voluptatum odit amet voluptatibus soluta quo doloremque atque?'
    },
    {
      icon: <LineChart className="w-12 h-12 text-yellow-500" />,
      title: 'Geração e Retorno',
      description: '  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae exercitationem, aut repellat tenetur incidunt, corrupti enim, sunt consequuntur quis ut rem perspiciatis voluptatum odit amet voluptatibus soluta quo doloremque atque?'
    }
  ];

  return (
    <section id="passos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Como Funciona
        </h2>
        
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-6">
                {step.icon}
              </div>
              <div className="relative">
                {index < steps.length - 4 && (
                  <div className="hidden md:block absolute top-1/2 right-0 w-full h-0.5 bg-yellow-500 transform translate-y-[-50%] translate-x-1/2" />
                )}
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
              </div>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}