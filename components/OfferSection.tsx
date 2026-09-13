'use client';

import React from 'react';
import { Check, ShieldCheck, Zap, Lock, AlertCircle, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface OfferSectionProps {
  checkoutUrl?: string;
  onCheckoutClick?: () => void;
}

const DEFAULT_CHECKOUT_URL = 'https://pay.wiapy.com/6aa36378bb75787263a6b8e2';

export default function OfferSection({ 
  checkoutUrl = DEFAULT_CHECKOUT_URL,
  onCheckoutClick 
}: OfferSectionProps) {
  const items = [
    '+1.000 projetos de marcenaria',
    'Medidas e instruções',
    'Lista de materiais',
    'Acesso imediato',
    'Use os projetos para você ou para vender',
  ];

  return (
    <section
      id="oferta"
      className="bg-[#FAF7F2] text-[#2C241E] py-20 px-4 sm:px-6 lg:px-8 border-b border-[#E8DFC8] relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Urgency Pill matching reference */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FEF3C7] border border-[#FCD34D] text-[#92400E] text-xs sm:text-sm font-bold tracking-wide mb-5 shadow-xs"
        >
          <AlertCircle className="w-4 h-4 text-[#D97706]" />
          <span>ÚLTIMAS UNIDADES POR ESSE VALOR PROMOCIONAL</span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#2B1B12] leading-tight max-w-3xl mx-auto mb-3"
        >
          COMECE HOJE POR MENOS DO QUE VOCÊ GASTA EM UMA CERVEJA
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.18 }}
          className="text-base sm:text-lg text-[#6E5D4F] max-w-2xl mx-auto mb-10"
        >
          Tenha acesso à apostila completa com +1.000 projetos de marcenaria.
        </motion.p>

        {/* Single Pricing Card */}
        <motion.div
          id="card-de-compra"
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-md mx-auto scroll-mt-20 sm:scroll-mt-24"
        >
          <div className="relative rounded-3xl bg-white border-2 border-[#D97706] shadow-[0_20px_50px_rgba(217,119,6,0.18)] overflow-hidden transition-all hover:shadow-[0_25px_60px_rgba(217,119,6,0.25)]">
            
            {/* Top Badge */}
            <div className="bg-gradient-to-r from-[#B45309] via-[#D97706] to-[#B45309] text-white py-2.5 px-4 font-black text-xs sm:text-sm tracking-widest uppercase flex items-center justify-center gap-1.5 shadow-sm">
              <Sparkles className="w-4 h-4 text-[#FDE68A]" />
              <span>ACESSO COMPLETO • OFERTA EXCLUSIVA</span>
            </div>

            <div className="p-6 sm:p-8 text-left">
              {/* Card Title & Target */}
              <div className="text-center pb-5 border-b border-[#F0E6D8]">
                <h3 className="text-xl sm:text-2xl font-black text-[#2B1B12] mb-1">
                  APOSTILA DE MARCENARIA
                </h3>
                <p className="text-xs sm:text-sm text-[#7A6657]">
                  Acesso vitalício aos +1.000 projetos digitais
                </p>
              </div>

              {/* Price Display */}
              <div className="py-6 text-center">
                <p className="text-sm font-semibold text-[#8C7665] tracking-wide mb-1">
                  DE <span className="line-through text-[#B91C1C]">R$ 27,90</span>
                </p>
                <p className="text-xs uppercase tracking-wider text-[#1E4D2B] font-extrabold mb-1">
                  POR APENAS
                </p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#2B1B12]">
                    R$
                  </span>
                  <span className="text-6xl sm:text-7xl font-black text-[#1E4D2B] tracking-tight">
                    5,00
                  </span>
                </div>
                <div className="inline-block mt-2 bg-[#E7F6EC] border border-[#A7E3BD] text-[#166534] text-xs font-bold px-3 py-1 rounded-full">
                  ⚡ 82% DE DESCONTO SOMENTE HOJE
                </div>
              </div>

              {/* Included Items List */}
              <div className="space-y-3.5 mb-8 pt-4 border-t border-[#F0E6D8]">
                {items.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#1E4D2B] flex items-center justify-center text-white flex-shrink-0 mt-0.5 shadow-xs">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-sm sm:text-base font-medium text-[#38281F]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Big CTA Button */}
              <motion.a
                id="offer-cta-button"
                href={checkoutUrl}
                onClick={onCheckoutClick}
                whileHover={{ scale: 1.025, boxShadow: '0 15px 30px -5px rgba(217, 119, 6, 0.6)' }}
                whileTap={{ scale: 0.98 }}
                className="w-full group relative inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-gradient-to-r from-[#D97706] via-[#E89C2C] to-[#D97706] hover:from-[#E89C2C] hover:to-[#B45309] text-[#1E110A] font-black text-lg sm:text-xl shadow-[0_10px_25px_-5px_rgba(217,119,6,0.6)] transition-all cursor-pointer border border-[#FDE68A]/50 text-center"
              >
                <span className="text-xl group-hover:rotate-12 transition-transform duration-300">🪚</span>
                <span>QUERO ACESSAR AGORA</span>
              </motion.a>

              {/* Subtext under button */}
              <p className="text-center text-xs text-[#7A6657] font-medium mt-3">
                Pagamento único • Acesso imediato
              </p>

              {/* Security Seals / Reassurance matching reference */}
              <div className="grid grid-cols-3 gap-2 mt-6 pt-5 border-t border-[#F0E6D8] text-center">
                <div className="flex flex-col items-center">
                  <Lock className="w-5 h-5 text-[#1E4D2B] mb-1" />
                  <span className="text-[10px] sm:text-[11px] font-bold text-[#3B291D]">
                    Pagamento Seguro
                  </span>
                  <span className="text-[9px] text-[#8C7665]">Criptografia SSL</span>
                </div>
                <div className="flex flex-col items-center">
                  <Zap className="w-5 h-5 text-[#D97706] mb-1" />
                  <span className="text-[10px] sm:text-[11px] font-bold text-[#3B291D]">
                    Acesso Imediato
                  </span>
                  <span className="text-[9px] text-[#8C7665]">No seu e-mail</span>
                </div>
                <div className="flex flex-col items-center">
                  <ShieldCheck className="w-5 h-5 text-[#1E4D2B] mb-1" />
                  <span className="text-[10px] sm:text-[11px] font-bold text-[#3B291D]">
                    Garantia 7 Dias
                  </span>
                  <span className="text-[9px] text-[#8C7665]">Risco zero</span>
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
