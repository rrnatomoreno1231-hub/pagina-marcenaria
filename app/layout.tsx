import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Apostila de Marcenaria | +1.000 Projetos Prontos por R$ 5',
  description: '+1.000 projetos de marcenaria prontos com medidas e lista de materiais para iniciantes por apenas R$ 5.',
  openGraph: {
    title: 'Apostila de Marcenaria | +1.000 Projetos Prontos por R$ 5',
    description: '+1.000 projetos de marcenaria prontos com medidas e lista de materiais para iniciantes por apenas R$ 5.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Apostila de Marcenaria | +1.000 Projetos Prontos por R$ 5',
    description: '+1.000 projetos de marcenaria prontos com medidas e lista de materiais para iniciantes por apenas R$ 5.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        {/* Meta Pixel Code */}
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
        {/* End Meta Pixel Code */}
      </head>
      <body suppressHydrationWarning className="bg-[#FAF7F2] text-[#2C241E] antialiased selection:bg-[#E2B774] selection:text-[#2C241E]">
        {children}
      </body>
    </html>
  );
}
