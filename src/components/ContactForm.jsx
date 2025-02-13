import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactForm() {
  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Entre em Contato
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Informações de Contato</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-yellow-500" />
                <span>(85) 99134-7203</span>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-yellow-500" />
                <span>contato@cearaenergia.com.br</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6 text-yellow-500" />
                <span>Fortaleza - CE</span>
              </div>
            </div>
          </div>
          
          <form action="https://formsubmit.co/rafaelemosfr@gmail.com" method="post" enctype="text/plain" className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Nome
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Mensagem
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                required
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-yellow-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}