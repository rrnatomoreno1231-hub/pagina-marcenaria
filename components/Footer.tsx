'use client';

import React, { useState } from 'react';
import { X, Shield, FileText, Mail } from 'lucide-react';

export default function Footer() {
  const [activeModal, setActiveModal] = useState<'termos' | 'privacidade' | 'suporte' | null>(null);

  return (
    <>
      <footer
        id="rodape"
        className="bg-[#180E09] text-[#A69080] py-10 px-4 sm:px-6 lg:px-8 text-center text-xs sm:text-sm"
      >
        <div className="max-w-4xl mx-auto space-y-4">
          <p className="font-medium text-[#C9BAAA]">
            © 2026 — Todos os direitos reservados.
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap text-xs text-[#8C7665]">
            <button
              onClick={() => setActiveModal('termos')}
              className="hover:text-[#E2B774] transition-colors cursor-pointer"
            >
              Termos de Uso
            </button>
            <span>•</span>
            <button
              onClick={() => setActiveModal('privacidade')}
              className="hover:text-[#E2B774] transition-colors cursor-pointer"
            >
              Política de Privacidade
            </button>
            <span>•</span>
            <button
              onClick={() => setActiveModal('suporte')}
              className="hover:text-[#E2B774] transition-colors cursor-pointer"
            >
              Suporte
            </button>
          </div>

          <p className="text-[11px] text-[#695446] max-w-xl mx-auto pt-2">
            Apostila de Marcenaria para Iniciantes. Material digital com entrega imediata via e-mail.
          </p>
        </div>
      </footer>

      {/* Info Modal for Terms, Privacy, Support */}
      {activeModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 text-left shadow-2xl relative border border-[#DECDBB]">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 text-[#8C7665] hover:text-[#2B1B12] p-1 rounded-lg"
              aria-label="Fechar modal"
            >
              <X className="w-5 h-5" />
            </button>

            {activeModal === 'termos' && (
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-[#2B1B12] font-black text-lg">
                  <FileText className="w-5 h-5 text-[#A06018]" />
                  <span>Termos de Uso</span>
                </div>
                <div className="text-xs sm:text-sm text-[#594639] space-y-2 max-h-72 overflow-y-auto pr-1">
                  <p>
                    O acesso à Apostila de Marcenaria é pessoal e intransferível. Os projetos disponibilizados destinam-se ao uso como guia prático de marcenaria para construção própria ou produção comercial de peças manuais.
                  </p>
                  <p>
                    É vedada a revenda, compartilhamento não autorizado ou distribuição pública do material digital em si.
                  </p>
                  <p>
                    Garantia incondicional de 7 dias conforme o Código de Defesa do Consumidor brasileiro.
                  </p>
                </div>
              </div>
            )}

            {activeModal === 'privacidade' && (
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-[#2B1B12] font-black text-lg">
                  <Shield className="w-5 h-5 text-[#1E4D2B]" />
                  <span>Política de Privacidade</span>
                </div>
                <div className="text-xs sm:text-sm text-[#594639] space-y-2 max-h-72 overflow-y-auto pr-1">
                  <p>
                    Seus dados cadastrais (nome e e-mail) são utilizados exclusivamente para o envio do link de acesso e emissão da confirmação de compra.
                  </p>
                  <p>
                    Não comercializamos nem compartilhamos suas informações com terceiros. Todos os pagamentos são processados com criptografia de ponta a ponta (SSL).
                  </p>
                </div>
              </div>
            )}

            {activeModal === 'suporte' && (
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-[#2B1B12] font-black text-lg">
                  <Mail className="w-5 h-5 text-[#D97706]" />
                  <span>Suporte ao Cliente</span>
                </div>
                <div className="text-xs sm:text-sm text-[#594639] space-y-3">
                  <p>
                    Dúvidas sobre o recebimento ou download do material? Nossa equipe de atendimento está disponível:
                  </p>
                  <div className="bg-[#FAF7F2] p-3 rounded-xl border border-[#E5DAC8]">
                    <p className="font-bold text-[#2B1B12]">E-mail de atendimento:</p>
                    <p className="font-mono text-xs text-[#A06018]">suporte@apostilademarcenaria.com.br</p>
                    <p className="text-[11px] text-[#7A6657] mt-1">Prazo de resposta em até 24 horas úteis.</p>
                  </div>
                </div>
              </div>
            )}

            <div className="mt-5 pt-3 border-t border-[#F0E6D8] text-right">
              <button
                onClick={() => setActiveModal(null)}
                className="px-4 py-2 rounded-xl bg-[#2B1B12] text-white text-xs font-bold hover:bg-[#432C1E]"
              >
                Entendi e Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
