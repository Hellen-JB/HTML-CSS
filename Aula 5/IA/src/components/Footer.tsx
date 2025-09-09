import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export default function footer(): any {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-bold">🌸</span>
              </div>
              <h3 className="text-xl font-bold">Flor de Tinta</h3>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Sua loja especializada em materiais artísticos de alta qualidade. 
              Desperte sua criatividade com produtos profissionais e acessíveis.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>


          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Início</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Produtos</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Contato</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Política de Privacidade</a></li>
            </ul>
          </div>

      
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-purple-400" />
                <span className="text-gray-400">(11) 9999-8888</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-purple-400" />
                <span className="text-gray-400">contato@flordetinta.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-purple-400 mt-1" />
                <span className="text-gray-400">
                  Rua das Artes, 123<br />
                  Centro, São Paulo - SP
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Flor de Tinta. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
                Política de Privacidade
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}