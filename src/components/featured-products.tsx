import React from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import lgoImag from '../assets/img/bolo2-r.png'

const featuredProducts = [
  {
    id: 1,
    name: 'Bolo de Chocolate',
    description: 'Delicioso bolo de chocolate com cobertura especial',
    price: 'R$ 45,00',
    image: lgoImag
  },
  {
    id: 2,
    name: 'Coxinha de Frango',
    description: 'Coxinha crocante com recheio de frango desfiado',
    price: 'R$ 4,50',
    image: lgoImag
  },
  {
    id: 3,
    name: 'Bolo de Cenoura',
    description: 'Bolo de cenoura com cobertura de chocolate',
    price: 'R$ 40,00',
    image: lgoImag
  },
  {
    id: 4,
    name: 'Empadinha de Palmito',
    description: 'Empadinha com recheio cremoso de palmito',
    price: 'R$ 5,00',
    image: lgoImag
  }
];

export default function FeaturedProducts() {
  return (
    <section className="py-16 bg-[#f8f3e6]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#3a2618] mb-2">Nossos Destaques</h2>
          <p className="text-[#5c4434]">Conheça nossos produtos mais pedidos</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
               <Image 
                  src={product.image} 
                  alt={product.name} 
                  width={300}
                  height={300}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />

              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-[#3a2618] mb-2">{product.name}</h3>
                <p className="text-[#5c4434] mb-3">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-[#3a2618]">{product.price}</span>
                  <Button className="bg-[#f8d568] text-[#3a2618] hover:bg-[#ffebb3]">
                    Comprar
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-[#3a2618] text-[#f8d568] hover:bg-[#4a3628]">
            Ver Todos os Produtos
          </Button>
        </div>
      </div>
    </section>
  );
}