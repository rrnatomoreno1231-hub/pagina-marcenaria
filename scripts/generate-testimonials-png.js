const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const publicDir = path.join(__dirname, '..', 'public');

// Embed projeto-pronto.jpg into base64 for image 1
const benchImgBase64 = fs.readFileSync(path.join(publicDir, 'projeto-pronto.jpg')).toString('base64');

// WhatsApp background doodle pattern
const bgPattern = `
  <defs>
    <pattern id="wa-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
      <rect width="60" height="60" fill="#0B141A"/>
      <circle cx="15" cy="15" r="1.5" fill="#182229"/>
      <circle cx="45" cy="45" r="1.5" fill="#182229"/>
      <path d="M 30,10 Q 35,20 30,30 Q 25,20 30,10" fill="none" stroke="#182229" stroke-width="0.8"/>
      <rect x="38" y="8" width="6" height="6" rx="2" fill="none" stroke="#182229" stroke-width="0.8"/>
      <path d="M 10,40 C 15,35 20,45 25,40" fill="none" stroke="#182229" stroke-width="0.8"/>
    </pattern>
  </defs>
`;

// Helper for checkmarks
const doubleCheckSvg = `
  <svg width="16" height="11" viewBox="0 0 16 11" fill="none">
    <path d="M11 1L5.5 8.5L3 6" stroke="#53BDEB" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M15 1L9.5 8.5L8.5 7.5" stroke="#53BDEB" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`;

// GENERATE 1.png
async function generateImg1() {
  const width = 800;
  const height = 1200;
  const svg = `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    ${bgPattern}
    <rect width="${width}" height="${height}" fill="url(#wa-pattern)"/>

    <!-- Status Bar -->
    <rect width="${width}" height="45" fill="#0B141A"/>
    <text x="36" y="32" fill="#E9EDEF" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="20" font-weight="600">14:37</text>
    <g transform="translate(680, 16)">
      <!-- Signal -->
      <rect x="0" y="8" width="3" height="8" rx="1" fill="#E9EDEF"/>
      <rect x="5" y="6" width="3" height="10" rx="1" fill="#E9EDEF"/>
      <rect x="10" y="3" width="3" height="13" rx="1" fill="#E9EDEF"/>
      <rect x="15" y="0" width="3" height="16" rx="1" fill="#E9EDEF"/>
      <!-- 5G -->
      <text x="26" y="14" fill="#E9EDEF" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="14" font-weight="600">5G</text>
      <!-- Battery -->
      <rect x="52" y="2" width="26" height="13" rx="3" fill="none" stroke="#E9EDEF" stroke-width="1.5"/>
      <rect x="54" y="4" width="18" height="9" rx="1.5" fill="#E9EDEF"/>
      <path d="M79 6.5V10.5" stroke="#E9EDEF" stroke-width="1.5" stroke-linecap="round"/>
    </g>

    <!-- Header -->
    <g transform="translate(0, 45)">
      <rect width="${width}" height="70" fill="#1F2C34"/>
      <!-- Back Chevron -->
      <path d="M 30 35 L 42 23 M 30 35 L 42 47" stroke="#53BDEB" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      <!-- Avatar -->
      <circle cx="75" cy="35" r="24" fill="#607D8B"/>
      <text x="75" y="42" fill="#FFFFFF" font-family="sans-serif" font-size="20" font-weight="bold" text-anchor="middle">R</text>
      <!-- Name & Online -->
      <text x="115" y="31" fill="#E9EDEF" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="20" font-weight="bold">Rafael</text>
      <text x="115" y="51" fill="#8696A0" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="14">online</text>
      <!-- Video & Call Icons -->
      <path d="M 680 25 L 705 25 C 708 25 710 27 710 30 L 710 42 C 710 45 708 47 705 47 L 680 47 C 677 47 675 45 675 42 L 675 30 C 675 27 677 25 680 25 Z M 710 32 L 725 24 L 725 48 L 710 40 Z" fill="none" stroke="#53BDEB" stroke-width="2" stroke-linejoin="round"/>
      <path d="M 755 24 C 766 24 774 32 774 43 C 774 45 772 47 769 47 C 764 47 761 41 756 36 C 751 31 745 28 745 23 C 745 20 747 18 749 18 Z" fill="none" stroke="#53BDEB" stroke-width="2"/>
    </g>

    <!-- Chat Messages -->
    <g transform="translate(0, 125)">
      <!-- Msg 1 Left -->
      <g transform="translate(25, 15)">
        <rect width="460" height="75" rx="12" fill="#202C33"/>
        <text x="18" y="30" fill="#E9EDEF" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="16">Cara, eu tava querendo começar na marcenaria</text>
        <text x="18" y="55" fill="#E9EDEF" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="16">mas não fazia ideia nem por onde começar kkk</text>
        <text x="405" y="68" fill="#8696A0" font-family="sans-serif" font-size="12">14:12</text>
      </g>

      <!-- Msg 2 Right -->
      <g transform="translate(420, 105)">
        <rect width="355" height="48" rx="12" fill="#005C4B"/>
        <text x="20" y="30" fill="#E9EDEF" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="16">E conseguiu começar?</text>
        <text x="270" y="32" fill="#85BDB1" font-family="sans-serif" font-size="12">14:14</text>
        <g transform="translate(315, 22)">${doubleCheckSvg}</g>
      </g>

      <!-- Msg 3 Left -->
      <g transform="translate(25, 170)">
        <rect width="520" height="75" rx="12" fill="#202C33"/>
        <text x="18" y="30" fill="#E9EDEF" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="16">Consegui sim. Peguei um dos projetos, vi as medidas</text>
        <text x="18" y="55" fill="#E9EDEF" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="16">e os materiais certinhos e fiz o primeiro móvel.</text>
        <text x="465" y="68" fill="#8696A0" font-family="sans-serif" font-size="12">14:16</text>
      </g>

      <!-- Msg 4 Left -->
      <g transform="translate(25, 260)">
        <rect width="490" height="75" rx="12" fill="#202C33"/>
        <text x="18" y="30" fill="#E9EDEF" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="16">O que mais me ajudou foi não precisar ficar</text>
        <text x="18" y="55" fill="#E9EDEF" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="16">tentando descobrir tudo sozinho.</text>
        <text x="435" y="68" fill="#8696A0" font-family="sans-serif" font-size="12">14:16</text>
      </g>

      <!-- Msg 5 Right -->
      <g transform="translate(450, 350)">
        <rect width="325" height="48" rx="12" fill="#005C4B"/>
        <text x="20" y="30" fill="#E9EDEF" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="16">Aí sim! E ficou bom?</text>
        <text x="240" y="32" fill="#85BDB1" font-family="sans-serif" font-size="12">14:17</text>
        <g transform="translate(285, 22)">${doubleCheckSvg}</g>
      </g>

      <!-- Msg 6 Left -->
      <g transform="translate(25, 415)">
        <rect width="460" height="48" rx="12" fill="#202C33"/>
        <text x="18" y="30" fill="#E9EDEF" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="16">Ficou muito melhor do que eu esperava 😂</text>
        <text x="405" y="32" fill="#8696A0" font-family="sans-serif" font-size="12">14:19</text>
      </g>

      <!-- Msg 7 Left -->
      <g transform="translate(25, 478)">
        <rect width="440" height="48" rx="12" fill="#202C33"/>
        <text x="18" y="30" fill="#E9EDEF" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="16">Agora já tô olhando os próximos pra fazer.</text>
        <text x="385" y="32" fill="#8696A0" font-family="sans-serif" font-size="12">14:20</text>
      </g>

      <!-- Msg 8 Left (Furniture Image) -->
      <g transform="translate(25, 540)">
        <rect width="460" height="310" rx="14" fill="#202C33"/>
        <clipPath id="furniture-clip">
          <rect x="6" y="6" width="448" height="298" rx="10"/>
        </clipPath>
        <image href="data:image/jpeg;base64,${benchImgBase64}" x="6" y="6" width="448" height="298" preserveAspectRatio="xMidYMid slice" clip-path="url(#furniture-clip)"/>
        <rect x="380" y="275" width="65" height="22" rx="6" fill="#000000" opacity="0.6"/>
        <text x="390" y="291" fill="#FFFFFF" font-family="sans-serif" font-size="13">14:21</text>
      </g>
    </g>

    <!-- Bottom Input Bar -->
    <g transform="translate(0, 1120)">
      <rect width="${width}" height="80" fill="#1F2C34"/>
      <circle cx="45" cy="40" r="18" fill="#2A3942"/>
      <path d="M 45 32 V 48 M 37 40 H 53" stroke="#8696A0" stroke-width="2.5" stroke-linecap="round"/>
      <rect x="80" y="16" width="530" height="48" rx="24" fill="#2A3942"/>
      <text x="105" y="46" fill="#8696A0" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="17">Mensagem</text>
      <circle cx="650" cy="40" r="18" fill="#2A3942"/>
      <circle cx="700" cy="40" r="18" fill="#2A3942"/>
      <circle cx="755" cy="40" r="22" fill="#00A884"/>
      <path d="M 755 30 C 752 30 750 32 750 35 L 750 42 C 750 45 752 47 755 47 C 758 47 760 45 760 42 L 760 35 C 760 32 758 30 755 30 Z M 746 38 C 746 43 750 47 755 47 C 760 47 764 43 764 38 M 755 47 V 51" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"/>
    </g>
  </svg>
  `;
  await sharp(Buffer.from(svg)).png().toFile(path.join(publicDir, '1.png'));
  console.log('1.png generated successfully');
}

// GENERATE 2.png
async function generateImg2() {
  const width = 800;
  const height = 1150;
  const svg = `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    ${bgPattern}
    <rect width="${width}" height="${height}" fill="url(#wa-pattern)"/>

    <!-- Chat Messages -->
    <g transform="translate(0, 30)">
      <!-- Msg 1 Left -->
      <g transform="translate(25, 10)">
        <rect width="480" height="75" rx="12" fill="#202C33"/>
        <text x="18" y="30" fill="#E9EDEF" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="16">Uma coisa que tava me travando era justamente</text>
        <text x="18" y="55" fill="#E9EDEF" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="16">o medo de comprar material errado.</text>
        <text x="425" y="68" fill="#8696A0" font-family="sans-serif" font-size="12">15:19</text>
      </g>

      <!-- Msg 2 Right -->
      <g transform="translate(380, 100)">
        <rect width="395" height="48" rx="12" fill="#005C4B"/>
        <text x="20" y="30" fill="#E9EDEF" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="16">Poxa, isso é bem comum no começo.</text>
        <text x="310" y="32" fill="#85BDB1" font-family="sans-serif" font-size="12">15:20</text>
        <g transform="translate(355, 22)">${doubleCheckSvg}</g>
      </g>

      <!-- Msg 3 Left -->
      <g transform="translate(25, 165)">
        <rect width="480" height="75" rx="12" fill="#202C33"/>
        <text x="18" y="30" fill="#E9EDEF" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="16">Exatamente. Eu já tinha gastado madeira à toa</text>
        <text x="18" y="55" fill="#E9EDEF" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="16">em umas tentativas que fiz sozinho.</text>
        <text x="425" y="68" fill="#8696A0" font-family="sans-serif" font-size="12">15:21</text>
      </g>

      <!-- Msg 4 Right -->
      <g transform="translate(350, 255)">
        <rect width="425" height="48" rx="12" fill="#005C4B"/>
        <text x="20" y="30" fill="#E9EDEF" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="16">E com o material que você tem agora?</text>
        <text x="340" y="32" fill="#85BDB1" font-family="sans-serif" font-size="12">15:22</text>
        <g transform="translate(385, 22)">${doubleCheckSvg}</g>
      </g>

      <!-- Msg 5 Left -->
      <g transform="translate(25, 320)">
        <rect width="520" height="75" rx="12" fill="#202C33"/>
        <text x="18" y="30" fill="#E9EDEF" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="16">Nesse material ficou muito mais fácil porque já</text>
        <text x="18" y="55" fill="#E9EDEF" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="16">tenho o projeto e as medidas pra seguir.</text>
        <text x="465" y="68" fill="#8696A0" font-family="sans-serif" font-size="12">15:24</text>
      </g>

      <!-- Msg 6 Right -->
      <g transform="translate(430, 410)">
        <rect width="345" height="48" rx="12" fill="#005C4B"/>
        <text x="20" y="30" fill="#E9EDEF" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="16">Show! E ajudou bastante?</text>
        <text x="260" y="32" fill="#85BDB1" font-family="sans-serif" font-size="12">15:25</text>
        <g transform="translate(305, 22)">${doubleCheckSvg}</g>
      </g>

      <!-- Msg 7 Left -->
      <g transform="translate(25, 475)">
        <rect width="530" height="75" rx="12" fill="#202C33"/>
        <text x="18" y="30" fill="#E9EDEF" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="16">Demais. Agora eu compro sabendo exatamente o que</text>
        <text x="18" y="55" fill="#E9EDEF" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="16">vou precisar e consigo ir direto pra execução.</text>
        <text x="475" y="68" fill="#8696A0" font-family="sans-serif" font-size="12">15:26</text>
      </g>
    </g>

    <!-- WhatsApp Input & Keyboard -->
    <g transform="translate(0, 680)">
      <rect width="${width}" height="65" fill="#1F2C34"/>
      <circle cx="45" cy="32" r="16" fill="#2A3942"/>
      <text x="38" y="38" font-size="18">😊</text>
      <rect x="75" y="10" width="530" height="44" rx="22" fill="#2A3942"/>
      <text x="100" y="38" fill="#8696A0" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="16">Mensagem</text>
      <circle cx="645" cy="32" r="16" fill="#2A3942"/>
      <circle cx="695" cy="32" r="16" fill="#2A3942"/>
      <circle cx="755" cy="32" r="22" fill="#00A884"/>
      <path d="M 755 22 C 752 22 750 24 750 27 L 750 34 C 750 37 752 39 755 39 C 758 39 760 37 760 34 L 760 27 C 760 24 758 22 755 22 Z M 746 30 C 746 35 750 39 755 39 C 760 39 764 35 764 30 M 755 39 V 43" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"/>
    </g>

    <!-- Realistic Mobile Dark Keyboard -->
    <g transform="translate(0, 745)">
      <rect width="${width}" height="405" fill="#1C1C1E"/>
      <!-- Row 1 QWERTY -->
      ${['Q','W','E','R','T','Y','U','I','O','P'].map((k, i) => `
        <rect x="${15 + i * 77}" y="20" width="70" height="55" rx="8" fill="#3A3A3C"/>
        <text x="${50 + i * 77}" y="56" fill="#FFFFFF" font-family="-apple-system, sans-serif" font-size="24" text-anchor="middle">${k}</text>
      `).join('')}
      <!-- Row 2 ASDF -->
      ${['A','S','D','F','G','H','J','K','L'].map((k, i) => `
        <rect x="${53 + i * 77}" y="90" width="70" height="55" rx="8" fill="#3A3A3C"/>
        <text x="${88 + i * 77}" y="126" fill="#FFFFFF" font-family="-apple-system, sans-serif" font-size="24" text-anchor="middle">${k}</text>
      `).join('')}
      <!-- Row 3 ZXCV -->
      <rect x="15" y="160" width="90" height="55" rx="8" fill="#2C2C2E"/>
      <path d="M 60 180 L 60 198 M 52 188 L 60 180 L 68 188" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"/>
      ${['Z','X','C','V','B','N','M'].map((k, i) => `
        <rect x="${125 + i * 78}" y="160" width="70" height="55" rx="8" fill="#3A3A3C"/>
        <text x="${160 + i * 78}" y="196" fill="#FFFFFF" font-family="-apple-system, sans-serif" font-size="24" text-anchor="middle">${k}</text>
      `).join('')}
      <rect x="690" y="160" width="95" height="55" rx="8" fill="#2C2C2E"/>
      <text x="737" y="196" fill="#FFFFFF" font-family="sans-serif" font-size="20" text-anchor="middle">⌫</text>
      <!-- Bottom Row -->
      <rect x="15" y="235" width="115" height="55" rx="8" fill="#2C2C2E"/>
      <text x="72" y="270" fill="#FFFFFF" font-family="sans-serif" font-size="18" text-anchor="middle">123</text>
      <rect x="145" y="235" width="460" height="55" rx="8" fill="#3A3A3C"/>
      <text x="375" y="270" fill="#FFFFFF" font-family="sans-serif" font-size="18" text-anchor="middle">espaço</text>
      <rect x="620" y="235" width="165" height="55" rx="8" fill="#00A884"/>
      <text x="702" y="270" fill="#FFFFFF" font-family="sans-serif" font-size="18" font-weight="bold" text-anchor="middle">enter</text>
    </g>
  </svg>
  `;
  await sharp(Buffer.from(svg)).png().toFile(path.join(publicDir, '2.png'));
  console.log('2.png generated successfully');
}

// GENERATE 3.png
async function generateImg3() {
  const width = 800;
  const height = 1200;
  const svg = `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    ${bgPattern}
    <rect width="${width}" height="${height}" fill="url(#wa-pattern)"/>

    <!-- Header -->
    <g transform="translate(0, 0)">
      <rect width="${width}" height="75" fill="#1F2C34"/>
      <path d="M 30 38 L 42 26 M 30 38 L 42 50" stroke="#53BDEB" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="75" cy="38" r="24" fill="#455A64"/>
      <text x="75" y="45" fill="#FFFFFF" font-family="sans-serif" font-size="20" font-weight="bold" text-anchor="middle">T</text>
      <text x="115" y="34" fill="#E9EDEF" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="20" font-weight="bold">Tiago projeto</text>
      <text x="115" y="54" fill="#8696A0" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="14">online</text>
      <path d="M 680 28 L 705 28 C 708 28 710 30 710 33 L 710 45 C 710 48 708 50 705 50 L 680 50 C 677 50 675 48 675 45 L 675 33 C 675 30 677 28 680 28 Z M 710 35 L 725 27 L 725 51 L 710 43 Z" fill="none" stroke="#53BDEB" stroke-width="2" stroke-linejoin="round"/>
      <path d="M 755 27 C 766 27 774 35 774 46 C 774 48 772 50 769 50 C 764 50 761 44 756 39 C 751 34 745 31 745 26 C 745 23 747 21 749 21 Z" fill="none" stroke="#53BDEB" stroke-width="2"/>
    </g>

    <!-- Chat Messages -->
    <g transform="translate(0, 95)">
      <!-- Msg 1 Left -->
      <g transform="translate(25, 10)">
        <rect width="460" height="75" rx="12" fill="#202C33"/>
        <text x="18" y="30" fill="#E9EDEF" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="16">Mano, comecei fazendo os projetos</text>
        <text x="18" y="55" fill="#E9EDEF" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="16">só pra aprender.</text>
        <text x="405" y="68" fill="#8696A0" font-family="sans-serif" font-size="12">16:37</text>
      </g>

      <!-- Msg 2 Right -->
      <g transform="translate(480, 100)">
        <rect width="295" height="48" rx="12" fill="#005C4B"/>
        <text x="20" y="30" fill="#E9EDEF" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="16">E aí? Como foi?</text>
        <text x="210" y="32" fill="#85BDB1" font-family="sans-serif" font-size="12">16:38</text>
        <g transform="translate(255, 22)">${doubleCheckSvg}</g>
      </g>

      <!-- Msg 3 Left -->
      <g transform="translate(25, 165)">
        <rect width="490" height="75" rx="12" fill="#202C33"/>
        <text x="18" y="30" fill="#E9EDEF" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="16">Acabei fazendo um móvel pra um conhecido</text>
        <text x="18" y="55" fill="#E9EDEF" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="16">e ele gostou tanto que já pediu outro 😂</text>
        <text x="435" y="68" fill="#8696A0" font-family="sans-serif" font-size="12">16:40</text>
      </g>

      <!-- Msg 4 Right -->
      <g transform="translate(420, 255)">
        <rect width="355" height="48" rx="12" fill="#005C4B"/>
        <text x="20" y="30" fill="#E9EDEF" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="16">Aí virou negócio então kkk</text>
        <text x="270" y="32" fill="#85BDB1" font-family="sans-serif" font-size="12">16:41</text>
        <g transform="translate(315, 22)">${doubleCheckSvg}</g>
      </g>

      <!-- Msg 5 Left -->
      <g transform="translate(25, 320)">
        <rect width="520" height="75" rx="12" fill="#202C33"/>
        <text x="18" y="30" fill="#E9EDEF" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="16">Pois é! Foi aí que eu percebi que dá pra usar</text>
        <text x="18" y="55" fill="#E9EDEF" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="16">os projetos não só pra fazer pra casa, mas também pra vender.</text>
        <text x="465" y="68" fill="#8696A0" font-family="sans-serif" font-size="12">16:42</text>
      </g>

      <!-- Msg 6 Left -->
      <g transform="translate(25, 410)">
        <rect width="500" height="75" rx="12" fill="#202C33"/>
        <text x="18" y="30" fill="#E9EDEF" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="16">Tô começando aos poucos e já tô vendo</text>
        <text x="18" y="55" fill="#E9EDEF" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="16">que dá pra tirar uma renda com isso.</text>
        <text x="445" y="68" fill="#8696A0" font-family="sans-serif" font-size="12">16:43</text>
      </g>
    </g>

    <!-- Bottom Input & Keyboard -->
    <g transform="translate(0, 680)">
      <rect width="${width}" height="65" fill="#1F2C34"/>
      <circle cx="45" cy="32" r="18" fill="#2A3942"/>
      <path d="M 45 24 V 40 M 37 32 H 53" stroke="#8696A0" stroke-width="2.5" stroke-linecap="round"/>
      <rect x="75" y="10" width="530" height="44" rx="22" fill="#2A3942"/>
      <text x="100" y="38" fill="#8696A0" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="16">Mensagem</text>
      <circle cx="645" cy="32" r="16" fill="#2A3942"/>
      <circle cx="695" cy="32" r="16" fill="#2A3942"/>
      <circle cx="755" cy="32" r="22" fill="#00A884"/>
      <path d="M 755 22 C 752 22 750 24 750 27 L 750 34 C 750 37 752 39 755 39 C 758 39 760 37 760 34 L 760 27 C 760 24 758 22 755 22 Z M 746 30 C 746 35 750 39 755 39 C 760 39 764 35 764 30 M 755 39 V 43" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"/>
    </g>
    <g transform="translate(0, 745)">
      <rect width="${width}" height="455" fill="#1C1C1E"/>
      ${['Q','W','E','R','T','Y','U','I','O','P'].map((k, i) => `
        <rect x="${15 + i * 77}" y="20" width="70" height="55" rx="8" fill="#3A3A3C"/>
        <text x="${50 + i * 77}" y="56" fill="#FFFFFF" font-family="-apple-system, sans-serif" font-size="24" text-anchor="middle">${k}</text>
      `).join('')}
      ${['A','S','D','F','G','H','J','K','L'].map((k, i) => `
        <rect x="${53 + i * 77}" y="90" width="70" height="55" rx="8" fill="#3A3A3C"/>
        <text x="${88 + i * 77}" y="126" fill="#FFFFFF" font-family="-apple-system, sans-serif" font-size="24" text-anchor="middle">${k}</text>
      `).join('')}
      <rect x="15" y="160" width="90" height="55" rx="8" fill="#2C2C2E"/>
      <path d="M 60 180 L 60 198 M 52 188 L 60 180 L 68 188" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"/>
      ${['Z','X','C','V','B','N','M'].map((k, i) => `
        <rect x="${125 + i * 78}" y="160" width="70" height="55" rx="8" fill="#3A3A3C"/>
        <text x="${160 + i * 78}" y="196" fill="#FFFFFF" font-family="-apple-system, sans-serif" font-size="24" text-anchor="middle">${k}</text>
      `).join('')}
      <rect x="690" y="160" width="95" height="55" rx="8" fill="#2C2C2E"/>
      <text x="737" y="196" fill="#FFFFFF" font-family="sans-serif" font-size="20" text-anchor="middle">⌫</text>
      <rect x="15" y="235" width="115" height="55" rx="8" fill="#2C2C2E"/>
      <text x="72" y="270" fill="#FFFFFF" font-family="sans-serif" font-size="18" text-anchor="middle">123</text>
      <rect x="145" y="235" width="460" height="55" rx="8" fill="#3A3A3C"/>
      <text x="375" y="270" fill="#FFFFFF" font-family="sans-serif" font-size="18" text-anchor="middle">espaço</text>
      <rect x="620" y="235" width="165" height="55" rx="8" fill="#3A3A3C"/>
      <text x="702" y="270" fill="#FFFFFF" font-family="sans-serif" font-size="18" text-anchor="middle">retorno</text>
    </g>
  </svg>
  `;
  await sharp(Buffer.from(svg)).png().toFile(path.join(publicDir, '3.png'));
  console.log('3.png generated successfully');
}

// GENERATE 4.png
async function generateImg4() {
  const width = 800;
  const height = 1200;
  const svg = `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    ${bgPattern}
    <rect width="${width}" height="${height}" fill="url(#wa-pattern)"/>

    <!-- Status Bar -->
    <rect width="${width}" height="45" fill="#0B141A"/>
    <text x="36" y="32" fill="#E9EDEF" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="20" font-weight="600">09:42</text>
    <g transform="translate(680, 16)">
      <rect x="0" y="8" width="3" height="8" rx="1" fill="#E9EDEF"/>
      <rect x="5" y="6" width="3" height="10" rx="1" fill="#E9EDEF"/>
      <rect x="10" y="3" width="3" height="13" rx="1" fill="#E9EDEF"/>
      <rect x="15" y="0" width="3" height="16" rx="1" fill="#E9EDEF"/>
      <text x="26" y="14" fill="#E9EDEF" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="14" font-weight="600">5G</text>
      <rect x="52" y="2" width="26" height="13" rx="3" fill="none" stroke="#E9EDEF" stroke-width="1.5"/>
      <rect x="54" y="4" width="18" height="9" rx="1.5" fill="#E9EDEF"/>
      <path d="M79 6.5V10.5" stroke="#E9EDEF" stroke-width="1.5" stroke-linecap="round"/>
    </g>

    <!-- Header -->
    <g transform="translate(0, 45)">
      <rect width="${width}" height="70" fill="#1F2C34"/>
      <path d="M 30 35 L 42 23 M 30 35 L 42 47" stroke="#53BDEB" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="75" cy="35" r="24" fill="#37474F"/>
      <text x="75" y="42" fill="#FFFFFF" font-family="sans-serif" font-size="20" font-weight="bold" text-anchor="middle">M</text>
      <text x="115" y="31" fill="#E9EDEF" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="20" font-weight="bold">Marcos Almeida</text>
      <text x="115" y="51" fill="#8696A0" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="14">online</text>
      <path d="M 680 25 L 705 25 C 708 25 710 27 710 30 L 710 42 C 710 45 708 47 705 47 L 680 47 C 677 47 675 45 675 42 L 675 30 C 675 27 677 25 680 25 Z M 710 32 L 725 24 L 725 48 L 710 40 Z" fill="none" stroke="#53BDEB" stroke-width="2" stroke-linejoin="round"/>
      <path d="M 755 24 C 766 24 774 32 774 43 C 774 45 772 47 769 47 C 764 47 761 41 756 36 C 751 31 745 28 745 23 C 745 20 747 18 749 18 Z" fill="none" stroke="#53BDEB" stroke-width="2"/>
    </g>

    <!-- Chat Messages -->
    <g transform="translate(0, 125)">
      <!-- Msg 1 Left -->
      <g transform="translate(25, 10)">
        <rect width="500" height="75" rx="12" fill="#202C33"/>
        <text x="18" y="30" fill="#E9EDEF" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="16">Cara, uma coisa que sempre me dava medo</text>
        <text x="18" y="55" fill="#E9EDEF" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="16">era comprar madeira errada.</text>
        <text x="445" y="68" fill="#8696A0" font-family="sans-serif" font-size="12">09:15</text>
      </g>

      <!-- Msg 2 Right -->
      <g transform="translate(470, 100)">
        <rect width="305" height="48" rx="12" fill="#005C4B"/>
        <text x="20" y="30" fill="#E9EDEF" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="16">Sério? Por quê?</text>
        <text x="220" y="32" fill="#85BDB1" font-family="sans-serif" font-size="12">09:16</text>
        <g transform="translate(265, 22)">${doubleCheckSvg}</g>
      </g>

      <!-- Msg 3 Left -->
      <g transform="translate(25, 165)">
        <rect width="530" height="100" rx="12" fill="#202C33"/>
        <text x="18" y="30" fill="#E9EDEF" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="16">É que eu não entendia nada de material.</text>
        <text x="18" y="55" fill="#E9EDEF" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="16">Tinha medo de gastar dinheiro e depois</text>
        <text x="18" y="80" fill="#E9EDEF" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="16">descobrir que não dava pro projeto.</text>
        <text x="475" y="92" fill="#8696A0" font-family="sans-serif" font-size="12">09:18</text>
      </g>

      <!-- Msg 4 Right -->
      <g transform="translate(400, 280)">
        <rect width="375" height="48" rx="12" fill="#005C4B"/>
        <text x="20" y="30" fill="#E9EDEF" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="16">E conseguiu resolver isso?</text>
        <text x="290" y="32" fill="#85BDB1" font-family="sans-serif" font-size="12">09:19</text>
        <g transform="translate(335, 22)">${doubleCheckSvg}</g>
      </g>

      <!-- Msg 5 Left -->
      <g transform="translate(25, 345)">
        <rect width="520" height="100" rx="12" fill="#202C33"/>
        <text x="18" y="30" fill="#E9EDEF" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="16">Consegui sim. Peguei um dos projetos</text>
        <text x="18" y="55" fill="#E9EDEF" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="16">e já tava tudo certinho. Tinha a lista do</text>
        <text x="18" y="80" fill="#E9EDEF" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="16">material e as medidas.</text>
        <text x="465" y="92" fill="#8696A0" font-family="sans-serif" font-size="12">09:20</text>
      </g>

      <!-- Msg 6 Right -->
      <g transform="translate(460, 460)">
        <rect width="315" height="48" rx="12" fill="#005C4B"/>
        <text x="20" y="30" fill="#E9EDEF" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="16">Ah, aí facilita né?</text>
        <text x="230" y="32" fill="#85BDB1" font-family="sans-serif" font-size="12">09:21</text>
        <g transform="translate(275, 22)">${doubleCheckSvg}</g>
      </g>

      <!-- Msg 7 Left -->
      <g transform="translate(25, 525)">
        <rect width="510" height="75" rx="12" fill="#202C33"/>
        <text x="18" y="30" fill="#E9EDEF" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="16">Demais! Comprei só o que precisava</text>
        <text x="18" y="55" fill="#E9EDEF" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="16">e fui direto fazer. Não gastei nada atoa.</text>
        <text x="455" y="68" fill="#8696A0" font-family="sans-serif" font-size="12">09:22</text>
      </g>

      <!-- Msg 8 Right -->
      <g transform="translate(500, 615)">
        <rect width="275" height="48" rx="12" fill="#005C4B"/>
        <text x="20" y="30" fill="#E9EDEF" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="16">E deu certo?</text>
        <text x="190" y="32" fill="#85BDB1" font-family="sans-serif" font-size="12">09:23</text>
        <g transform="translate(235, 22)">${doubleCheckSvg}</g>
      </g>

      <!-- Msg 9 Left -->
      <g transform="translate(25, 680)">
        <rect width="460" height="100" rx="12" fill="#202C33"/>
        <text x="18" y="30" fill="#E9EDEF" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="16">Deu sim! 😂</text>
        <text x="18" y="55" fill="#E9EDEF" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="16">Agora já tô até pensando em fazer</text>
        <text x="18" y="80" fill="#E9EDEF" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="16">outros e vender.</text>
        <text x="405" y="92" fill="#8696A0" font-family="sans-serif" font-size="12">09:24</text>
      </g>
    </g>
  </svg>
  `;
  await sharp(Buffer.from(svg)).png().toFile(path.join(publicDir, '4.png'));
  console.log('4.png generated successfully');
}

// GENERATE 5.png
async function generateImg5() {
  const width = 800;
  const height = 480;
  const svg = `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    ${bgPattern}
    <rect width="${width}" height="${height}" fill="url(#wa-pattern)"/>

    <!-- Chat Messages -->
    <g transform="translate(0, 25)">
      <!-- Msg 1 Left -->
      <g transform="translate(25, 10)">
        <rect width="520" height="75" rx="12" fill="#202C33"/>
        <text x="18" y="30" fill="#E9EDEF" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="16">Mano, eu tava com medo de comprar</text>
        <text x="18" y="55" fill="#E9EDEF" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="16">madeira errada e gastar dinheiro atoa.</text>
        <text x="465" y="68" fill="#8696A0" font-family="sans-serif" font-size="12">14:03</text>
      </g>

      <!-- Msg 2 Right -->
      <g transform="translate(390, 100)">
        <rect width="385" height="48" rx="12" fill="#005C4B"/>
        <text x="20" y="30" fill="#E9EDEF" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="16">E como você resolveu isso?</text>
        <text x="300" y="32" fill="#85BDB1" font-family="sans-serif" font-size="12">14:05</text>
        <g transform="translate(345, 22)">${doubleCheckSvg}</g>
      </g>

      <!-- Msg 3 Left -->
      <g transform="translate(25, 165)">
        <rect width="540" height="75" rx="12" fill="#202C33"/>
        <text x="18" y="30" fill="#E9EDEF" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="16">Peguei um dos projetos e já tinha tudo</text>
        <text x="18" y="55" fill="#E9EDEF" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="16">certinho do que precisava comprar e as medidas.</text>
        <text x="485" y="68" fill="#8696A0" font-family="sans-serif" font-size="12">14:07</text>
      </g>

      <!-- Msg 4 Right -->
      <g transform="translate(420, 255)">
        <rect width="355" height="48" rx="12" fill="#005C4B"/>
        <text x="20" y="30" fill="#E9EDEF" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="16">Show! Boa demais! 👍</text>
        <text x="270" y="32" fill="#85BDB1" font-family="sans-serif" font-size="12">14:08</text>
        <g transform="translate(315, 22)">${doubleCheckSvg}</g>
      </g>

      <!-- Msg 5 Left -->
      <g transform="translate(25, 320)">
        <rect width="500" height="75" rx="12" fill="#202C33"/>
        <text x="18" y="30" fill="#E9EDEF" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="16">Economizei tempo e dor de cabeça.</text>
        <text x="18" y="55" fill="#E9EDEF" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="16">Muito prático mesmo!</text>
        <text x="445" y="68" fill="#8696A0" font-family="sans-serif" font-size="12">14:09</text>
      </g>
    </g>
  </svg>
  `;
  await sharp(Buffer.from(svg)).png().toFile(path.join(publicDir, '5.png'));
  console.log('5.png generated successfully');
}

async function run() {
  await generateImg1();
  await generateImg2();
  await generateImg3();
  await generateImg4();
  await generateImg5();
  console.log('All 5 testimonial PNG files generated in public/');
}

run();
