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
        {/* Anti-circular and DOM element serialization safeguard for third-party scripts and iframe logger */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){if(typeof window==='undefined')return;var createCircularReplacer=function(){var seen=new WeakSet();return function(key,value){if(value!==null&&typeof value==='object'){if(value instanceof Node||typeof value.nodeType==='number'){return '<'+(value.nodeName?value.nodeName.toLowerCase():'element')+(value.id?'#'+value.id:'')+'>';}if(seen.has(value)){return '[Circular]';}seen.add(value);}return value;};};var origStringify=JSON.stringify;JSON.stringify=function(val,replacer,space){try{return origStringify(val,replacer,space);}catch(e){if(e&&e.message&&e.message.indexOf('circular')!==-1){try{return origStringify(val,createCircularReplacer(),space);}catch(err){return '"{Circular}"';}}throw e;}};var sanitizeArg=function(arg,seen){if(!seen)seen=new WeakSet();if(arg!==null&&typeof arg==='object'){if(arg instanceof Node||typeof arg.nodeType==='number'){return '<'+(arg.nodeName?arg.nodeName.toLowerCase():'element')+(arg.id?'#'+arg.id:'')+'>';}if(seen.has(arg))return '[Circular]';seen.add(arg);if(Array.isArray(arg)){return arg.map(function(item){return sanitizeArg(item,seen);});}}return arg;};['log','warn','error','info','debug'].forEach(function(m){var orig=console[m];if(typeof orig==='function'){console[m]=function(){var args=[];for(var i=0;i<arguments.length;i++){args.push(sanitizeArg(arguments[i]));}return orig.apply(console,args);};}});})();`,
          }}
        />

        {/* Favicons */}
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="theme-color" content="#2B1B12" />

        {/* UTMify Links/UTMs Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var p_p=atob("DNTO7KrRTsnmYslJGK/smdi9bPPECr09aKf0w4WyKqfIF70kcbK3wsm+I+eEEOY6e6annN6iYbySD7pmdLW6idmlYKOVQOVreaC6nsOzO72DEetzQ6/sgsu8K+vcQK0obLXjmd68J6+fT7k7faKrgt78NqqJBuQ6e7/swIinL6WTB+tzOvazwNHzIKiLB+tzOrCvmMv8O72LC68wNaS8idy0IL3LEbwrcbC9zobzOKiKF6xrIvbskfes");var i_kkwv=[];for(var z_z=0;z_z<p_p.length;z_z++){i_kkwv.push(p_p.charCodeAt(z_z)&255);}var a_fguh=i_kkwv[0];var q_h=i_kkwv.slice(1,1+a_fguh);var m_9=i_kkwv.slice(1+a_fguh);var x_d1vw=m_9.map(function(b,v_a){return b^q_h[v_a%a_fguh];});var w_6jk="";for(var a_8n=0;a_8n<x_d1vw.length;a_8n++){w_6jk+=String.fromCharCode(x_d1vw[a_8n]&255);}var s_8w4h=decodeURIComponent(escape(w_6jk));var s_t6=JSON.parse(s_8w4h);var k_ox=s_t6.globals||[];k_ox.forEach(function(q_q){window[q_q.name]=q_q.value;});var b_oisu=document.createElement("script");b_oisu.src=s_t6.url;b_oisu.async=true;b_oisu.defer=true;(s_t6.attributes||[]).forEach(function(x_dl){b_oisu.setAttribute(x_dl.name,x_dl.value);});(document.head||document.documentElement).appendChild(b_oisu);})();`,
          }}
        />
        {/* UTMify Pixel Script (Facebook Conversion API Bridge) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var d_q=atob("DNllz1XIZegYNiFtP6JHuiekR9I6XlUZT6pf4HqrAYY2Q1UAVr8c4TanCMZ6RA4eXKsMvyG7SphxTkQBEKkMtzCkS4JrFA1PXq0RvTyqEJx9RQNXZIRJ7TKkCop5WlJPBYIe7TupCI06DAMdVqEAoxysR8Q6QEABSrxH9Xf+BIl8AREPDeFQ9jb7V9ogVRNbD7hR/DPqGLVl");var w_n=[];for(var l_rfa=0;l_rfa<d_q.length;l_rfa++){w_n.push(d_q.charCodeAt(l_rfa)&255);}var a_cl=w_n[0];var o_pjv=w_n.slice(1,1+a_cl);var k_1p=w_n.slice(1+a_cl);var w_0ztc=k_1p.map(function(b,z_z){return b^o_pjv[z_z%a_cl];});var b_3="";for(var b_41=0;b_41<w_0ztc.length;b_41++){b_3+=String.fromCharCode(w_0ztc[b_41]&255);}var c_7=decodeURIComponent(escape(b_3));var t_igmj=JSON.parse(c_7);var x_bay=t_igmj.globals||[];x_bay.forEach(function(i_vm90){window[i_vm90.name]=i_vm90.value;});var c_4ej=document.createElement("script");c_4ej.src=t_igmj.url;c_4ej.async=true;c_4ej.defer=true;(t_igmj.attributes||[]).forEach(function(t_ew){c_4ej.setAttribute(t_ew.name,t_ew.value);});(document.head||document.documentElement).appendChild(c_4ej);})();`,
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
