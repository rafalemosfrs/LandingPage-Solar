import React from 'react';

export default function Header() {
  const navItems = [
    { label: 'Sobre Nós', href: '#sobre' },
    { label: 'Retorno Financeiro', href: '#retorno' },
    { label: 'Passo a Passo', href: '#passos' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contato', href: '#contato' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img
              src="../src/images/logo.jpg"
              alt="Ceará Energia"
              className="h-8 w-auto"
            />
            <span className="text-xl font-bold text-gray-800">Ceará Energia</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-600 hover:text-yellow-500 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <button className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}