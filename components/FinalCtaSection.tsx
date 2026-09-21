'use client';

import React from 'react';
import { motion } from 'motion/react';

interface FinalCtaSectionProps {
  onCtaClick?: () => void;
}

export default function FinalCtaSection({ onCtaClick }: FinalCtaSectionProps) {
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
      id="final-cta"
      className="bg-[#241710] text-[#FAF7F2] py-20 px-4 sm:px-6 lg:px-8 border-b border-[#3B2619] relative overflow-hidden text-center"
    >
      {/* Wood ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#4E3220]/30 via-transparent to-transparent pointer-events-none" />

      <div className="relative max-w-3xl mx-auto flex flex-col items-center">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight"
        >
          CHEGA DE FICAR PENSANDO NO QUE FAZER.
        </motion.h2>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-base sm:text-xl text-[#E8DCCF] max-w-2xl mx-auto mb-10 leading-relaxed font-normal"
        >
          Escolha um projeto, veja o material necessário e comece seu primeiro trabalho na marcenaria.
        </motion.p>

        {/* Big CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.55, delay: 0.25 }}
          className="w-full max-w-md mx-auto space-y-3"
        >
          <motion.button
            id="final-cta-button"
            onClick={scrollToOffer}
            whileHover={{ scale: 1.03, boxShadow: '0 15px 35px -5px rgba(30, 77, 43, 0.6)' }}
            whileTap={{ scale: 0.98 }}
            className="w-full group relative inline-flex items-center justify-center gap-2.5 px-8 py-4.5 rounded-2xl bg-[#1E4D2B] hover:bg-[#2A603B] text-white font-black text-lg sm:text-xl shadow-[0_10px_30px_rgba(30,77,43,0.4)] transition-all cursor-pointer border border-[#438757]"
          >
            <span className="text-xl group-hover:rotate-12 transition-transform duration-300">🪚</span>
            <span className="tracking-tight">QUERO MEUS +1.000 PROJETOS</span>
          </motion.button>

          {/* Subtext under button */}
          <p className="text-xs sm:text-sm font-bold text-[#E2B774] tracking-wider uppercase pt-1">
            ACESSO IMEDIATO POR APENAS R$ 5
          </p>
        </motion.div>
      </div>
    </section>
  );
}
