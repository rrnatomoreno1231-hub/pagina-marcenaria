'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowDown } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroSectionProps {
  onCtaClick?: () => void;
}

export default function HeroSection({ onCtaClick: _onCtaClick }: HeroSectionProps) {
  const scrollToNext = () => {
    const el = document.getElementById('o-problema') || document.getElementById('o-que-voce-recebe');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="hero"
      className="relative bg-gradient-to-b from-[#251811] via-[#322016] to-[#1E130D] text-[#FAF7F2] pt-12 pb-16 px-4 sm:px-6 lg:px-8 border-b border-[#3D291C] overflow-hidden"
    >
      {/* Subtle wood-grain ambient radial background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#4E3220]/25 via-transparent to-transparent pointer-events-none" />

      <div className="relative max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          className="text-2xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold tracking-tight text-white leading-[1.18] max-w-4xl mb-5"
        >
          Tenha <span className="text-[#F3B236] font-black">+1.000 projetos prontos</span>, com <span className="text-[#FAF7F2] underline decoration-[#C4956A] decoration-2 underline-offset-6">medidas</span> e <span className="text-[#FAF7F2] underline decoration-[#C4956A] decoration-2 underline-offset-6">lista de materiais</span>, para escolher o que fazer e começar <span className="text-[#F3B236] font-black">sem ficar perdido</span>.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="text-lg sm:text-2xl text-[#E8DCCF] font-semibold leading-relaxed max-w-2xl mb-4 tracking-wide"
        >
          Não sabe por onde começar na marcenaria?
        </motion.p>

        {/* Highlight Banner / Tagline in warm amber */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.28, ease: 'easeOut' }}
          className="inline-block bg-[#E2B774]/15 border border-[#E2B774]/40 px-4 py-1.5 rounded-lg mb-8"
        >
          <span className="text-sm sm:text-base font-bold text-[#F3B236] tracking-wide uppercase">
            👉 COMECE PELO PROJETO CERTO.
          </span>
        </motion.div>

        {/* Product Mockup / Showcase Area */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.35, ease: 'easeOut' }}
          className="w-full max-w-md sm:max-w-lg mx-auto mb-8"
        >
          <div className="relative rounded-3xl p-3 sm:p-4 bg-gradient-to-b from-[#4A3324] to-[#251811] shadow-2xl border-2 border-[#5E402D] transition-all hover:border-[#835639]">
            {/* Real Mockup Image of Apostila & Technical Blueprints */}
            <div className="relative rounded-2xl bg-[#180E09] border border-[#3E291C] overflow-hidden shadow-2xl flex items-center justify-center group">
              <Image
                src="/hero-mockup.jpg"
                alt="Apostila de Marcenaria com +1.000 Projetos Prontos, Medidas e Lista de Materiais"
                width={600}
                height={600}
                priority
                className="w-full h-auto object-cover rounded-2xl block transition-transform duration-500 group-hover:scale-[1.02]"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </motion.div>

        {/* Soft Scroll Indicator */}
        <button
          type="button"
          onClick={scrollToNext}
          className="mt-2 text-[#C9BAAA] flex flex-col items-center gap-1.5 animate-bounce cursor-pointer hover:text-white transition-colors group"
          aria-label="Rolar para ver o que você vai receber"
        >
          <span className="text-xs font-semibold tracking-wider uppercase text-[#E2B774] group-hover:text-[#F3B236]">ROLE PARA VER POR DENTRO</span>
          <ArrowDown className="w-4 h-4 text-[#F3B236]" />
        </button>
      </div>
    </section>
  );
}
