'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, ArrowRight, Play, Maximize, Minimize } from 'lucide-react';
import { trackInitiateCheckout } from '@/lib/pixel';

// URL de checkout do Upsell mantida exatamente como o atual
const UPSELL_CHECKOUT_URL = 'https://pay.wiapy.com/2H3VmiRV5aLX';

// Tempo exato para liberar o botão: 1 minuto e 34 segundos (94 segundos)
const DELAY_SECONDS = 94;

export default function UpsellPage() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [showOffer, setShowOffer] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  // Recupera estado de oferta previamente liberada após a montagem no cliente (evita Hydration mismatch e cascading renders)
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      try {
        if (sessionStorage.getItem('vsl_offer_revealed') === 'true') {
          setShowOffer(true);
        }
      } catch {
        // Ignora erro de acesso a storage
      }
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  // Sincroniza estado de tela cheia no PC e no celular (incluindo iOS Safari)
  useEffect(() => {
    const handleFsChange = () => {
      const isFs = !!(
        document.fullscreenElement ||
        (document as any).webkitFullscreenElement
      );
      setIsFullscreen(isFs);
    };

    const video = videoRef.current;
    const handleVideoBeginFs = () => setIsFullscreen(true);
    const handleVideoEndFs = () => setIsFullscreen(false);

    document.addEventListener('fullscreenchange', handleFsChange);
    document.addEventListener('webkitfullscreenchange', handleFsChange);

    if (video) {
      video.addEventListener('webkitbeginfullscreen', handleVideoBeginFs);
      video.addEventListener('webkitendfullscreen', handleVideoEndFs);
    }

    return () => {
      document.removeEventListener('fullscreenchange', handleFsChange);
      document.removeEventListener('webkitfullscreenchange', handleFsChange);
      if (video) {
        video.removeEventListener('webkitbeginfullscreen', handleVideoBeginFs);
        video.removeEventListener('webkitendfullscreen', handleVideoEndFs);
      }
    };
  }, []);

  // Monitora o tempo do vídeo para ativar a oferta em 1:34 (94 segundos)
  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const time = videoRef.current.currentTime;
    setCurrentTime(time);

    if (time >= DELAY_SECONDS && !showOffer) {
      setShowOffer(true);
      if (typeof window !== 'undefined') {
        sessionStorage.setItem('vsl_offer_revealed', 'true');
      }
    }
  };

  const handleVideoEnded = () => {
    if (!showOffer) {
      setShowOffer(true);
      if (typeof window !== 'undefined') {
        sessionStorage.setItem('vsl_offer_revealed', 'true');
      }
    }
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.muted = false;
      setIsMuted(false);
      videoRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          if (videoRef.current) {
            videoRef.current.play();
            setIsPlaying(true);
          }
        });
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  // Alternar tela cheia (Fullscreen) tanto no PC quanto no Celular (Android e iOS Safari)
  const toggleFullscreen = () => {
    const container = containerRef.current;
    const video = videoRef.current;
    if (!video) return;

    const isDocFs = !!(
      document.fullscreenElement ||
      (document as any).webkitFullscreenElement ||
      (document as any).mozFullScreenElement ||
      (document as any).msFullscreenElement
    );

    if (isDocFs) {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      } else if ((document as any).webkitExitFullscreen) {
        (document as any).webkitExitFullscreen();
      } else if ((document as any).mozCancelFullScreen) {
        (document as any).mozCancelFullScreen();
      } else if ((document as any).msExitFullscreen) {
        (document as any).msExitFullscreen();
      }
    } else {
      // No iPhone (iOS Safari), div container fullscreen não é suportado pelo sistema.
      // O iOS Safari requer webkitEnterFullscreen() diretamente no elemento <video>.
      const isIOS =
        typeof navigator !== 'undefined' &&
        (/iPad|iPhone|iPod/.test(navigator.userAgent) ||
          (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1));

      if (isIOS && (video as any).webkitEnterFullscreen) {
        try {
          (video as any).webkitEnterFullscreen();
          return;
        } catch {
          // segue fallback
        }
      }

      // No PC (Windows, Mac, Linux) e no Android, colocamos o container em fullscreen.
      // Isso mantém o vídeo perfeitamente centralizado na proporção 9:16 (vertical),
      // com as laterais pretas e os controles visíveis sem distorção.
      const targetElement = container || video;

      if (targetElement.requestFullscreen) {
        targetElement.requestFullscreen().catch(() => {
          if (video.requestFullscreen) video.requestFullscreen().catch(() => {});
        });
      } else if ((targetElement as any).webkitRequestFullscreen) {
        (targetElement as any).webkitRequestFullscreen();
      } else if ((targetElement as any).mozRequestFullScreen) {
        (targetElement as any).mozRequestFullScreen();
      } else if ((targetElement as any).msRequestFullscreen) {
        (targetElement as any).msRequestFullscreen();
      } else if ((video as any).webkitEnterFullscreen) {
        try {
          (video as any).webkitEnterFullscreen();
        } catch {}
      }
    }
  };

  // Preserva os parâmetros da URL (utms, ref, id) ao recusar
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

  const handleUpsellCheckoutClick = () => {
    trackInitiateCheckout({
      contentName: 'Guia Exclusivo: 20 Melhores Projetos para Começar Hoje',
      value: 29.90,
      currency: 'BRL',
    });
  };

  return (
    <div className="min-h-screen bg-[#0F0D0B] text-[#F3ECE4] flex flex-col font-sans selection:bg-[#D97706] selection:text-white">
      {/* 1. BARRA SUPERIOR DE ALERTA MÁXIMO */}
      <div
        id="upsell-urgent-bar"
        className="w-full bg-[#DC2626] text-white py-2.5 px-4 text-center border-b border-[#B91C1C] shadow-md sticky top-0 z-50"
      >
        <p className="text-xs sm:text-sm font-extrabold uppercase tracking-wide flex items-center justify-center gap-1.5">
          <span>⚠️</span> ATENÇÃO: NÃO FECHE OU RECARREGUE ESTA PÁGINA!
        </p>
      </div>

      <main className="flex-1 w-full max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 flex flex-col items-center">
        {/* 2. HEADLINE PRINCIPAL */}
        <div className="text-center max-w-3xl mx-auto mb-3 sm:mb-4">
          <span className="inline-block bg-[#DC2626]/20 text-[#EF4444] border border-[#DC2626]/40 px-3.5 py-1 rounded-full text-xs sm:text-sm font-black uppercase tracking-wider mb-3">
            Passo 2 de 2 • Ação Necessária
          </span>
          <h1
            id="upsell-headline"
            className="text-2xl sm:text-4xl md:text-5xl font-black text-white leading-tight tracking-tight uppercase"
          >
            SEU ACESSO AINDA <span className="text-[#EF4444] underline decoration-[#EF4444]/60 underline-offset-8">NÃO FOI LIBERADO!</span>
          </h1>
        </div>

        {/* 3. SUBHEADLINE */}
        <div id="upsell-subheadline" className="text-center mb-6 sm:mb-8 max-w-xl mx-auto">
          <p className="text-sm sm:text-base md:text-lg font-medium text-[#C5B7A9]">
            Veja o vídeo abaixo antes de continuar.
          </p>
        </div>

        {/* 4. CONTAINER DO VÍDEO VERTICAL (9:16 VSL REELS) */}
        <div
          ref={containerRef}
          id="upsell-video-container"
          className={`w-full bg-black overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative group mx-auto flex items-center justify-center ${
            isFullscreen
              ? 'fixed inset-0 z-50 w-screen h-screen max-w-none max-h-none aspect-auto rounded-none border-0'
              : 'max-w-[380px] aspect-[9/16] rounded-2xl border border-[#3D3025]'
          }`}
        >
          {/* Estilos CSS para garantir proporção perfeita (object-contain) em qualquer navegador e modo fullscreen */}
          <style
            dangerouslySetInnerHTML={{
              __html: `
                #upsell-video-container:fullscreen,
                #upsell-video-container:-webkit-full-screen,
                #upsell-video-container:-moz-full-screen,
                #upsell-video-container:-ms-fullscreen {
                  width: 100vw !important;
                  height: 100vh !important;
                  max-width: 100vw !important;
                  max-height: 100vh !important;
                  aspect-ratio: auto !important;
                  border-radius: 0 !important;
                  border: none !important;
                  background-color: #000000 !important;
                  display: flex !important;
                  align-items: center !important;
                  justify-content: center !important;
                }
                #vsl-video-player {
                  object-fit: contain !important;
                  background-color: #000000 !important;
                }
                #vsl-video-player:fullscreen,
                #vsl-video-player:-webkit-full-screen,
                #vsl-video-player:-moz-full-screen,
                #vsl-video-player:-ms-fullscreen {
                  object-fit: contain !important;
                  background-color: #000000 !important;
                  width: 100% !important;
                  height: 100% !important;
                }
              `,
            }}
          />

          <video
            ref={videoRef}
            id="vsl-video-player"
            src="/vsl-upsell.mp4"
            className="w-full h-full object-contain bg-black cursor-pointer"
            style={{ objectFit: 'contain', backgroundColor: '#000000' }}
            playsInline
            preload="auto"
            onClick={togglePlay}
            onTimeUpdate={handleTimeUpdate}
            onEnded={handleVideoEnded}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          >
            <source src="/vsl-upsell.mp4" type="video/mp4" />
            <source src="/vsl%20upsell.mp4" type="video/mp4" />
            Seu navegador não suporta a reprodução deste vídeo.
          </video>

          {/* BOTÃO DE TELA CHEIA (FULLSCREEN) - COMPATÍVEL COM PC E CELULAR */}
          <button
            type="button"
            id="vsl-fullscreen-button"
              onClick={(e) => {
                e.stopPropagation();
                toggleFullscreen();
              }}
              className="absolute bottom-4 right-4 z-20 bg-black/85 hover:bg-[#D97706] active:scale-95 text-white px-3 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 backdrop-blur-md border border-white/25 shadow-[0_4px_15px_rgba(0,0,0,0.6)] transition-all duration-200 cursor-pointer"
              title={isFullscreen ? 'Sair da tela cheia' : 'Assistir em tela cheia'}
              aria-label="Tela cheia"
            >
              {isFullscreen ? (
                <>
                  <Minimize className="w-4 h-4 text-[#FDE68A]" />
                  <span className="font-semibold text-xs">Sair</span>
                </>
              ) : (
                <>
                  <Maximize className="w-4 h-4 text-[#FDE68A]" />
                  <span className="font-semibold text-xs">Tela cheia</span>
                </>
              )}
            </button>

          {/* CONTROLE DE PLAY/PAUSE CENTRAL SE ESTIVER PAUSADO */}
          {!isPlaying && (
            <div
              id="vsl-play-overlay"
              onClick={togglePlay}
              className="absolute inset-0 z-10 bg-black/45 hover:bg-black/35 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 p-4 text-center"
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-[#B45309] to-[#F59E0B] text-white flex items-center justify-center shadow-[0_0_40px_rgba(245,158,11,0.8)] hover:scale-110 active:scale-95 transition-all duration-200 mb-4 animate-pulse">
                <Play className="w-10 h-10 sm:w-12 sm:h-12 fill-white translate-x-1" />
              </div>
              <span className="bg-black/85 text-white font-bold text-xs sm:text-sm px-4 py-2 rounded-full border border-white/20 shadow-lg backdrop-blur-md">
                ▶ Clique para assistir com som
              </span>
            </div>
          )}
        </div>

        {/* 5. SEÇÃO DE OFERTA COM DELAY (APARECE AOS 1:34 DO VÍDEO) */}
        <AnimatePresence>
          {showOffer && (
            <motion.div
              id="upsell-revealed-offer"
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="w-full max-w-2xl mt-8 sm:mt-10 flex flex-col items-center text-center"
            >
              {/* CARTÃO DE ANCORAGEM E VALOR */}
              <div className="w-full bg-[#1A1410] border-2 border-[#D97706]/70 rounded-2xl p-6 sm:p-8 shadow-[0_0_40px_rgba(217,119,6,0.25)] mb-6 text-center">
                <span className="inline-block bg-[#D97706]/20 text-[#FDE68A] border border-[#D97706]/40 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-2">
                  ⚡ OFERTA ÚNICA E EXCLUSIVA
                </span>
                <h3 className="text-lg sm:text-xl md:text-2xl font-black text-white uppercase tracking-tight">
                  Guia Exclusivo: 20 Melhores Projetos para Começar Hoje
                </h3>
                <p className="text-xs sm:text-sm text-[#FBBF24] font-bold mt-1">
                  ⭐ Bônus: Só Furadeira ou Parafusadeira • Corte Pronto na Madeireira
                </p>
                
                <div className="my-4">
                  <p className="text-xs sm:text-sm text-[#8C7665] font-semibold line-through">
                    De R$ 89,90 por:
                  </p>
                  <div className="inline-flex items-baseline justify-center gap-1.5">
                    <span className="text-base sm:text-lg font-bold text-[#E5D7CA]">
                      Apenas
                    </span>
                    <span className="text-4xl sm:text-5xl md:text-6xl font-black text-[#F59E0B] tracking-tight">
                      R$ 29,90
                    </span>
                  </div>
                  <p className="text-xs text-[#A8988B] mt-1">
                    Acesso vitalício • Pagamento único • Sem mensalidades
                  </p>
                </div>

                {/* BOTÃO DE COMPRA CHAMATIVO */}
                <a
                  id="upsell-cta-button"
                  href={UPSELL_CHECKOUT_URL}
                  suppressHydrationWarning
                  onClick={handleUpsellCheckoutClick}
                  className="w-full group relative inline-flex items-center justify-center gap-2.5 px-6 py-5 rounded-xl bg-gradient-to-r from-[#D97706] via-[#EA580C] to-[#D97706] text-white font-black text-base sm:text-lg md:text-xl text-center shadow-[0_12px_30px_rgba(234,88,12,0.45)] border border-[#FDE68A]/40 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                >
                  <span>🔥 SIM, QUERO ADICIONAR AO MEU ACESSO AGORA!</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>

                {/* TÍTULO DE RECUSA PEQUENO E MAIS APAGADO */}
                <div className="mt-5 text-center">
                  <Link
                    id="upsell-refuse-link"
                    href="/obrigado"
                    suppressHydrationWarning
                    onClick={handleRefuseClick}
                    className="text-xs sm:text-sm text-[#736357] hover:text-[#A8988B] transition-colors duration-150 inline-block py-1.5 underline decoration-[#736357]/60 underline-offset-4"
                  >
                    Não, eu não quero essa oportunidade e prefiro continuar para o meu acesso.
                  </Link>
                </div>
              </div>

              {/* GARANTIA */}
              <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-[#A8988B]">
                <ShieldCheck className="w-4 h-4 text-[#10B981]" />
                <span>Garantia incondicional de 7 dias ou seu dinheiro de volta</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
