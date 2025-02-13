import React from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Ceará Energia</h3>
            <p className="text-gray-400">
            A energia solar é a fonte de energia que mais cresce no mundo. Conte com os nossos serviços e comece a gerar a sua própria energia.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#sobre" className="text-gray-400 hover:text-yellow-500">Sobre Nós</a></li>
              <li><a href="#retorno" className="text-gray-400 hover:text-yellow-500">Retorno Financeiro</a></li>
              <li><a href="#passos" className="text-gray-400 hover:text-yellow-500">Como Funciona</a></li>
              <li><a href="#contato" className="text-gray-400 hover:text-yellow-500">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/cearaenergia" target="_blank" className="text-gray-400 hover:text-yellow-500">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/cearaenergia/" target="_blank" className="text-gray-400 hover:text-yellow-500">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/company/ceara-energia/" target="_blank" className="text-gray-400 hover:text-yellow-500">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Ceará Energia. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}