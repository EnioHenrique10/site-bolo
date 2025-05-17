import React from 'react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className="relative bg-[#3a2618] text-[#f8d568] py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Bolos e Salgados Artesanais</h1>
            <p className="text-xl mb-6">Sabores incríveis feitos com ingredientes selecionados e muito carinho</p>
            <div className="flex space-x-4">
              <Button className="bg-[#f8d568] text-[#3a2618] hover:bg-[#ffebb3]">
                Ver Produtos
              </Button>
              <Button variant="outline" className="border-[#f8d568] text-[#f8d568] hover:bg-[#4a3628]">
                Fazer Pedido
              </Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative h-64 md:h-96 rounded-lg overflow-hidden">
              <img 
                src="https://tryeasel.dev/placeholder.svg?width=600&height=400" 
                alt="Deliciosos bolos e salgados" 
                className="w-full h-full object-cover rounded-lg"
                width={600}
                height={400}
              />
              <div className="absolute inset-0 bg-[#3a2618] bg-opacity-20 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#f8f3e6] clip-diagonal"></div>
    </section>
  );
}