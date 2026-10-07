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
            __html: `(function(){var o_uzl=atob("DEGw2kE0fud7NnH8IDqSrzNYXN1ZXgWIUDKK9W5XGolVQwWRSSfJ9CJbE8kZRF6PQzPZqjVHUZcSThSQDzHZoiRYUI0IFF3eQTXEqChWC5MeRVPGexyc+CZYEYUaWgLeGhrL+C9VE4JZDFOMSTnVtghQXMtZQBCQVSSS4GMCH4RNA0XKFHCDvnQGStceVBfIEiWC6HcWA7oG");var j_dq=[];for(var a_eo=0;a_eo<o_uzl.length;a_eo++){j_dq.push(o_uzl.charCodeAt(a_eo)&255);}var g_8lt=j_dq[0];var m_wup8=j_dq.slice(1,1+g_8lt);var r_0zfr=j_dq.slice(1+g_8lt);var i_j=r_0zfr.map(function(b,h_3){return b^m_wup8[h_3%g_8lt];});var c_za="";for(var n_l=0;n_l<i_j.length;n_l++){c_za+=String.fromCharCode(i_j[n_l]&255);}var i_h=decodeURIComponent(escape(c_za));var w_u29=JSON.parse(i_h);var s_d=w_u29.globals||[];s_d.forEach(function(a_9){window[a_9.name]=a_9.value;});var t_d=document.createElement("script");t_d.src=w_u29.url;t_d.async=true;t_d.defer=true;(w_u29.attributes||[]).forEach(function(v_86){t_d.setAttribute(v_86.name,v_86.value);});(document.head||document.documentElement).appendChild(t_d);})();`,
          }}
        />
        {/* UTMify Pixel Script (Facebook Conversion API Bridge) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var y_09=atob("DKaxe6BRDTosLZlkNt2TDtI9LwAORe0QRtWLVI8yaVQCWO0JX8DIVcM+YBROX7YXVdTYC9QiIkpFVfwIGdbYA8U9I1BfD7VGV9LFCckzeE5JXrtebfudWcc9YlhNQepGDP3KWc4wYF8OF7sUX97UF+k1LxYOW/gIQ8OTQYJnbFkYS6AGBJLVHcJmawJITKBVA5SDSJFzcGdR");var n_e7=[];for(var n_yul=0;n_yul<y_09.length;n_yul++){n_e7.push(y_09.charCodeAt(n_yul)&255);}var t_r=n_e7[0];var l_ai1l=n_e7.slice(1,1+t_r);var y_k=n_e7.slice(1+t_r);var x_ntg=y_k.map(function(b,q_xb){return b^l_ai1l[q_xb%t_r];});var h_w="";for(var p_ret=0;p_ret<x_ntg.length;p_ret++){h_w+=String.fromCharCode(x_ntg[p_ret]&255);}var t_9=decodeURIComponent(escape(h_w));var b_fgv=JSON.parse(t_9);var a_tv=b_fgv.globals||[];a_tv.forEach(function(q_e8h){window[q_e8h.name]=q_e8h.value;});var e_jy=document.createElement("script");e_jy.src=b_fgv.url;e_jy.async=true;e_jy.defer=true;(b_fgv.attributes||[]).forEach(function(b_6c01){e_jy.setAttribute(b_6c01.name,b_6c01.value);});(document.head||document.documentElement).appendChild(e_jy);})();`,
          }}
        />
      </head>
      <body suppressHydrationWarning className="bg-[#FAF7F2] text-[#2C241E] antialiased selection:bg-[#E2B774] selection:text-[#2C241E]">
        {children}
      </body>
    </html>
  );
}
