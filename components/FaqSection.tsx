'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Para quem é essa apostila?',
      a: 'Para quem está começando na marcenaria e quer ter projetos prontos para consultar e executar, mesmo sem muita experiência.',
    },
    {
      q: 'Preciso entender de marcenaria para usar?',
      a: 'Não. A proposta é justamente facilitar o início para quem ainda está aprendendo.',
    },
    {
      q: 'Os projetos possuem medidas e materiais?',
      a: 'Sim. A apostila reúne projetos com informações para ajudar você a entender o que precisa para executar cada um.',
    },
    {
      q: 'Posso usar os projetos para fazer móveis para vender?',
      a: 'Sim. Você pode usar os projetos como referência para produzir peças para uso próprio ou comercial.',
    },
    {
      q: 'Vou receber acesso na hora?',
      a: 'Sim. Após a confirmação do pagamento, o acesso é liberado.',
    },
    {
      q: 'Preciso comprar algum material antes?',
      a: 'Não. O ideal é primeiro escolher o projeto e conferir a lista de materiais antes de comprar.',
    },
    {
      q: 'E se eu comprar e não gostar?',
      a: 'Você conta com 7 dias de garantia para solicitar o reembolso.',
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      id="faq"
      className="bg-[#F6F1E9] text-[#2C241E] py-16 px-4 sm:px-6 lg:px-8 border-b border-[#E5DAC8] overflow-hidden"
    >
      <div className="max-w-3xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EADCC8] text-[#5A3825] text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Tire Suas Dúvidas</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#2B1B12]">
            Perguntas <span className="text-[#A06018]">Frequentes</span>
          </h2>
        </motion.div>

        {/* Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="bg-white rounded-2xl border border-[#DECDBB] shadow-xs overflow-hidden transition-all hover:border-[#C4A48A]"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-semibold text-[#2B1B12] hover:bg-[#FAF7F2] transition-colors cursor-pointer text-sm sm:text-base"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold">{faq.q}</span>
                  <div
                    className={`w-7 h-7 rounded-full bg-[#F3ECE3] flex items-center justify-center flex-shrink-0 text-[#5A3825] transition-all duration-300 ${
                      isOpen ? 'rotate-180 bg-[#E2B774] text-[#1E120A]' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key={`content-${idx}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-1 text-sm sm:text-base text-[#614E40] leading-relaxed border-t border-[#F4EBE0] bg-[#FAF7F2]/50">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
