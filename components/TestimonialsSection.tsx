'use client';

import React from 'react';
import Image from 'next/image';
import { MessageSquareHeart } from 'lucide-react';

interface TestimonialImage {
  id: number;
  src: string;
  alt: string;
}

const TESTIMONIAL_IMAGES: TestimonialImage[] = [
  {
    id: 1,
    src: '/1.png',
    alt: 'Depoimento 1 - Fez o primeiro móvel com a apostila',
  },
  {
    id: 2,
    src: '/2.png',
    alt: 'Depoimento 2 - Compra de materiais sem desperdício',
  },
  {
    id: 3,
    src: '/3.png',
    alt: 'Depoimento 3 - Fez móvel e já recebeu encomendas para vender',
  },
  {
    id: 4,
    src: '/4.png',
    alt: 'Depoimento 4 - Lista de materiais e medidas certas',
  },
  {
    id: 5,
    src: '/5.png',
    alt: 'Depoimento 5 - Economia de tempo e dor de cabeça',
  },
];

// Duplicamos a lista para criar um loop infinito contínuo e perfeito
const CAROUSEL_ITEMS = [...TESTIMONIAL_IMAGES, ...TESTIMONIAL_IMAGES];

export default function TestimonialsSection() {
  return (
    <section
      id="depoimentos"
      className="py-14 sm:py-20 bg-[#FAF7F2] border-t border-[#EAE0D3] overflow-hidden relative"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8 sm:mb-12">
        {/* Badge Sutil */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#F3ECE2] border border-[#DFCFC0] text-[#7A5B42] text-xs font-bold uppercase tracking-wider mb-3.5 shadow-sm">
          <MessageSquareHeart className="w-3.5 h-3.5 text-[#D97706]" />
          <span>Resultados Reais</span>
        </div>

        {/* Título Simples e Direto */}
        <h2 className="text-2xl sm:text-4xl font-extrabold text-[#21150F] tracking-tight mb-2.5">
          O que falam sobre a <span className="text-[#D97706]">Apostila</span>
        </h2>

        {/* Subtítulo */}
        <p className="text-sm sm:text-base text-[#6E5B4E] max-w-md mx-auto">
          Relatos reais de quem já está aplicando o conteúdo e construindo seus projetos na prática.
        </p>
      </div>

      {/* Trilho Contínuo Deslizando para o Lado de Forma Constante */}
      <div className="w-full overflow-hidden relative py-2 select-none">
        {/* Sombras suaves nas extremidades para acabamento refinado */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-10 sm:w-28 bg-gradient-to-r from-[#FAF7F2] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-10 sm:w-28 bg-gradient-to-l from-[#FAF7F2] to-transparent z-10" />

        {/* Container animado em loop contínuo */}
        <div className="animate-marquee-continuous flex items-center gap-4 sm:gap-6 px-4">
          {CAROUSEL_ITEMS.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="w-[260px] sm:w-[320px] h-[390px] sm:h-[480px] flex-shrink-0 bg-[#0B141A] rounded-2xl overflow-hidden shadow-[0_8px_24px_rgba(33,21,15,0.08)] border border-[#2A241F]/15 flex items-center justify-center transition-transform duration-300 hover:scale-[1.02]"
            >
              {/* Imagem real com proporção padronizada */}
              <Image
                src={item.src}
                alt={item.alt}
                width={1024}
                height={1536}
                priority={index < 5}
                className="w-full h-full object-contain pointer-events-none select-none"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Dica discreta para o usuário */}
      <div className="text-center mt-6 text-xs text-[#8C7665]">
        Passe o mouse ou toque para pausar e ler
      </div>
    </section>
  );
}
