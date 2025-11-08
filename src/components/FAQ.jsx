import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'Quanto custa investir em uma usina solar?',
      answer: '  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae exercitationem, aut repellat tenetur incidunt, corrupti enim, sunt consequuntur quis ut rem perspiciatis voluptatum odit amet voluptatibus soluta quo doloremque atque?'
    },
    {
      question: 'Qual é o tempo de retorno do investimento?',
      answer: '  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae exercitationem, aut repellat tenetur incidunt, corrupti enim, sunt consequuntur quis ut rem perspiciatis voluptatum odit amet voluptatibus soluta quo doloremque atque?'
    },
    {
      question: 'Como funciona a venda de energia?',
      answer: '  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae exercitationem, aut repellat tenetur incidunt, corrupti enim, sunt consequuntur quis ut rem perspiciatis voluptatum odit amet voluptatibus soluta quo doloremque atque?'
    },
    {
      question: 'Quais são as garantias do investimento?',
      answer: '  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae exercitationem, aut repellat tenetur incidunt, corrupti enim, sunt consequuntur quis ut rem perspiciatis voluptatum odit amet voluptatibus soluta quo doloremque atque?'
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Perguntas Frequentes
        </h2>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="mb-4 bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-yellow-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-yellow-500" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}