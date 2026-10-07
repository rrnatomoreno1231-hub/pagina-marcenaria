'use client';

import React from 'react';
import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import FeaturesSection from '@/components/FeaturesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import OfferSection from '@/components/OfferSection';
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
      {/* 1. Hero: headline, subheadline e foto */}
      <HeroSection onCtaClick={scrollToPurchaseCard} />

      {/* 2. Seção de Copy / Problema: "O problema não é falta de vontade..." */}
      <ProblemSection onCtaClick={scrollToPurchaseCard} />

      {/* 3. O Que Você Vai Receber por dentro da Apostila (projetos, lista de materiais, medidas, projetos lucrativos) */}
      <FeaturesSection onCtaClick={scrollToPurchaseCard} />

      {/* 4. Prova social: Depoimentos (posicionados estrategicamente em cima dos tickets/oferta) */}
      <TestimonialsSection />

      {/* 5. Ofertas: card de compra e opções de plano */}
      <OfferSection />

      {/* 6. Para quem é & Garantia com Leonardo Marceneiro */}
      <TargetAudienceSection />
      <GuaranteeSection />

      {/* 7. Dúvidas frequentes */}
      <FaqSection />

      {/* CTA Final e Rodapé */}
      <FinalCtaSection onCtaClick={scrollToPurchaseCard} />
      <Footer />
    </main>
  );
}
