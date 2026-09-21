'use client';

import React, { useEffect } from 'react';
import { X, Clock, ShieldCheck, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { trackInitiateCheckout } from '@/lib/pixel';

interface DiscountPopupModalProps {
  isOpen: boolean;
  onClose: () => void;
  checkoutUrl5: string;
  checkoutUrl12: string;
}

export default function DiscountPopupModal({
  isOpen,
  onClose,
  checkoutUrl5,
  checkoutUrl12,
}: DiscountPopupModalProps) {
  // Fecha o modal ao pressionar ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Ação ao aceitar a oferta de R$ 12,90
  const handleAcceptDiscount = () => {
    trackInitiateCheckout({
      contentName: 'Apostila Marcenaria - Combo Completo Oferta Pop-up',
      value: 12.9,
      currency: 'BRL',
    });
  };

  // Ação ao recusar e prosseguir para o checkout de R$ 5,00
  const handleRefuseAndContinue = () => {
    trackInitiateCheckout({
      contentName: 'Apostila Marcenaria - Plano Essencial',
      value: 5.0,
      currency: 'BRL',
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          id="discount-popup-portal"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto"
        >
          {/* Backdrop escuro com desfoque */}
          <motion.div
            id="discount-popup-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/65 backdrop-blur-xs cursor-pointer"
            aria-hidden="true"
          />

          {/* Card do Pop-up */}
          <motion.div
            id="discount-popup-card"
            role="dialog"
            aria-modal="true"
            aria-labelledby="discount-popup-title"
            initial={{ opacity: 0, scale: 0.92, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="relative w-full max-w-sm sm:max-w-md bg-white rounded-3xl shadow-2xl border border-[#F3ECE4] p-5 sm:p-7 text-center z-10 my-auto overflow-hidden"
          >
            {/* Linha superior / Barra de Progresso (Inspirada no modelo anexado) */}
            <div className="flex items-center justify-between gap-2 mb-3">
              <div className="flex-1 text-left">
                <span className="text-[11px] sm:text-xs font-semibold text-[#8C7665] block mb-1">
                  Passo 1 de 2: Personalize seu pedido
                </span>
                <div className="w-full bg-[#E5E7EB] h-1.5 rounded-full overflow-hidden">
                  <div className="bg-[#22C55E] h-full w-2/5 rounded-full" />
                </div>
              </div>

              {/* Botão de Fechar */}
              <button
                id="discount-popup-close-btn"
                type="button"
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-[#F3F4F6] hover:bg-[#E5E7EB] text-[#6B7280] hover:text-[#111827] flex items-center justify-center transition-colors cursor-pointer flex-shrink-0"
                aria-label="Fechar pop-up"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Selo de Alerta "⏰ ESPERE!" */}
            <div className="inline-flex items-center gap-1.5 text-[#EA580C] font-black text-sm sm:text-base tracking-wider uppercase mb-2 mt-1">
              <Clock className="w-4 h-4 animate-pulse stroke-[2.5]" />
              <span>ESPERE!</span>
            </div>

            {/* Título Principal */}
            <h2
              id="discount-popup-title"
              className="text-lg sm:text-xl md:text-[22px] font-black text-[#1E110A] leading-tight mb-2.5"
            >
              Que tal levar o Combo Completo por um preço exclusivo?
            </h2>

            {/* Descrição Explicativa */}
            <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed mb-4 px-1">
              Aproveite agora: leve o <strong className="text-[#2C241E]">Combo Completo VIP</strong> com mais de 1.000 Projetos + todos os 4 Bônus Exclusivos por apenas:
            </p>

            {/* Bloco de Preço com Ancoragem */}
            <div id="discount-popup-price" className="my-3 py-1">
              <p className="text-xs sm:text-sm text-[#9CA3AF] line-through font-semibold">
                De R$ 19,90
              </p>
              <div className="inline-flex items-baseline justify-center gap-1 mt-0.5">
                <span className="text-xl sm:text-2xl font-black text-[#EA580C]">
                  R$
                </span>
                <span className="text-4xl sm:text-5xl font-black text-[#EA580C] tracking-tight">
                  12,90
                </span>
              </div>
              <p className="text-[11px] font-bold text-[#15803D] bg-[#DCFCE7] inline-block px-2.5 py-0.5 rounded-full mt-1.5">
                Economia imediata de R$ 7,00 nesta etapa!
              </p>
            </div>

            {/* Botão de Compra Destacado (Principal) */}
            <div className="mt-4 mb-2">
              <motion.a
                id="discount-popup-accept-btn"
                href={checkoutUrl12}
                suppressHydrationWarning
                onClick={handleAcceptDiscount}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3.5 sm:py-4 px-5 rounded-2xl bg-gradient-to-r from-[#EA580C] via-[#F97316] to-[#EA580C] hover:from-[#C2410C] hover:to-[#EA580C] text-white font-black text-sm sm:text-base shadow-[0_10px_25px_-5px_rgba(234,88,12,0.55)] border border-[#FED7AA]/40 cursor-pointer transition-all uppercase tracking-wide flex items-center justify-center gap-2 text-center"
              >
                <Zap className="w-4 h-4 fill-white" />
                <span>QUERO O COMBO COMPLETO POR R$ 12,90</span>
              </motion.a>
            </div>

            {/* Botão de Recusa / Continuar para o básico (Menor e mais apagado) */}
            <div className="mt-3">
              <a
                id="discount-popup-refuse-btn"
                href={checkoutUrl5}
                suppressHydrationWarning
                onClick={handleRefuseAndContinue}
                className="text-xs sm:text-[13px] text-[#8C7665] hover:text-[#36271E] underline underline-offset-4 transition-colors cursor-pointer py-1.5 px-2 block w-full text-center leading-tight"
              >
                Não, obrigado. Quero apenas o pacote básico (R$ 5,00)
              </a>
            </div>

            {/* Micro-garantias */}
            <div className="mt-4 pt-3 border-t border-[#F3ECE4] flex items-center justify-center gap-4 text-[10px] sm:text-[11px] text-[#9CA3AF]">
              <span className="inline-flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#15803D]" /> Compra 100% Segura
              </span>
              <span>•</span>
              <span>Garantia de 7 dias</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
