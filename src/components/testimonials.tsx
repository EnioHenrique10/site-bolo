import React from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Maria Silva',
    text: 'Os bolos são simplesmente maravilhosos! Sempre peço para festas de aniversário e todos adoram.',
    rating: 5
  },
  {
    id: 2,
    name: 'João Oliveira',
    text: 'Os salgados são os melhores da região. Crocantes e com recheio generoso. Recomendo!',
    rating: 5
  },
  {
    id: 3,
    name: 'Ana Santos',
    text: 'Encomendei um bolo para o aniversário do meu filho e foi um sucesso. Delicioso e lindo!',
    rating: 4
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-[#3a2618] text-[#f8d568]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">O Que Nossos Clientes Dizem</h2>
          <p>Opiniões de quem já experimentou nossas delícias</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-[#4a3628] rounded-lg p-6 shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    className={`w-5 h-5 ${i < testimonial.rating ? 'text-[#f8d568]' : 'text-[#7a6658]'}`} 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="mb-4 italic">"{testimonial.text}"</p>
              <p className="font-semibold">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}