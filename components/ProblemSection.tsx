'use client';

import React from 'react';
import { motion } from 'motion/react';

interface ProblemSectionProps {
  onCtaClick?: () => void;
}

export default function ProblemSection({ onCtaClick }: ProblemSectionProps) {
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

  const problems = [
    {
      id: 'prob-1',
      text: 'Não sabe qual projeto fazer primeiro e acaba adiando o começo.',
    },
    {
      id: 'prob-2',
      text: 'Tem medo de errar as medidas e perder madeira e dinheiro.',
    },
    {
      id: 'prob-3',
      text: 'Não sabe exatamente o que comprar e acaba gastando com material que nem vai usar.',
    },
    {
      id: 'prob-4',
      text: 'Procura vídeos e projetos na internet, mas encontra conteúdo espalhado, complicado ou incompleto.',
    },
  ];

  return (
    <section
      id="o-problema"
      className="bg-[#FAF7F2] text-[#2C241E] py-16 px-4 sm:px-6 lg:px-8 border-b border-[#E8DFC8] overflow-hidden"
    >
      <div className="max-w-3xl mx-auto text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#2B1B12] leading-snug mb-3"
        >
          O PROBLEMA <span className="text-[#C0392B]">NÃO É</span> FALTA DE VONTADE. É NÃO SABER POR ONDE COMEÇAR.
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-base sm:text-lg text-[#6E5D4F] font-medium mb-8"
        >
          Se você está começando na marcenaria, provavelmente já passou por uma dessas situações:
        </motion.p>

        {/* 4 Problem Cards */}
        <div className="space-y-3.5 mb-12 text-left">
          {problems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              whileHover={{ scale: 1.015, x: 6 }}
              className="flex items-center gap-3.5 p-4 sm:p-5 rounded-2xl bg-[#FFF5F5] border border-[#F5C2C7] shadow-xs hover:border-[#E88C95] hover:shadow-md transition-all cursor-default"
            >
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FCE8E6] text-[#C0392B] flex items-center justify-center font-bold text-sm border border-[#F5C2C7] shadow-xs">
                ✕
              </span>
              <p className="text-sm sm:text-base font-medium text-[#492022] leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Emotional Transition Block */}
        <motion.div
          initial={{ opacity: 0, y: 25, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6 }}
          className="bg-[#FFFFFF] p-6 sm:p-8 rounded-3xl border border-[#E5DAC8] shadow-sm max-w-2xl mx-auto space-y-4 text-center hover:shadow-md transition-shadow"
        >
          <span className="inline-block text-2xl sm:text-3xl font-black text-[#2B1B12] tracking-wider uppercase">
            RESPIRA.
          </span>
          <p className="text-base sm:text-lg text-[#554336] leading-relaxed">
            Você não precisa saber tudo sobre marcenaria para começar.
            <br />
            Precisa apenas de um <strong className="text-[#1E4D2B] font-bold">projeto certo</strong>, com as informações certas na sua frente.
          </p>

          <div className="pt-2">
            <motion.button
              id="problem-cta-button"
              onClick={scrollToOffer}
              whileHover={{ scale: 1.03, boxShadow: '0 10px 25px -5px rgba(192, 57, 43, 0.4)' }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-[#C0392B] hover:bg-[#A93226] text-white font-bold text-base sm:text-lg shadow-md cursor-pointer transition-colors"
            >
              QUERO PARAR DE FICAR PERDIDO
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
