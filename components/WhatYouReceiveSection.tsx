'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

interface WhatYouReceiveSectionProps {
  onCtaClick?: () => void;
}

interface ProductItem {
  id: string;
  image: string;
  number: number;
  title: string;
  scaleClass?: string;
}

const ITEMS: ProductItem[] = [
  {
    id: 'p0',
    image: '/p0.png',
    number: 1,
    title: 'Móveis Versáteis para Cada Espaço',
    scaleClass: 'scale-100',
  },
  {
    id: 'p1',
    image: '/p1.png',
    number: 2,
    title: 'Móveis Inteligentes 2 em 1',
    scaleClass: 'scale-100',
  },
  {
    id: 'p2',
    image: '/p2.png',
    number: 3,
    title: 'Soluções Práticas para o Dia a Dia',
    scaleClass: 'scale-100',
  },
  {
    id: 'p3',
    image: '/p3.png',
    number: 4,
    title: 'Soluções de Organização',
    scaleClass: 'scale-115 sm:scale-120',
  },
  {
    id: 'p4',
    image: '/p4.png',
    number: 5,
    title: 'Projetos Práticos e Modernos',
    scaleClass: 'scale-120 sm:scale-125',
  },
  {
    id: 'p5',
    image: '/p5.png',
    number: 6,
    title: 'Guia e Lista de Materiais',
    scaleClass: 'scale-100',
  },
  {
    id: 'p6',
    image: '/p6.png',
    number: 7,
    title: 'Plano de Corte Detalhado',
    scaleClass: 'scale-100',
  },
  {
    id: 'p7',
    image: '/p7.png',
    number: 8,
    title: 'Guia da Montagem',
    scaleClass: 'scale-100',
  },
];

export default function WhatYouReceiveSection({ onCtaClick }: WhatYouReceiveSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  // Measure container width for fluid peek carousel math
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Touch swipe support for mobile
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const touchEndY = useRef<number | null>(null);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev < ITEMS.length - 1 ? prev + 1 : prev));
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
    touchEndY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = () => {
    if (
      touchStartX.current === null ||
      touchEndX.current === null ||
      touchStartY.current === null ||
      touchEndY.current === null
    ) {
      return;
    }
    const diffX = touchStartX.current - touchEndX.current;
    const diffY = touchStartY.current - touchEndY.current;

    // Dispara a troca apenas se o gesto for predominantemente horizontal
    if (Math.abs(diffX) > Math.abs(diffY) * 1.4 && Math.abs(diffX) > 40) {
      if (diffX > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }

    touchStartX.current = null;
    touchEndX.current = null;
    touchStartY.current = null;
    touchEndY.current = null;
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  // Responsive slide size and peek gap
  const getSlideWidth = () => {
    if (!containerWidth) return 320;
    if (containerWidth < 640) {
      return Math.min(containerWidth - 72, 310);
    }
    if (containerWidth < 1024) {
      return 380;
    }
    return 420;
  };

  const slideWidth = getSlideWidth();
  const gap = containerWidth < 640 ? 14 : 22;

  // Center the active slide in the container
  const trackOffset = containerWidth
    ? containerWidth / 2 - (currentIndex * (slideWidth + gap) + slideWidth / 2)
    : 0;

  const currentItem = ITEMS[currentIndex];

  const scrollToOffer = () => {
    if (onCtaClick) {
      onCtaClick();
      return;
    }
    const el = document.getElementById('card-de-compra') || document.getElementById('oferta');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section
      id="o-que-voce-vai-receber"
      className="bg-[#FAF7F2] text-[#2C241E] py-16 sm:py-20 border-b border-[#E8DFC8] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        {/* Section Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.4 }}
          className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-[#2B1B12] uppercase mb-2"
        >
          VEJA POR DENTRO O QUE VOCÊ VAI RECEBER
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-sm sm:text-base text-[#6E5D4F] max-w-lg mx-auto mb-10"
        >
          Confira abaixo algumas páginas reais dos projetos e instruções práticas:
        </motion.p>
      </div>

      {/* Minimalist Carousel with Center Focus & Side Previews */}
      <div className="relative w-full max-w-6xl mx-auto px-2 sm:px-4">
        {/* Navigation Button: Prev (Left) */}
        <button
          id="prev-slide-btn"
          type="button"
          onClick={handlePrev}
          disabled={currentIndex === 0}
          aria-label="Página anterior"
          className={`absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/95 hover:bg-white text-[#2B1B12] hover:text-[#EA580C] shadow-lg border border-[#DECDBB] flex items-center justify-center transition-all cursor-pointer active:scale-95 ${
            currentIndex === 0
              ? 'opacity-25 cursor-not-allowed pointer-events-none'
              : 'opacity-90 hover:opacity-100 hover:scale-105'
          }`}
        >
          <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
        </button>

        {/* Navigation Button: Next (Right) */}
        <button
          id="next-slide-btn"
          type="button"
          onClick={handleNext}
          disabled={currentIndex === ITEMS.length - 1}
          aria-label="Próxima página"
          className={`absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/95 hover:bg-white text-[#2B1B12] hover:text-[#EA580C] shadow-lg border border-[#DECDBB] flex items-center justify-center transition-all cursor-pointer active:scale-95 ${
            currentIndex === ITEMS.length - 1
              ? 'opacity-25 cursor-not-allowed pointer-events-none'
              : 'opacity-90 hover:opacity-100 hover:scale-105'
          }`}
        >
          <ChevronRight className="w-6 h-6 stroke-[2.5]" />
        </button>

        {/* Carousel Container (Smooth Sliding Track) */}
        <div
          ref={containerRef}
          className="relative w-full overflow-hidden py-4 select-none"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex items-center transition-transform duration-500 ease-out will-change-transform"
            style={{
              transform: `translate3d(${trackOffset}px, 0, 0)`,
            }}
          >
            {ITEMS.map((item, idx) => {
              const isActive = idx === currentIndex;
              return (
                <div
                  key={item.id}
                  onClick={() => setCurrentIndex(idx)}
                  style={{
                    width: `${slideWidth}px`,
                    marginRight: `${gap}px`,
                  }}
                  className={`flex-shrink-0 transition-all duration-500 ${
                    isActive
                      ? 'scale-100 opacity-100 cursor-default z-20'
                      : 'scale-90 opacity-40 hover:opacity-75 cursor-pointer z-10'
                  }`}
                >
                  {/* Clean Minimalist Image Wrapper (No outer card structure) */}
                  <div
                    className={`relative aspect-square w-full rounded-2xl overflow-hidden bg-white transition-all duration-300 ${
                      isActive
                        ? 'shadow-[0_12px_36px_-6px_rgba(43,27,18,0.22)] ring-2 ring-[#D97706]/40'
                        : 'shadow-md border border-[#E5DAC8]'
                    }`}
                  >
                    <div
                      className={`relative w-full h-full p-2.5 sm:p-4 flex items-center justify-center transition-transform duration-300 ${
                        item.scaleClass || 'scale-100'
                      }`}
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        priority={idx <= 1}
                        sizes="(max-width: 640px) 310px, 420px"
                        className="object-contain"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Clean, Non-Boxed Description (Pure typography below the photo) */}
        <div className="text-center mt-4 sm:mt-6 px-4">
          <h3 className="text-lg sm:text-2xl font-black text-[#2B1B12] tracking-tight">
            {currentItem.title}
          </h3>
        </div>

        {/* Minimal Navigation Dots */}
        <div className="flex items-center justify-center gap-2 mt-5">
          {ITEMS.map((item, idx) => (
            <button
              key={`dot-${item.id}`}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Ir para página ${idx + 1}`}
              className={`transition-all rounded-full cursor-pointer ${
                idx === currentIndex
                  ? 'w-6 sm:w-7 h-2 bg-[#EA580C] shadow-xs'
                  : 'w-2 h-2 bg-[#D9C4AB] hover:bg-[#8C7665]'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Action CTA */}
      <div className="max-w-xl mx-auto text-center px-4 mt-10">
        <button
          id="receive-section-cta"
          type="button"
          onClick={scrollToOffer}
          className="inline-flex items-center justify-center gap-2 py-3.5 px-6 sm:px-8 rounded-2xl bg-[#1E4D2B] hover:bg-[#256036] text-white font-extrabold text-sm sm:text-base shadow-md hover:shadow-lg transition-all cursor-pointer active:scale-98 uppercase tracking-wide border border-[#2D7340]"
        >
          <Sparkles className="w-4 h-4 text-[#A3E635]" />
          <span>QUERO TER ACESSO A TODOS OS PROJETOS POR R$ 5,00</span>
        </button>
      </div>
    </section>
  );
}
