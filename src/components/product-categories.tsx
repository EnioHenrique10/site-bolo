'use client';

import React from 'react';
import Image from 'next/image';
import logimg from '../assets/img/bolo2-r.png'

const categories = [
  {
    id: 'bolos',
    title: 'Bolos',
    description: 'Nossos bolos são preparados com ingredientes selecionados e decorados com muito carinho.',
    image: logimg,
    products: [
      { name: 'Bolo de Chocolate', price: 'R$ 45,00' },
      { name: 'Bolo de Cenoura', price: 'R$ 40,00' },
      { name: 'Bolo Red Velvet', price: 'R$ 55,00' },
      { name: 'Bolo de Coco', price: 'R$ 42,00' },
    ]
  },
  {
    id: 'salgados',
    title: 'Salgados',
    description: 'Salgados crocantes por fora e com recheios suculentos, perfeitos para qualquer ocasião.',
    image: logimg,
    products: [
      { name: 'Coxinha de Frango', price: 'R$ 4,50' },
      { name: 'Empadinha de Palmito', price: 'R$ 5,00' },
      { name: 'Kibe', price: 'R$ 4,00' },
      { name: 'Bolinha de Queijo', price: 'R$ 3,50' },
    ]
  }
];

export default function ProductCategories() {
  return (
    <section className="py-16 bg-[#f8f3e6]">
      <div className="container mx-auto px-4">
        {categories.map((category, index) => (
          <div 
            id={category.id}
            key={category.id} 
            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center mb-20`}
          >
            <div className="md:w-1/2 mb-8 md:mb-0 md:px-6">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <Image 
                  src={category.image}
                  alt={category.title}
                  width={600}
                  height={400}
                  className="w-full h-64 md:h-96 object-cover"
                />
              </div>
            </div>
            <div className="md:w-1/2 md:px-6">
              <h2 className="text-3xl font-bold text-[#3a2618] mb-4">{category.title}</h2>
              <p className="text-[#5c4434] mb-6">{category.description}</p>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-[#3a2618] mb-4">Produtos Populares</h3>
                <ul className="space-y-3">
                  {category.products.map((product, idx) => (
                    <li key={idx} className="flex justify-between items-center border-b border-[#e9e2d0] pb-2">
                      <span className="text-[#5c4434]">{product.name}</span>
                      <span className="font-semibold text-[#3a2618]">{product.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
