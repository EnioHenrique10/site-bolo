import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contato" className="py-16 bg-[#f8f3e6]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#3a2618] mb-2">Entre em Contato</h2>
          <p className="text-[#5c4434]">Estamos prontos para atender seu pedido</p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2 bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-[#3a2618] mb-6">Envie sua mensagem</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-[#5c4434] mb-1">Nome</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 border border-[#e9e2d0] rounded-md focus:outline-none focus:ring-2 focus:ring-[#f8d568]" 
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-[#5c4434] mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 border border-[#e9e2d0] rounded-md focus:outline-none focus:ring-2 focus:ring-[#f8d568]" 
                  placeholder="Seu email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-[#5c4434] mb-1">Mensagem</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full px-4 py-2 border border-[#e9e2d0] rounded-md focus:outline-none focus:ring-2 focus:ring-[#f8d568]" 
                  placeholder="Sua mensagem"
                ></textarea>
              </div>
              <Button className="w-full bg-[#3a2618] text-[#f8d568] hover:bg-[#4a3628]">
                Enviar Mensagem
              </Button>
            </form>
          </div>
          
          <div className="md:w-1/2 bg-[#3a2618] text-[#f8d568] rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-6">Informações de Contato</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <Phone className="mr-3 h-5 w-5" />
                <div>
                  <h4 className="font-semibold">Telefone</h4>
                  <p>(11) 99999-9999</p>
                  <p>(11) 2222-2222</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="mr-3 h-5 w-5" />
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p>contato@deliciasesabores.com.br</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="mr-3 h-5 w-5" />
                <div>
                  <h4 className="font-semibold">Endereço</h4>
                  <p>Rua dos Bolos, 123</p>
                  <p>Centro - PE</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="mr-3 h-5 w-5" />
                <div>
                  <h4 className="font-semibold">Horário de Funcionamento</h4>
                  <p>Segunda a Sexta: 8h às 19h</p>
                  <p>Sábados: 8h às 15h</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}