'use client';

import React from 'react';
import Image from 'next/image';
import { Gift, Check, Sparkles, Layers, ListChecks, Ruler, DollarSign, Wrench } from 'lucide-react';
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
      emoji: '🪚',
      tag: 'O QUE ESTÁ INCLUSO',
      title: 'MAIS DE 1.000 PROJETOS PRONTOS',
      description: 'Uma biblioteca completa e organizada de projetos testados para você escolher e começar com segurança, sem perder tempo procurando.',
      icon: Sparkles,
      image: '/projeto-pronto.jpg',
      placeholderText: '[PROJETOS PRONTOS TESTADOS]',
      details: 'Móveis, organizadores, bancadas, nichos e projetos para iniciantes e avançados',
    },
    {
      id: 'feature-2',
      emoji: '🪵',
      tag: 'O QUE ESTÁ INCLUSO',
      title: 'LISTA COMPLETA DE MATERIAIS',
      description: 'Saiba exatamente o que comprar antes de ir à madeireira, evitando comprar itens errados ou perder dinheiro com sobras.',
      icon: ListChecks,
      image: '/lista-materiais.jpg',
      placeholderText: '[LISTA DE MATERIAIS COMPLETA]',
      details: 'Lista de madeiras, parafusos, dobradiças, colas e acabamentos necessários',
    },
    {
      id: 'feature-3',
      emoji: '📏',
      tag: 'O QUE ESTÁ INCLUSO',
      title: 'MEDIDAS E INSTRUÇÕES PASSO A PASSO',
      description: 'Tenha desenhos detalhados com todas as medidas em milímetros e o passo a passo exato de corte e montagem para não errar.',
      icon: Layers,
      image: '/medidas-instrucoes.jpg',
      placeholderText: '[MEDIDAS E MONTAGEM PASSO A PASSO]',
      details: 'Dimensões milimétricas precisas e sequência lógica de montagem ilustrada',
    },
    {
      id: 'feature-4',
      emoji: '💰',
      tag: 'O QUE ESTÁ INCLUSO',
      title: 'PROJETOS DE ALTA PROCURA PARA RENDA',
      description: 'Peças com visual moderno e comercial. Faça para sua própria casa ou produza para vender e gerar uma excelente renda extra.',
      icon: DollarSign,
      image: '/projetos-renda.jpg',
      placeholderText: '[PEÇAS COMERCIAIS LUCRATIVAS]',
      details: 'Modelos populares com alta procura, baixo custo de produção e lucro rápido',
    },
  ];

  return (
    <section
      id="o-que-voce-recebe"
      className="bg-[#F6F1E9] text-[#2C241E] py-16 px-4 sm:px-6 lg:px-8 border-b border-[#E5DAC8] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#2B1B12] mb-3"
        >
          O QUE VOCÊ VAI RECEBER POR DENTRO DA APOSTILA
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-base sm:text-lg text-[#6E5D4F] max-w-2xl mx-auto mb-12"
        >
          Tudo o que você precisa para sair do zero e construir seus projetos com total clareza e sem desperdício:
        </motion.p>

        {/* 4 Cards Grid */}
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
                  {/* Visual Preview / Imagem real anterior */}
                  <div className="relative aspect-square w-full overflow-hidden border-b border-[#DECDBB] bg-[#1F140E]">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  </div>

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

                {/* Bottom Card Tag */}
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

        {/* Bottom Banner Pill */}
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
            Acesso imediato e vitalício por apenas <span className="text-[#C0392B] font-black underline decoration-wavy decoration-[#E2B774]">R$ 5</span> hoje.
          </span>
        </motion.div>
      </div>
    </section>
  );
}
