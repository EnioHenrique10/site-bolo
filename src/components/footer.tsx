import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#3a2618] text-[#f8d568]">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">Delícias & Sabores</h2>
            <p className="mt-2">Bolos e salgados artesanais</p>
          </div>
          
          <div className="flex space-x-4 mb-6 md:mb-0">
            <a href="#" className="hover:text-[#ffebb3] transition-colors">
              <Facebook />
            </a>
            <a href="#" className="hover:text-[#ffebb3] transition-colors">
              <Instagram />
            </a>
            <a href="#" className="hover:text-[#ffebb3] transition-colors">
              <Twitter />
            </a>
          </div>
          
          <div className="text-center md:text-right">
            <p>&copy; 2023 Delícias & Sabores. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}