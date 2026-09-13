'use client';

import React from 'react';
import Image from 'next/image';
import { PackageCheck, Check, Sparkles, Layers, ListChecks, Ruler, DollarSign } from 'lucide-react';
import { motion } from 'motion/react';

interface FeaturesSectionProps {
  onCtaClick?: () => void;
}

export default function FeaturesSection({ onCtaClick }: FeaturesSectionProps) {
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

  const cards = [
    {
      id: 'feature-1',
      emoji: '📐',
      tag: 'COMPONENTE 01',
      title: 'PROJETOS PRONTOS',
      description: 'Escolha o projeto que mais combina com o que você quer construir.',
      icon: Ruler,
      image: '/projeto-pronto.jpg',
      placeholderText: '[PLACEHOLDER — PROJETO PRONTO]',
      details: '+1.000 opções organizadas por categoria e dificuldade',
    },
    {
      id: 'feature-2',
      emoji: '🪵',
      tag: 'COMPONENTE 02',
      title: 'LISTA DE MATERIAIS',
      description: 'Saiba o que comprar antes de gastar seu dinheiro.',
      icon: ListChecks,
      image: '/lista-materiais.jpg',
      placeholderText: '[PLACEHOLDER — LISTA DE MATERIAIS]',
      details: 'Lista exata de madeiras, ferragens e insumos necessários',
    },
    {
      id: 'feature-3',
      emoji: '📏',
      tag: 'COMPONENTE 03',
      title: 'MEDIDAS E INSTRUÇÕES',
      description: 'Tenha uma referência para entender como executar cada projeto.',
      icon: Layers,
      image: '/medidas-instrucoes.jpg',
      placeholderText: '[PLACEHOLDER — MEDIDAS TÉCNICAS]',
      details: 'Dimensões em milímetros e sequência lógica de montagem',
    },
    {
      id: 'feature-4',
      emoji: '💰',
      tag: 'COMPONENTE 04',
      title: 'PROJETOS QUE PODEM VIRAR RENDA',
      description: 'Faça para você ou use os projetos como referência para produzir e vender.',
      icon: DollarSign,
      image: '/projetos-renda.jpg',
      placeholderText: '[PLACEHOLDER — PEÇAS COMERCIAIS]',
      details: 'Nichos, suportes, bancos e móveis com alta procura de mercado',
    },
  ];

  return (
    <section
      id="o-que-voce-recebe"
      className="bg-[#F6F1E9] text-[#2C241E] py-16 px-4 sm:px-6 lg:px-8 border-b border-[#E5DAC8] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Top Badge matching the gift badge in reference */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center justify-center p-3 bg-[#EADCC8] rounded-2xl mb-4 shadow-sm border border-[#D9C4AB]"
        >
          <PackageCheck className="w-8 h-8 text-[#5A3825]" />
        </motion.div>

        {/* Section Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#2B1B12] mb-3"
        >
          E NÃO É SÓ UMA LISTA DE PROJETOS...
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-lg text-[#6E5D4F] max-w-2xl mx-auto mb-12"
        >
          Além dos +1.000 projetos, você também recebe informações para facilitar sua execução.
        </motion.p>

        {/* 4 Cards Grid - matching the reference 4 cards layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 text-left">
          {cards.map((card, idx) => {
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.12, ease: 'easeOut' }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-white rounded-2xl border border-[#DECDBB] shadow-sm hover:shadow-xl hover:border-[#C4A48A] transition-all flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  {/* Visual Preview / Real Image or Placeholder Frame */}
                  {card.image ? (
                    <div className="relative h-48 sm:h-52 w-full overflow-hidden border-b border-[#DECDBB] bg-[#1F140E]">
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-108"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1F140E]/80 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-1 rounded-md bg-[#251811]/90 text-[10px] font-extrabold text-[#F3B236] border border-[#D97706]/40 shadow-sm backdrop-blur-xs">
                          {card.tag}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-[#2D1E16] text-[#E8DCCF] p-4 text-center border-b border-[#DECDBB] relative flex flex-col items-center justify-center h-48 sm:h-52">
                      <div className="w-12 h-12 rounded-xl bg-[#422D22] border border-[#5A3E30] flex items-center justify-center text-2xl mb-2 shadow-inner">
                        {card.emoji}
                      </div>
                      <span className="text-[10px] font-mono tracking-wider text-[#D6C1AE] bg-[#1F140E] px-2.5 py-1 rounded border border-[#4D3527] mb-1">
                        {card.placeholderText}
                      </span>
                      <span className="text-[11px] font-semibold text-[#F3B236]">
                        {card.tag}
                      </span>
                    </div>
                  )}

                  {/* Body Content */}
                  <div className="p-5">
                    <h3 className="text-lg font-black text-[#2B1B12] mb-2 flex items-center gap-1.5">
                      <span>{card.emoji}</span>
                      <span>{card.title.replace(/^[^a-zA-ZÀ-ÿ]+/, '')}</span>
                    </h3>
                    <p className="text-sm text-[#594639] leading-relaxed mb-4">
                      {card.description}
                    </p>
                    <div className="pt-2 border-t border-[#F0E6D8] text-xs text-[#7A6657] flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-[#2A603B] flex-shrink-0" />
                      <span>{card.details}</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Card Tag / Action Button like "INCLUSO" in reference */}
                <div className="p-4 pt-0">
                  <div className="w-full text-center py-2 px-3 rounded-xl bg-[#1E4D2B] text-white font-bold text-xs tracking-wider flex items-center justify-center gap-1.5 shadow-sm group-hover:bg-[#256036] transition-colors">
                    <Check className="w-3.5 h-3.5 text-[#A3E635]" />
                    <span>INCLUSO NA APOSTILA</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner Pill matching the reference callout box */}
        <motion.div
          onClick={scrollToOffer}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.03 }}
          className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#FFFFFF] border-2 border-[#E2B774] text-[#2C1E16] shadow-sm max-w-xl mx-auto cursor-pointer transition-all hover:shadow-md hover:border-[#D97706]"
        >
          <Sparkles className="w-5 h-5 text-[#D97706] flex-shrink-0 animate-spin-slow" />
          <span className="text-sm sm:text-base font-bold">
            Tudo isso por apenas <span className="text-[#C0392B] font-black underline decoration-wavy decoration-[#E2B774]">R$ 5</span> hoje.
          </span>
        </motion.div>
      </div>
    </section>
  );
}
