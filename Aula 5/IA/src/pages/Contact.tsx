import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui seria feita a submissão do formulário
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone',
      content: '(11) 9999-8888',
      description: 'Segunda à sexta, 9h às 18h'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'contato@flordetinta.com',
      description: 'Respondemos em até 24h'
    },
    {
      icon: MapPin,
      title: 'Endereço',
      content: 'Rua das Artes, 123',
      description: 'Centro, São Paulo - SP'
    },
    {
      icon: Clock,
      title: 'Horário de Funcionamento',
      content: 'Segunda à Sexta: 9h às 18h',
      description: 'Sábado: 9h às 14h'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Entre em
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {' '}Contato
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Estamos aqui para ajudar! Entre em contato conosco e tire todas suas dúvidas 
              sobre nossos produtos e serviços.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
                <p className="text-purple-600 font-medium mb-1">{info.content}</p>
                <p className="text-gray-600 text-sm">{info.description}</p>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Envie sua mensagem</h2>
              <p className="text-gray-600 mb-8">
                Preencha o formulário abaixo e nossa equipe entrará em contato com você o mais breve possível.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nome completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Assunto
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="duvida-produto">Dúvida sobre produto</option>
                    <option value="pedido">Acompanhar pedido</option>
                    <option value="troca-devolucao">Troca/Devolução</option>
                    <option value="sugestao">Sugestão</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                    placeholder="Descreva sua dúvida ou mensagem..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors font-semibold flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Enviar Mensagem</span>
                </button>
              </form>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Localização</h2>
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <div className="aspect-video bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                  <p className="text-gray-500">Mapa da localização</p>
                </div>
                <div className="space-y-2">
                  <p className="font-semibold text-gray-900">Loja Flor de Tinta</p>
                  <p className="text-gray-600">Rua das Artes, 123 - Centro</p>
                  <p className="text-gray-600">São Paulo - SP, CEP: 01000-000</p>
                </div>
              </div>

              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">FAQ - Perguntas Frequentes</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Qual o prazo de entrega?</h4>
                    <p className="text-sm text-gray-600">O prazo varia de 3 a 7 dias úteis, dependendo da sua região.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Posso trocar um produto?</h4>
                    <p className="text-sm text-gray-600">Sim, você tem até 30 dias para solicitar a troca ou devolução.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Como acompanho meu pedido?</h4>
                    <p className="text-sm text-gray-600">Você receberá um código de rastreamento por email após o envio.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}