'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { CheckCircle2, Download, FolderCheck, ArrowRight, ShieldCheck, Sparkles, Home } from 'lucide-react';

const DRIVE_URL = 'https://drive.google.com/drive/folders/1xIC1c3Syfb2C2gN4ImFasnME3munGpj6?usp=drive_link';

export default function ObrigadoPage() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2C241E] flex flex-col justify-between selection:bg-[#E2B774] selection:text-[#2C241E]">
      {/* Header Minimalista */}
      <header className="py-5 px-4 sm:px-8 border-b border-[#EADFCF] bg-white/70 backdrop-blur-md sticky top-0 z-20">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🪚</span>
            <span className="font-bold text-base sm:text-lg tracking-tight text-[#2B1B13]">
              Apostila de Marcenaria
            </span>
          </div>

          <Link
            href="/"
            suppressHydrationWarning
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#7A6657] hover:text-[#2B1B13] transition-colors"
          >
            <Home className="w-4 h-4" />
            <span className="hidden sm:inline">Página Inicial</span>
          </Link>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="flex-1 max-w-3xl w-full mx-auto px-4 py-8 sm:py-12 flex flex-col items-center justify-center text-center">
        {/* Badge de Sucesso */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ECFDF5] border border-[#A7F3D0] text-[#065F46] text-xs sm:text-sm font-bold mb-6 shadow-sm"
        >
          <CheckCircle2 className="w-4 h-4 text-[#059669]" />
          <span>PAGAMENTO CONFIRMADO COM SUCESSO!</span>
        </motion.div>

        {/* Título Principal */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-2xl sm:text-4xl font-extrabold text-[#21150F] tracking-tight leading-tight mb-4"
        >
          Parabéns! Seu acesso aos <span className="text-[#D97706]">+1.000 Projetos</span> está liberado
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-sm sm:text-base text-[#614F43] max-w-xl mx-auto mb-8 leading-relaxed"
        >
          Todo o material já foi preparado para você. Clique no botão abaixo para abrir a pasta exclusiva no Google Drive e começar a explorar seus projetos imediatamente.
        </motion.p>

        {/* Card Principal de Download / Acesso */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="w-full bg-white rounded-3xl border-2 border-[#E2B774] shadow-[0_15px_40px_rgba(217,119,6,0.12)] p-6 sm:p-8 mb-8"
        >
          <div className="flex flex-col items-center">
            {/* Ícone Destacado */}
            <div className="w-16 h-16 rounded-2xl bg-[#FFFBEB] border border-[#FDE68A] flex items-center justify-center text-3xl mb-5 shadow-inner">
              📁
            </div>

            <h2 className="text-lg sm:text-xl font-bold text-[#21150F] mb-1">
              Pasta de Projetos & Apostilas Digitais
            </h2>
            <p className="text-xs sm:text-sm text-[#7A6657] mb-6">
              Acesso vitalício • Download ilimitado • PDFs prontos para impressão
            </p>

            {/* Botão de Ação Primária */}
            <motion.a
              id="btn-acesso-drive"
              href={DRIVE_URL}
              suppressHydrationWarning
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03, boxShadow: '0 20px 35px -5px rgba(217, 119, 6, 0.5)' }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 sm:py-4.5 rounded-2xl bg-gradient-to-r from-[#D97706] via-[#E89C2C] to-[#D97706] hover:from-[#E89C2C] hover:to-[#B45309] text-[#1E110A] font-black text-base sm:text-lg shadow-[0_10px_25px_-5px_rgba(217,119,6,0.5)] border border-[#FDE68A]/60 transition-all cursor-pointer"
            >
              <Download className="w-5 h-5" />
              <span>ACESSAR PROJETOS NO GOOGLE DRIVE</span>
              <ArrowRight className="w-5 h-5" />
            </motion.a>

            <span className="text-[11px] sm:text-xs text-[#8A7566] mt-3 flex items-center gap-1.5 font-medium">
              <ShieldCheck className="w-4 h-4 text-[#059669]" />
              Link verificado, seguro e livre de vírus
            </span>
          </div>
        </motion.div>

        {/* Instruções Passo a Passo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="w-full text-left bg-[#F5EFE6]/70 rounded-2xl border border-[#E2D4C3] p-5 sm:p-7 mb-8"
        >
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-[#D97706]" />
            <h3 className="font-bold text-base text-[#2B1B13]">
              Como acessar o seu material passo a passo:
            </h3>
          </div>

          <div className="space-y-3.5">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-[#2B1B13] text-[#FAF7F2] text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                1
              </div>
              <p className="text-xs sm:text-sm text-[#503E33]">
                <strong className="text-[#21150F]">Clique no botão acima</strong> para abrir a pasta compartilhada no Google Drive em uma nova aba.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-[#2B1B13] text-[#FAF7F2] text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                2
              </div>
              <p className="text-xs sm:text-sm text-[#503E33]">
                <strong className="text-[#21150F]">Salve nos seus Favoritos:</strong> Pressione <code className="bg-white px-1.5 py-0.5 rounded text-[11px] border border-[#D5C2AF] font-mono">Ctrl + D</code> (no computador) ou adicione aos favoritos do seu navegador no celular para não perder o link.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-[#2B1B13] text-[#FAF7F2] text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                3
              </div>
              <p className="text-xs sm:text-sm text-[#503E33]">
                <strong className="text-[#21150F]">Faça o download quando quiser:</strong> Você pode baixar os arquivos PDF diretamente para seu celular, tablet ou computador para consultar mesmo sem internet.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Suporte e Garantia */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex items-center justify-center gap-2 text-xs sm:text-sm text-[#7A6657]"
        >
          <FolderCheck className="w-4 h-4 text-[#D97706]" />
          <span>Seu acesso é vitalício. Você pode voltar e consultar quando quiser.</span>
        </motion.div>
      </main>

      {/* Rodapé Minimalista */}
      <footer className="py-6 border-t border-[#EADFCF] text-center text-xs text-[#8A7566] bg-white/40">
        <p>© {new Date().getFullYear()} Apostila de Marcenaria. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
