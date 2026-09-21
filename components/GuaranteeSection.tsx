'use client';

import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

export default function GuaranteeSection() {
  return (
    <section
      id="garantia"
      className="bg-[#FAF7F2] text-[#2C241E] py-14 px-4 sm:px-6 lg:px-8 border-b border-[#E8DFC8] overflow-hidden"
    >
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 25, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.55 }}
          whileHover={{ y: -3, boxShadow: '0 20px 30px -10px rgba(0,0,0,0.08)' }}
          className="bg-white rounded-3xl border border-[#DECDBB] shadow-sm p-6 sm:p-10 text-center transition-all cursor-default"
        >
          {/* Shield Badge */}
          <motion.div
            initial={{ scale: 0.8, rotate: -10 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.15, type: 'spring' }}
            className="w-14 h-14 mx-auto rounded-2xl bg-[#EAF7ED] border border-[#BCE5C8] flex items-center justify-center text-[#1E4D2B] mb-4 shadow-xs"
          >
            <ShieldCheck className="w-8 h-8 stroke-[2.2]" />
          </motion.div>

          {/* Title */}
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#2B1B12] mb-3 flex items-center justify-center gap-2">
            <span>🛡️</span>
            <span>RISCO ZERO POR 7 DIAS</span>
          </h2>

          {/* Copy */}
          <div className="space-y-2 text-sm sm:text-base text-[#6E5D4F] leading-relaxed max-w-lg mx-auto">
            <p>
              Você pode acessar o material, conhecer o conteúdo e decidir se ele realmente faz sentido para você.
            </p>
            <p className="font-semibold text-[#3D271B]">
              Se não gostar, basta solicitar o reembolso dentro do prazo de garantia.
            </p>
          </div>

          <div className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-[#1E4D2B] bg-[#EAF7ED] px-3.5 py-1.5 rounded-full border border-[#BCE5C8]">
            <span>100% de devolução • Sem burocracia</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
