import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pagamento Confirmado | Apostila de Marcenaria',
  description: 'Seu acesso aos +1.000 projetos de marcenaria foi liberado com sucesso.',
};

export default function ObrigadoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <head>
        {/* Meta Pixel Code - Purchase Event for Obrigado */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1006770152394384');
fbq('track', 'PageView');

try {
  if (!sessionStorage.getItem('purchase_tracked')) {
    fbq('track', 'Purchase', {
      value: 5.00,
      currency: 'BRL'
    });
    sessionStorage.setItem('purchase_tracked', 'true');
  }
} catch (e) {
  fbq('track', 'Purchase', {
    value: 5.00,
    currency: 'BRL'
  });
}
`,
          }}
        />
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1006770152394384&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>
      {children}
    </>
  );
}
