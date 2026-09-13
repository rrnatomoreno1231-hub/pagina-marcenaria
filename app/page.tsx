'use client';

import React from 'react';
import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import FeaturesSection from '@/components/FeaturesSection';
import OfferSection from '@/components/OfferSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import TargetAudienceSection from '@/components/TargetAudienceSection';
import GuaranteeSection from '@/components/GuaranteeSection';
import FaqSection from '@/components/FaqSection';
import FinalCtaSection from '@/components/FinalCtaSection';
import Footer from '@/components/Footer';

export default function Home() {
  const scrollToPurchaseCard = () => {
    const card = document.getElementById('card-de-compra') || document.getElementById('oferta');
    if (card) {
      card.scrollIntoView({ behavior: 'smooth', block: 'center' });
      card.classList.add('ring-4', 'ring-[#D97706]', 'ring-offset-4', 'transition-all', 'duration-300');
      setTimeout(() => {
        card.classList.remove('ring-4', 'ring-[#D97706]', 'ring-offset-4');
      }, 1800);
    }
  };

  return (
    <main className="min-h-screen bg-[#FAF7F2] text-[#2C241E] flex flex-col selection:bg-[#E2B774] selection:text-[#2C241E]">
      {/* Seção 1 — Hero */}
      <HeroSection onCtaClick={scrollToPurchaseCard} />

      {/* Seção 2 — O Problema */}
      <ProblemSection onCtaClick={scrollToPurchaseCard} />

      {/* Seção 3 — O Que a Pessoa Recebe */}
      <FeaturesSection onCtaClick={scrollToPurchaseCard} />

      {/* Seção 4 — Oferta / Preço (Card de Compra) */}
      <OfferSection />

      {/* Seção de Depoimentos (Abaixo do Card de Compra) */}
      <TestimonialsSection />

      {/* Seção 5 — Para Quem É */}
      <TargetAudienceSection />

      {/* Seção 7 — Garantia */}
      <GuaranteeSection />

      {/* Seção 8 — FAQ (Perguntas Frequentes) */}
      <FaqSection />

      {/* Seção 9 — CTA Final */}
      <FinalCtaSection onCtaClick={scrollToPurchaseCard} />

      {/* Rodapé */}
      <Footer />
    </main>
  );
}
