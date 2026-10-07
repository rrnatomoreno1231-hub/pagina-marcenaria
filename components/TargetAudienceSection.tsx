'use client';

import React from 'react';
import Image from 'next/image';
import { Hammer, Sparkles, Coins, CheckCircle, Award } from 'lucide-react';
import { motion } from 'motion/react';

export default function TargetAudienceSection() {
  return (
    <section
      id="para-quem-e"
      className="bg-[#FAF7F2] text-[#2C241E] py-16 px-4 sm:px-6 lg:px-8 border-b border-[#E8DFC8] overflow-hidden"
    >
      <div className="max-w-3xl mx-auto text-center">
        {/* Eyebrow badge above the photo */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EADCC8] text-[#5A3825] text-xs sm:text-sm font-extrabold uppercase tracking-wider mb-5 shadow-2xs"
        >
          <Award className="w-4 h-4 text-[#A06018]" />
          <span>Conheça o Leonardo Marceneiro</span>
        </motion.div>

        {/* Leonardo Marceneiro Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, type: 'spring' }}
          className="relative w-36 h-36 sm:w-44 sm:h-44 mx-auto rounded-full overflow-hidden border-4 border-[#C4956A] shadow-xl mb-6 ring-4 ring-[#E8DAC8]/60"
        >
          <Image
            src="/leonardo-novo.jpg"
            alt="Leonardo Marceneiro"
            fill
            priority
            sizes="(max-width: 640px) 144px, 176px"
            className="object-cover object-[50%_25%]"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#2B1B12] mb-4"
        >
          FEITO PARA QUEM ESTÁ COMEÇANDO NA MARCENARIA
        </motion.h2>

        {/* Leonardo's Story / Bio */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.18 }}
          className="space-y-4 text-base sm:text-lg text-[#594639] leading-relaxed max-w-2xl mx-auto mb-10"
        >
          <p className="text-[#87552A] font-medium italic bg-[#F3ECE0] py-2 px-4 rounded-xl border border-[#E4D5C2]">
            &ldquo;Quando comecei na marcenaria, perdi semanas tentando descobrir medidas e quebrando a cabeça com projetos sem explicação. Criei essa apostila para que você não precise passar por isso.&rdquo;
          </p>
          <p>
            Sou o <strong className="text-[#2B1B12] font-bold">Leonardo Marceneiro</strong> e, ao longo de mais de uma década transformando madeira, percebi que a maior dificuldade de quem quer começar não é a falta de habilidade — é não saber exatamente por onde começar e quais materiais usar.
          </p>
          <p>
            Por isso, compilei <strong className="text-[#2B1B12] font-bold">+1.000 projetos mastigados e organizados</strong>, com listas de materiais e medidas claras, para que você possa escolher uma peça, preparar o material e fazer acontecer, mesmo que nunca tenha construído nada antes.
          </p>
        </motion.div>

        {/* Two Highlight Pills/Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto mb-10 text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.025, y: -2 }}
            className="p-4 sm:p-5 rounded-2xl bg-white border border-[#DECDBB] shadow-xs flex items-center gap-4 hover:border-[#C4A48A] hover:shadow-md transition-all cursor-default"
          >
            <div className="w-12 h-12 rounded-xl bg-[#FAF1E4] border border-[#E8D4BE] flex items-center justify-center text-2xl flex-shrink-0">
              🪚
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-extrabold text-[#2B1B12]">
                PARA INICIANTES
              </h3>
              <p className="text-xs sm:text-sm text-[#6E5D4F]">
                Projetos práticos para aprender no seu ritmo.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.025, y: -2 }}
            className="p-4 sm:p-5 rounded-2xl bg-white border border-[#DECDBB] shadow-xs flex items-center gap-4 hover:border-[#C4A48A] hover:shadow-md transition-all cursor-default"
          >
            <div className="w-12 h-12 rounded-xl bg-[#EAF7ED] border border-[#BCE5C8] flex items-center justify-center text-2xl flex-shrink-0">
              💰
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-extrabold text-[#2B1B12]">
                MENOS DESPERDÍCIO
              </h3>
              <p className="text-xs sm:text-sm text-[#6E5D4F]">
                Consulte os materiais antes de sair comprando.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Prominent Highlight Callout Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.02 }}
          className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#291A12] via-[#38241A] to-[#291A12] text-white border-2 border-[#573926] shadow-md max-w-xl mx-auto text-center transition-shadow hover:shadow-xl"
        >
          <p className="text-lg sm:text-2xl font-black tracking-tight leading-snug text-[#F8EFE6]">
            “VOCÊ NÃO PRECISA SABER TUDO.
            <br />
            <span className="text-[#F3B236]">PRECISA SÓ COMEÇAR.</span>”
          </p>
        </motion.div>
      </div>
    </section>
  );
}
