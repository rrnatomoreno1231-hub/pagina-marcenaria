'use client';

import React, { useState } from 'react';
import { Check, X, ShieldCheck, Zap, Lock, AlertCircle, Sparkles, Star, Gift } from 'lucide-react';
import { motion } from 'motion/react';
import { trackInitiateCheckout } from '@/lib/pixel';
import DiscountPopupModal from '@/components/DiscountPopupModal';

interface OfferSectionProps {
  checkoutUrl5?: string;
  checkoutUrl19?: string;
  checkoutUrl12?: string;
  onCheckoutClick?: () => void;
}

const DEFAULT_CHECKOUT_URL_5 = 'https://pay.wiapy.com/az8OEsrz5vQ2';
const DEFAULT_CHECKOUT_URL_19 = 'https://pay.wiapy.com/7wwPIlVhLM78';
const DEFAULT_CHECKOUT_URL_12 = 'https://pay.wiapy.com/fdIrksRaYp6w';

export default function OfferSection({
  checkoutUrl5 = DEFAULT_CHECKOUT_URL_5,
  checkoutUrl19 = DEFAULT_CHECKOUT_URL_19,
  checkoutUrl12 = DEFAULT_CHECKOUT_URL_12,
  onCheckoutClick,
}: OfferSectionProps) {
  const [isDiscountPopupOpen, setIsDiscountPopupOpen] = useState(false);

  // Ao clicar no plano de R$ 5, abre o pop-up com a oferta exclusiva de R$ 12,90
  const handleBasicCardClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDiscountPopupOpen(true);
    if (onCheckoutClick) {
      onCheckoutClick();
    }
  };

  const handleCheckout19 = () => {
    trackInitiateCheckout({
      contentName: 'Apostila Marcenaria - Combo Completo VIP',
      value: 19.9,
      currency: 'BRL',
    });
    if (onCheckoutClick) {
      onCheckoutClick();
    }
  };

  return (
    <section
      id="oferta"
      className="bg-[#FAF7F2] text-[#2C241E] py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-[#E8DFC8] relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Urgency Pill */}
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
          className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#2B1B12] leading-tight max-w-3xl mx-auto mb-3 uppercase"
        >
          ESCOLHA O PACOTE IDEAL PARA O SEU OBJETIVO
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.18 }}
          className="text-base sm:text-lg text-[#6E5D4F] max-w-2xl mx-auto mb-10 sm:mb-14"
        >
          Comece com o plano essencial de entrada ou leve o Combo Mestre Completo com todos os bônus, planilha e projetos extras com o maior desconto.
        </motion.p>

        {/* Grid com 2 Cards de Preço */}
        <div
          id="card-de-compra"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 max-w-5xl mx-auto items-stretch scroll-mt-20 sm:scroll-mt-24"
        >
          {/* ================= CARD 1: PLANO BÁSICO (R$ 5,00) ================= */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.55 }}
            className="flex flex-col justify-between rounded-3xl bg-white border border-[#E3D8CC] shadow-[0_10px_35px_rgba(44,36,30,0.06)] overflow-hidden transition-all hover:border-[#CBB7A2] hover:shadow-[0_16px_45px_rgba(44,36,30,0.1)] text-left relative"
          >
            {/* Top Bar sutil do básico */}
            <div className="bg-[#ECE4D8] text-[#5C4A3C] py-2.5 px-4 font-bold text-xs uppercase tracking-wider text-center border-b border-[#DFCFC0]">
              OPÇÃO BÁSICA DE ENTRADA
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                {/* Header do Card */}
                <div className="text-center pb-5 border-b border-[#F0E6D8]">
                  <h3 className="text-xl sm:text-2xl font-black text-[#2B1B12] mb-1">
                    PLANO ESSENCIAL
                  </h3>
                  <p className="text-xs sm:text-sm text-[#7A6657]">
                    Para quem quer apenas os projetos básicos para começar
                  </p>
                </div>

                {/* Preço */}
                <div className="py-6 text-center">
                  <p className="text-sm font-semibold text-[#8C7665] tracking-wide mb-1">
                    DE <span className="line-through text-[#B91C1C]">R$ 27,90</span>
                  </p>
                  <p className="text-xs uppercase tracking-wider text-[#5C4A3C] font-extrabold mb-1">
                    POR APENAS
                  </p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-2xl sm:text-3xl font-extrabold text-[#2B1B12]">
                      R$
                    </span>
                    <span className="text-5xl sm:text-6xl font-black text-[#2B1B12] tracking-tight">
                      5,00
                    </span>
                  </div>
                  <div className="inline-block mt-2 bg-[#F3EFE9] border border-[#DDD3C5] text-[#5C4A3C] text-xs font-bold px-3 py-1 rounded-full">
                    PAGAMENTO ÚNICO
                  </div>
                </div>

                {/* Lista de Vantagens e Limitações */}
                <div className="space-y-3 pt-5 border-t border-[#F0E6D8]">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#8C7665] mb-2">
                    O que está incluso:
                  </p>

                  <div className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-[#1E4D2B] flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-sm text-[#2C241E] font-medium">
                      +1.000 Projetos Digitais Prontos
                    </span>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-[#1E4D2B] flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-sm text-[#2C241E] font-medium">
                      Medidas e dimensões em milímetros
                    </span>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-[#1E4D2B] flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-sm text-[#2C241E] font-medium">
                      Lista de materiais básica
                    </span>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-[#1E4D2B] flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-sm text-[#2C241E] font-medium">
                      Acesso imediato no seu e-mail
                    </span>
                  </div>

                  {/* Itens NÃO inclusos para contraste imediato */}
                  <div className="pt-2 space-y-2.5 opacity-60">
                    <div className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-[#E5E7EB] flex items-center justify-center text-[#9CA3AF] flex-shrink-0 mt-0.5">
                        <X className="w-3.5 h-3.5 stroke-[2.5]" />
                      </div>
                      <span className="text-xs sm:text-sm text-[#6B7280] line-through">
                        Sem +3.000 Projetos Extras Atualizados
                      </span>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-[#E5E7EB] flex items-center justify-center text-[#9CA3AF] flex-shrink-0 mt-0.5">
                        <X className="w-3.5 h-3.5 stroke-[2.5]" />
                      </div>
                      <span className="text-xs sm:text-sm text-[#6B7280] line-through">
                        Sem Guia de Otimização de Cortes (Zero Desperdício de MDF)
                      </span>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-[#E5E7EB] flex items-center justify-center text-[#9CA3AF] flex-shrink-0 mt-0.5">
                        <X className="w-3.5 h-3.5 stroke-[2.5]" />
                      </div>
                      <span className="text-xs sm:text-sm text-[#6B7280] line-through">
                        Sem Planilha Automática de Precificação e Lucro
                      </span>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-[#E5E7EB] flex items-center justify-center text-[#9CA3AF] flex-shrink-0 mt-0.5">
                        <X className="w-3.5 h-3.5 stroke-[2.5]" />
                      </div>
                      <span className="text-xs sm:text-sm text-[#6B7280] line-through">
                        Sem Módulo de Móveis Planejados Modernos
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Botão de Compra do Básico */}
              <div className="mt-8 pt-5 border-t border-[#F0E6D8]">
                <motion.button
                  id="offer-cta-button-basico"
                  type="button"
                  onClick={handleBasicCardClick}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-[#36271E] hover:bg-[#483529] text-white font-bold text-base shadow-md transition-all cursor-pointer text-center"
                >
                  <span>QUERO O PLANO ESSENCIAL (R$ 5)</span>
                </motion.button>
                <p className="text-center text-xs text-[#8C7665] font-medium mt-2.5">
                  Pagamento único de R$ 5,00
                </p>
              </div>
            </div>
          </motion.div>

          {/* ================= CARD 2: COMBO COMPLETO VIP (R$ 19,90) ================= */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col justify-between rounded-3xl bg-white border-2 border-[#D97706] shadow-[0_20px_50px_rgba(217,119,6,0.18)] overflow-hidden transition-all hover:shadow-[0_25px_65px_rgba(217,119,6,0.26)] text-left relative lg:-mt-2 lg:mb-[-8px]"
          >
            {/* Top Badge Destacado do VIP */}
            <div className="bg-gradient-to-r from-[#B45309] via-[#D97706] to-[#B45309] text-white py-2.5 px-4 font-black text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-1.5 shadow-sm text-center">
              <Sparkles className="w-4 h-4 text-[#FDE68A]" />
              <span>⭐ MAIS ESCOLHIDO • PACOTE COMPLETO VIP</span>
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                {/* Header do Card */}
                <div className="text-center pb-5 border-b border-[#F0E6D8]">
                  <div className="inline-flex items-center gap-1 text-[11px] font-extrabold uppercase tracking-widest text-[#B45309] bg-[#FEF3C7] px-2.5 py-0.5 rounded-full mb-1">
                    <Star className="w-3 h-3 fill-[#D97706] text-[#D97706]" />
                    <span>MELHOR CUSTO-BENEFÍCIO</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-[#2B1B12] mb-1">
                    COMBO MESTRE DA MARCENARIA
                  </h3>
                  <p className="text-xs sm:text-sm text-[#7A6657]">
                    O acervo definitivo com projetos extras, otimização de custos e planilha
                  </p>
                </div>

                {/* Preço */}
                <div className="py-6 text-center">
                  <p className="text-sm font-semibold text-[#8C7665] tracking-wide mb-1">
                    DE <span className="line-through text-[#B91C1C]">R$ 97,00</span>
                  </p>
                  <p className="text-xs uppercase tracking-wider text-[#1E4D2B] font-extrabold mb-1">
                    POR APENAS
                  </p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-2xl sm:text-3xl font-extrabold text-[#2B1B12]">
                      R$
                    </span>
                    <span className="text-5xl sm:text-7xl font-black text-[#1E4D2B] tracking-tight">
                      19,90
                    </span>
                  </div>
                  <div className="inline-block mt-2 bg-[#E7F6EC] border border-[#A7E3BD] text-[#166534] text-xs font-bold px-3 py-1 rounded-full shadow-xs">
                    ⚡ 80% DE DESCONTO SOMENTE HOJE
                  </div>
                </div>

                {/* Empilhamento de Vantagens (Stack de Bônus) */}
                <div className="space-y-3 pt-5 border-t border-[#F0E6D8]">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#D97706] flex items-center gap-1.5 mb-2">
                    <Gift className="w-4 h-4 text-[#D97706]" />
                    <span>TUDO O QUE VOCÊ LEVA NESSE COMBO:</span>
                  </p>

                  <div className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-[#1E4D2B] flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-sm text-[#2C241E] font-bold">
                      Tudo do Plano Básico incluso (+1.000 Projetos com Medidas)
                    </span>
                  </div>

                  <div className="flex items-start gap-2.5 bg-[#FFFBEB] p-2 rounded-xl border border-[#FDE68A]/70">
                    <div className="w-5 h-5 rounded-full bg-[#D97706] flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                      <Gift className="w-3 h-3" />
                    </div>
                    <div>
                      <span className="text-sm text-[#92400E] font-bold block">
                        🎁 BÔNUS 1: +3.000 Projetos Extras Atualizados
                      </span>
                      <span className="text-xs text-[#78350F]">
                        Totalizando mais de 4.000 projetos em PDF para nunca faltar ideias
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 bg-[#FFFBEB] p-2 rounded-xl border border-[#FDE68A]/70">
                    <div className="w-5 h-5 rounded-full bg-[#D97706] flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                      <Gift className="w-3 h-3" />
                    </div>
                    <div>
                      <span className="text-sm text-[#92400E] font-bold block">
                        🎁 BÔNUS 2: Guia de Corte Inteligente de MDF
                      </span>
                      <span className="text-xs text-[#78350F]">
                        Aprenda a aproveitar 100% da chapa sem jogar madeira ou dinheiro no lixo
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 bg-[#FFFBEB] p-2 rounded-xl border border-[#FDE68A]/70">
                    <div className="w-5 h-5 rounded-full bg-[#D97706] flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                      <Gift className="w-3 h-3" />
                    </div>
                    <div>
                      <span className="text-sm text-[#92400E] font-bold block">
                        🎁 BÔNUS 3: Planilha Automática de Precificação & Lucro
                      </span>
                      <span className="text-xs text-[#78350F]">
                        Calcule custos de chapas, parafusos, horas de trabalho e margem exata
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 bg-[#FFFBEB] p-2 rounded-xl border border-[#FDE68A]/70">
                    <div className="w-5 h-5 rounded-full bg-[#D97706] flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                      <Gift className="w-3 h-3" />
                    </div>
                    <div>
                      <span className="text-sm text-[#92400E] font-bold block">
                        🎁 BÔNUS 4: Módulo de Móveis Planejados & Decoração
                      </span>
                      <span className="text-xs text-[#78350F]">
                        Modelos de nichos, armários de cozinha, bancadas e painéis modernos
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-[#1E4D2B] flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-sm text-[#2C241E] font-semibold">
                      Manual de Ferramentas Essenciais e Macetes de Oficina
                    </span>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-[#1E4D2B] flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-sm text-[#2C241E] font-semibold">
                      Acesso Vitalício + Atualizações Gratuitas Sem Mensalidades
                    </span>
                  </div>
                </div>
              </div>

              {/* Botão de Compra do Combo VIP */}
              <div className="mt-8 pt-5 border-t border-[#F0E6D8]">
                <motion.a
                  id="offer-cta-button-vip"
                  href={checkoutUrl19}
                  suppressHydrationWarning
                  onClick={handleCheckout19}
                  whileHover={{ scale: 1.025, boxShadow: '0 15px 30px -5px rgba(217, 119, 6, 0.6)' }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full group relative inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-gradient-to-r from-[#D97706] via-[#E89C2C] to-[#D97706] hover:from-[#E89C2C] hover:to-[#B45309] text-[#1E110A] font-black text-lg sm:text-xl shadow-[0_10px_25px_-5px_rgba(217,119,6,0.6)] transition-all cursor-pointer border border-[#FDE68A]/50 text-center"
                >
                  <span className="text-xl group-hover:rotate-12 transition-transform duration-300">🔥</span>
                  <span>QUERO O COMBO COMPLETO (R$ 19,90)</span>
                </motion.a>
                <p className="text-center text-xs text-[#8C7665] font-semibold mt-2.5">
                  Pagamento único de R$ 19,90 • Acesso imediato no e-mail
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Security Seals / Reassurance */}
        <div className="max-w-xl mx-auto grid grid-cols-3 gap-3 mt-12 pt-8 border-t border-[#E8DFC8] text-center">
          <div className="flex flex-col items-center">
            <Lock className="w-5 h-5 text-[#1E4D2B] mb-1" />
            <span className="text-[10px] sm:text-xs font-bold text-[#3B291D]">
              Pagamento Seguro
            </span>
            <span className="text-[9px] text-[#8C7665]">Criptografia SSL</span>
          </div>
          <div className="flex flex-col items-center">
            <Zap className="w-5 h-5 text-[#D97706] mb-1" />
            <span className="text-[10px] sm:text-xs font-bold text-[#3B291D]">
              Acesso Imediato
            </span>
            <span className="text-[9px] text-[#8C7665]">No seu e-mail</span>
          </div>
          <div className="flex flex-col items-center">
            <ShieldCheck className="w-5 h-5 text-[#1E4D2B] mb-1" />
            <span className="text-[10px] sm:text-xs font-bold text-[#3B291D]">
              Garantia 7 Dias
            </span>
            <span className="text-[9px] text-[#8C7665]">Risco zero</span>
          </div>
        </div>
      </div>

      {/* Pop-up de Desconto Exclusivo ao Clicar no Plano de R$ 5,00 */}
      <DiscountPopupModal
        isOpen={isDiscountPopupOpen}
        onClose={() => setIsDiscountPopupOpen(false)}
        checkoutUrl5={checkoutUrl5}
        checkoutUrl12={checkoutUrl12}
      />
    </section>
  );
}
