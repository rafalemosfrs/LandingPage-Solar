import React from 'react';
import { Shield, Leaf, TrendingUp } from 'lucide-react';

export default function AboutSection() {
  const benefits = [
    {
      icon: <Shield className="w-12 h-12 text-yellow-500" />,
      title: 'Investimento Seguro',
      description: 'Retorno garantido com contratos de longo prazo'
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-yellow-500" />,
      title: 'Alta Rentabilidade',
      description: 'Rendimentos superiores a investimentos tradicionais'
    },
    {
      icon: <Leaf className="w-12 h-12 text-yellow-500" />,
      title: 'Sustentabilidade',
      description: 'Contribua para um futuro mais limpo e sustentável'
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Sobre Nós</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-600 mb-6">
            Criada na capital brasileira do sol, a Ceará Energia entra no mercado para mudar o sistema arcaico de fornecimento energético. Nossas instalações fotovoltaicas garantem maior rentabilidade e menor impacto ambiental quando comparadas às atuais concessionárias regionais. Selecionamos componentes do sistema de energia solar fotovoltaica de alta tecnologia e performance com custo-benefício que atenda a necessidade individual de cada cliente.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=800"
              alt="Usina Solar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}