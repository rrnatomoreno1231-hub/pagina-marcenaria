'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const UPSELL_CHECKOUT_URL = 'https://pay.wiapy.com/2H3VmiRV5aLX';

export default function UpsellPage() {
  // Dispara o evento de Purchase da compra inicial (R$ 5,00) com proteção anti-duplicação
  useEffect(() => {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const transactionId =
        urlParams.get('id') ||
        urlParams.get('transaction_id') ||
        urlParams.get('ref') ||
        urlParams.get('tid') ||
        urlParams.get('order_id') ||
        `tx_${Date.now()}`;

      if (!sessionStorage.getItem('purchase_tracked')) {
        const sendPurchase = () => {
          const w = window as unknown as { fbq?: (...args: unknown[]) => void };
          if (typeof w.fbq === 'function') {
            w.fbq(
              'track',
              'Purchase',
              {
                value: 5.0,
                currency: 'BRL',
              },
              {
                eventID: transactionId,
              }
            );
            sessionStorage.setItem('purchase_tracked', 'true');
          } else {
            setTimeout(sendPurchase, 200);
          }
        };

        sendPurchase();
      }
    } catch {
      // Ignora silenciosamente qualquer falha no rastreamento
    }
  }, []);

  // Preserva os parâmetros da URL (id, ref, utms) ao redirecionar para a página de obrigado
  const handleRefuseClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (typeof window !== 'undefined') {
      const currentParams = window.location.search;
      if (currentParams) {
        const targetHref = e.currentTarget.getAttribute('href') || '/obrigado';
        if (!targetHref.includes('?')) {
          e.preventDefault();
          window.location.href = `/obrigado${currentParams}`;
        }
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2C241E] flex flex-col font-sans selection:bg-[#E2B774] selection:text-[#2C241E]">
      {/* 1. LINHA VERMELHA NO TOPO DA PÁGINA */}
      <div
        id="upsell-top-banner"
        className="w-full bg-[#DC2626] text-white py-2 px-3 text-center shadow-xs"
      >
        <p className="text-[11px] sm:text-xs md:text-sm font-bold tracking-wide uppercase">
          🔒 OFERTA ÚNICA — VOCÊ NÃO TERÁ OUTRA CHANCE DE ADQUIRIR!
        </p>
      </div>

      <main className="flex-1 w-full max-w-3xl mx-auto px-4 sm:px-6 py-6 sm:py-10 flex flex-col items-center">
        {/* 2. HEADLINE */}
        <div className="text-center mb-4 sm:mb-6">
          <h1
            id="upsell-headline"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#21150F] leading-tight tracking-tight max-w-2xl mx-auto"
          >
            <span className="text-[#D97706] underline decoration-[#D97706]/40 decoration-4 underline-offset-4">
              ESPERA!
            </span>{' '}
            ANTES DE VOCÊ SAIR, TENHO UMA OPORTUNIDADE ÚNICA PARA VOCÊ.
          </h1>
        </div>

        {/* 3. SUBHEADLINE / PRINCIPAL MENSAGEM */}
        <div id="upsell-subheadline" className="text-center mb-6 sm:mb-8 max-w-xl mx-auto px-2">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#7A5B42] mb-1">
            APRENDA COMO LUCRAR
          </p>
          <div className="my-1">
            <span className="text-2xl sm:text-4xl md:text-5xl font-black text-[#D97706] tracking-tight leading-tight block">
              R$500 A R$1.000 POR SEMANA
            </span>
          </div>
          <p className="text-sm sm:text-base md:text-lg font-bold text-[#42332A] uppercase tracking-wide mt-1">
            Vendendo projetos de marcenaria
          </p>
        </div>

        {/* 4. IMAGEM PRINCIPAL COM MOCKUP DO PRODUTO (UP1) */}
        <div
          id="upsell-main-image-card"
          className="w-full max-w-2xl mx-auto mb-8 rounded-2xl overflow-hidden shadow-[0_14px_40px_rgba(44,36,30,0.14)] border border-[#DFCFC0] bg-transparent flex items-center justify-center p-0"
        >
          <Image
            src="/up1.jpg"
            alt="Aprenda como lucrar de R$500 a R$1.000 por semana vendendo projetos de marcenaria"
            width={1024}
            height={1024}
            priority
            className="w-full h-auto object-contain rounded-2xl select-none"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* 5. BULLET POINTS */}
        <div
          id="upsell-bullets-card"
          className="w-full bg-white rounded-2xl p-5 sm:p-7 border border-[#EAE0D3] shadow-[0_4px_20px_rgba(44,36,30,0.06)] mb-8"
        >
          <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#7A5B42] mb-4 text-center">
            O que você vai aprender neste material prático:
          </h2>
          <ul className="space-y-3 sm:space-y-3.5 text-left max-w-lg mx-auto">
            <li className="flex items-start gap-2.5 text-sm sm:text-base text-[#2C241E] font-medium leading-snug">
              <span className="text-base sm:text-lg flex-shrink-0">✅</span>
              <span>Descubra quais projetos têm maior potencial de venda</span>
            </li>
            <li className="flex items-start gap-2.5 text-sm sm:text-base text-[#2C241E] font-medium leading-snug">
              <span className="text-base sm:text-lg flex-shrink-0">✅</span>
              <span>Aprenda a calcular custos, preço e margem de lucro</span>
            </li>
            <li className="flex items-start gap-2.5 text-sm sm:text-base text-[#2C241E] font-medium leading-snug">
              <span className="text-base sm:text-lg flex-shrink-0">✅</span>
              <span>Saiba como apresentar seus móveis para conquistar clientes</span>
            </li>
            <li className="flex items-start gap-2.5 text-sm sm:text-base text-[#2C241E] font-medium leading-snug">
              <span className="text-base sm:text-lg flex-shrink-0">✅</span>
              <span>Aprenda a transformar projetos prontos em produtos para vender</span>
            </li>
            <li className="flex items-start gap-2.5 text-sm sm:text-base text-[#2C241E] font-medium leading-snug">
              <span className="text-base sm:text-lg flex-shrink-0">✅</span>
              <span>Aprenda como atrair clientes compradores toda semana</span>
            </li>
          </ul>
        </div>

        {/* 6. PREÇO COM ANCORAGEM */}
        <div id="upsell-price-section" className="text-center mb-5 w-full">
          <p className="text-base sm:text-lg text-[#8C7665] font-semibold mb-1">
            De <span className="line-through text-[#A33C3C] decoration-2">R$89,90</span>
          </p>
          <div className="inline-flex items-baseline justify-center gap-1.5">
            <span className="text-xl sm:text-2xl font-bold text-[#21150F]">
              POR APENAS
            </span>
            <span className="text-4xl sm:text-5xl md:text-6xl font-black text-[#D97706] tracking-tight">
              R$29,90
            </span>
          </div>
          <p className="text-xs text-[#7A5B42] font-medium mt-1">
            Pagamento único • Acesso imediato
          </p>
        </div>

        {/* 7. BOTÃO PRINCIPAL */}
        <div className="w-full max-w-md mx-auto mb-4">
          <a
            id="upsell-cta-button"
            href={UPSELL_CHECKOUT_URL}
            suppressHydrationWarning
            className="w-full group relative inline-flex items-center justify-center gap-2 px-6 py-4 sm:py-5 rounded-xl bg-gradient-to-r from-[#D97706] via-[#E28816] to-[#D97706] text-white font-extrabold text-base sm:text-lg text-center shadow-[0_10px_25px_-5px_rgba(217,119,6,0.55)] border border-[#FDE68A]/40 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <span>🔥 SIM, QUERO APRENDER A LUCRAR COM OS PROJETOS</span>
          </a>
        </div>

        {/* 8. LINK DE RECUSA DISCRETO (REDIRECIONA PARA PÁGINA DE OBRIGADO) */}
        <div className="text-center mb-8">
          <Link
            id="upsell-refuse-link"
            href="/obrigado"
            suppressHydrationWarning
            onClick={handleRefuseClick}
            className="text-xs sm:text-sm text-[#8C7665] hover:text-[#21150F] underline underline-offset-4 transition-colors duration-150 inline-block py-2"
          >
            Não, obrigado. Quero apenas o material principal.
          </Link>
        </div>

        {/* 9. GARANTIA */}
        <div
          id="upsell-guarantee-card"
          className="w-full max-w-md mx-auto text-center p-4 rounded-xl bg-[#F4EFEA] border border-[#E3D7C9]"
        >
          <div className="flex items-center justify-center gap-1.5 text-sm sm:text-base font-bold text-[#21150F] mb-1">
            <span>🛡️ 7 DIAS DE GARANTIA</span>
          </div>
          <p className="text-xs sm:text-sm text-[#6E5B4E]">
            Não gostou? Você tem até 7 dias para pedir seu dinheiro de volta.
          </p>
        </div>
      </main>
    </div>
  );
}
