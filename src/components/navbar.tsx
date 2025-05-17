'use client';

import React from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#3a2618] text-[#f8d568] shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold">Delícias & Sabores</h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="hover:text-[#ffebb3] transition-colors">Início</a>
            <a href="#bolos" className="hover:text-[#ffebb3] transition-colors">Bolos</a>
            <a href="#salgados" className="hover:text-[#ffebb3] transition-colors">Salgados</a>
            <a href="#contato" className="hover:text-[#ffebb3] transition-colors">Contato</a>
          </div>
          
          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              className="text-[#f8d568] hover:text-[#ffebb3] hover:bg-[#4a3628]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu />
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-2 pb-4 space-y-2">
            <a href="#" className="block py-2 px-4 hover:bg-[#4a3628] rounded transition-colors">Início</a>
            <a href="#bolos" className="block py-2 px-4 hover:bg-[#4a3628] rounded transition-colors">Bolos</a>
            <a href="#salgados" className="block py-2 px-4 hover:bg-[#4a3628] rounded transition-colors">Salgados</a>
            <a href="#contato" className="block py-2 px-4 hover:bg-[#4a3628] rounded transition-colors">Contato</a>
          </div>
        )}
      </div>
    </nav>
  );
}