'use client';

import React, { useRef, useEffect, useCallback, useState } from 'react';
import Image from 'next/image';
import { MessageSquareHeart, ChevronLeft, ChevronRight, MoveHorizontal } from 'lucide-react';

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

// Triplicamos a lista para criar um loop infinito contínuo e perfeito para ambas as direções
const CAROUSEL_ITEMS = [
  ...TESTIMONIAL_IMAGES,
  ...TESTIMONIAL_IMAGES,
  ...TESTIMONIAL_IMAGES,
];

export default function TestimonialsSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const singleSetWidthRef = useRef<number>(0);
  const isInteractingRef = useRef<boolean>(false);
  const resumeTimerRef = useRef<NodeJS.Timeout | null>(null);
  const isMouseDownRef = useRef<boolean>(false);
  const startXRef = useRef<number>(0);
  const scrollStartRef = useRef<number>(0);
  const [isDragging, setIsDragging] = useState(false);

  // Função para manter o loop infinito sem saltos visuais
  const wrapScroll = useCallback((el: HTMLDivElement) => {
    const setWidth = singleSetWidthRef.current;
    if (setWidth <= 0) return;

    if (el.scrollLeft >= setWidth * 2) {
      el.scrollLeft -= setWidth;
    } else if (el.scrollLeft <= 10) {
      el.scrollLeft += setWidth;
    }
  }, []);

  // Pausa temporariamente o auto-scroll durante toque ou arraste
  const pauseInteraction = useCallback(() => {
    if (resumeTimerRef.current) {
      clearTimeout(resumeTimerRef.current);
      resumeTimerRef.current = null;
    }
    isInteractingRef.current = true;
  }, []);

  // Retoma o auto-scroll de forma suave assim que o usuário solta o dedo
  const resumeInteraction = useCallback((delay = 1200) => {
    if (resumeTimerRef.current) {
      clearTimeout(resumeTimerRef.current);
    }
    resumeTimerRef.current = setTimeout(() => {
      isInteractingRef.current = false;
    }, delay);
  }, []);

  // Inicialização e loop suave de animação com requestAnimationFrame
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const measureWidth = () => {
      if (el) {
        singleSetWidthRef.current = el.scrollWidth / 3;
        // Posição inicial no bloco do meio
        if (el.scrollLeft === 0 && singleSetWidthRef.current > 0) {
          el.scrollLeft = singleSetWidthRef.current;
        }
      }
    };

    measureWidth();

    const resizeObserver = new ResizeObserver(() => {
      measureWidth();
    });
    resizeObserver.observe(el);

    // Auto-scroll contínuo e fluido
    let animId: number;
    let lastTime = performance.now();
    const speed = 36; // pixels por segundo

    const tick = (now: number) => {
      const delta = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;

      if (!isInteractingRef.current && el) {
        el.scrollLeft += speed * delta;
        wrapScroll(el);
      }

      animId = requestAnimationFrame(tick);
    };

    animId = requestAnimationFrame(tick);

    const onScroll = () => {
      wrapScroll(el);
    };

    el.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(animId);
      el.removeEventListener('scroll', onScroll);
      resizeObserver.disconnect();
      if (resumeTimerRef.current) {
        clearTimeout(resumeTimerRef.current);
      }
    };
  }, [wrapScroll]);

  // Navegação manual por botões
  const handleScrollStep = (direction: 'left' | 'right') => {
    pauseInteraction();
    if (containerRef.current) {
      const card = containerRef.current.querySelector('[data-card]') as HTMLElement | null;
      const step = (card?.offsetWidth || 280) + 16;
      containerRef.current.scrollBy({
        left: direction === 'left' ? -step : step,
        behavior: 'smooth',
      });
    }
    resumeInteraction(1800);
  };

  // Eventos de toque (mobile)
  const handleTouchStart = () => {
    pauseInteraction();
  };

  const handleTouchMove = () => {
    pauseInteraction();
  };

  const handleTouchEnd = () => {
    resumeInteraction(1200);
  };

  // Eventos de mouse (desktop drag)
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    pauseInteraction();
    isMouseDownRef.current = true;
    setIsDragging(true);
    startXRef.current = e.pageX - containerRef.current.offsetLeft;
    scrollStartRef.current = containerRef.current.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isMouseDownRef.current || !containerRef.current) return;
    e.preventDefault();
    const currentX = e.pageX - containerRef.current.offsetLeft;
    const walk = (currentX - startXRef.current) * 1.4;
    containerRef.current.scrollLeft = scrollStartRef.current - walk;
    wrapScroll(containerRef.current);
  };

  const handleMouseUp = () => {
    if (isMouseDownRef.current) {
      isMouseDownRef.current = false;
      setIsDragging(false);
      resumeInteraction(1200);
    }
  };

  const handleMouseLeave = () => {
    if (isMouseDownRef.current) {
      isMouseDownRef.current = false;
      setIsDragging(false);
      resumeInteraction(800);
    }
  };

  return (
    <section
      id="depoimentos"
      className="py-14 sm:py-20 bg-[#FAF7F2] border-t border-[#EAE0D3] overflow-hidden relative select-none"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-6 sm:mb-10">
        {/* Badge Sutil */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#F3ECE2] border border-[#DFCFC0] text-[#7A5B42] text-xs font-bold uppercase tracking-wider mb-3.5 shadow-xs">
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

      {/* Carrossel Interativo Touch & Drag com Auto-Scroll Fluido */}
      <div className="w-full relative py-2">
        {/* Sombras suaves nas extremidades para acabamento refinado */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-8 sm:w-28 bg-gradient-to-r from-[#FAF7F2] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-8 sm:w-28 bg-gradient-to-l from-[#FAF7F2] to-transparent z-10" />

        {/* Botão Anterior */}
        <button
          type="button"
          aria-label="Depoimento anterior"
          onClick={() => handleScrollStep('left')}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 hover:bg-white text-[#21150F] shadow-lg border border-[#E0D3C5] flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-xs"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Botão Próximo */}
        <button
          type="button"
          aria-label="Próximo depoimento"
          onClick={() => handleScrollStep('right')}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 hover:bg-white text-[#21150F] shadow-lg border border-[#E0D3C5] flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-xs"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Trilho rolável com suporte nativo a touch swipe e mouse drag */}
        <div
          ref={containerRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onTouchCancel={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          className={`flex items-center gap-4 sm:gap-6 px-4 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden touch-pan-x select-none ${
            isDragging ? 'cursor-grabbing' : 'cursor-grab'
          }`}
          style={{
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {CAROUSEL_ITEMS.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              data-card
              className="w-[260px] sm:w-[320px] h-[390px] sm:h-[480px] flex-shrink-0 bg-[#0B141A] rounded-2xl overflow-hidden shadow-[0_8px_24px_rgba(33,21,15,0.08)] border border-[#2A241F]/15 flex items-center justify-center transition-transform duration-200 hover:scale-[1.01]"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={1024}
                height={1536}
                priority={index < 5}
                draggable={false}
                className="w-full h-full object-contain pointer-events-none select-none"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Dica visual com ícone de deslizar */}
      <div className="flex items-center justify-center gap-1.5 mt-5 text-xs text-[#8C7665]">
        <MoveHorizontal className="w-3.5 h-3.5 text-[#D97706]" />
        <span>Deslize para qualquer lado • O movimento continua sozinho</span>
      </div>
    </section>
  );
}
