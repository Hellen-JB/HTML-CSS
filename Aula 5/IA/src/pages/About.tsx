import React from 'react';
import { Heart, Award, Users, Truck } from 'lucide-react';

interface AboutProps {
  onNavigate: (page: string) => void;
}

export default function About({ onNavigate }: AboutProps) {
  const features = [
    {
      icon: Award,
      title: 'Qualidade Premium',
      description: 'Produtos selecionados das melhores marcas do mercado artístico mundial'
    },
    {
      icon: Users,
      title: 'Atendimento Especializado',
      description: 'Nossa equipe é formada por artistas que entendem suas necessidades'
    },
    {
      icon: Truck,
      title: 'Entrega Rápida',
      description: 'Entregas em todo Brasil com frete grátis em compras acima de R$ 100'
    },
    {
      icon: Heart,
      title: 'Paixão pela Arte',
      description: 'Mais que uma loja, somos uma comunidade que vive e respira arte'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Sobre a
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {' '}Flor de Tinta
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nascemos da paixão pela arte e do desejo de democratizar o acesso a materiais 
              artísticos de qualidade para todos os criadores.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Nossa História</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  A Flor de Tinta surgiu em 2020 do sonho de democratizar o acesso a materiais 
                  artísticos de qualidade. Fundada por um grupo de artistas apaixonados, nossa 
                  missão sempre foi clara: conectar criadores com as melhores ferramentas para 
                  dar vida às suas ideias.
                </p>
                <p>
                  Começamos pequenos, em um ateliê compartilhado, vendendo apenas para amigos 
                  e conhecidos. Hoje, atendemos milhares de artistas em todo o Brasil, sempre 
                  mantendo o mesmo cuidado e atenção pessoal que nos caracteriza desde o início.
                </p>
                <p>
                  Cada produto que oferecemos é testado por nossa equipe de artistas. 
                  Acreditamos que só vendemos aquilo que usaríamos em nossas próprias criações.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Ateliê artístico"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-3xl">🌸</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Por que escolher a Flor de Tinta?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Mais que uma loja, somos parceiros na sua jornada artística
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nossos Valores</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Criatividade</h3>
              <p className="text-gray-600">
                Acreditamos que cada pessoa tem um potencial criativo único que merece ser explorado e valorizado.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Comunidade</h3>
              <p className="text-gray-600">
                Somos mais que uma loja - somos uma comunidade de artistas que se apoia mutuamente.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Excelência</h3>
              <p className="text-gray-600">
                Comprometemo-nos com a mais alta qualidade em produtos e atendimento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Faça parte da nossa comunidade artística
          </h2>
          <p className="text-purple-100 mb-8 text-lg max-w-2xl mx-auto">
            Descubra os melhores materiais artísticos e conecte-se com outros criadores. 
            Sua jornada artística começa aqui.
          </p>
          <button
            onClick={() => onNavigate('products')}
            className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 mr-4"
          >
            Explorar Produtos
          </button>
          <button
            onClick={() => onNavigate('contact')}
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
          >
            Entre em Contato
          </button>
        </div>
      </section>
    </div>
  );
}