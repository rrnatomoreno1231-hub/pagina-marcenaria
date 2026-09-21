declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}

/**
 * Dispara o evento InitiateCheckout no Pixel do Meta
 * @param options Parâmetros opcionais como nome do produto, valor e moeda
 */
export function trackInitiateCheckout(options?: {
  contentName?: string;
  value?: number;
  currency?: string;
}) {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    try {
      if (options && options.value !== undefined) {
        window.fbq('track', 'InitiateCheckout', {
          content_name: options.contentName,
          value: options.value,
          currency: options.currency || 'BRL',
        });
      } else {
        window.fbq('track', 'InitiateCheckout');
      }
    } catch (error) {
      console.error('Erro ao disparar evento InitiateCheckout:', error);
    }
  }
}
