/* Ilustrações vetoriais originais do Modelo 3 — pessoas em momentos de
   autocuidado. Não representam embalagens nem marcas. */

type Pessoa = { pele: string; sombra: string; cabelo: string; estilo: 'cachos' | 'curto' | 'coque' | 'longo'; roupa: string }

export const PESSOAS: Pessoa[] = [
  { pele: '#b9785a', sombra: '#9c5f45', cabelo: '#2a1a14', estilo: 'cachos', roupa: '#f2c9b4' },
  { pele: '#f0c7a8', sombra: '#d9a786', cabelo: '#6b3f26', estilo: 'curto', roupa: '#c9dccf' },
  { pele: '#7a4a35', sombra: '#5f3726', cabelo: '#16100d', estilo: 'coque', roupa: '#f5e3dd' },
  { pele: '#d9a07c', sombra: '#bd8462', cabelo: '#3b2a20', estilo: 'longo', roupa: '#dfe6f2' },
]

function Cabelo({ p, atras }: { p: Pessoa; atras?: boolean }) {
  if (p.estilo === 'cachos')
    return atras ? null : (
      <g fill={p.cabelo}>
        {[[-46, -40], [-28, -60], [-6, -68], [18, -64], [38, -50], [50, -28], [-54, -16], [0, -52], [28, -40], [-30, -38]].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={i > 6 ? 20 : 22} />
        ))}
      </g>
    )
  if (p.estilo === 'curto')
    return atras ? null : <path fill={p.cabelo} d="M-58 -10 C-62 -62 -20 -78 6 -74 C 44 -70 62 -44 58 -8 C 50 -30 30 -40 4 -42 C -22 -44 -46 -34 -58 -10 Z" />
  if (p.estilo === 'coque')
    return atras ? (
      <circle cx="0" cy="-82" r="26" fill={p.cabelo} />
    ) : (
      <path fill={p.cabelo} d="M-58 -4 C-64 -60 -26 -74 0 -74 C 30 -74 64 -58 58 -4 C 52 -36 30 -50 0 -50 C -30 -50 -52 -36 -58 -4 Z" />
    )
  return atras ? (
    <path fill={p.cabelo} d="M-62 -10 C -70 -70 -20 -82 4 -80 C 50 -78 70 -46 64 -6 L 70 92 C 40 100 -40 100 -70 92 Z" />
  ) : (
    <path fill={p.cabelo} d="M-60 0 C-64 -60 -24 -78 4 -76 C 44 -74 66 -48 60 -2 C 40 -40 6 -50 -24 -40 C -40 -34 -54 -20 -60 0 Z" />
  )
}

/** Rosto simples para avatares e cenas. Origem no centro do rosto. */
export function Rosto({ p, sorriso = true, olhosFechados = false }: { p: Pessoa; sorriso?: boolean; olhosFechados?: boolean }) {
  return (
    <g>
      <Cabelo p={p} atras />
      <path d="M-22 50 L-22 92 C -22 104 22 104 22 92 L 22 50 Z" fill={p.sombra} />
      <path d="M-90 170 C -86 112 -50 92 0 92 C 50 92 86 112 90 170 Z" fill={p.roupa} />
      <ellipse cx="-56" cy="6" rx="9" ry="13" fill={p.sombra} />
      <ellipse cx="56" cy="6" rx="9" ry="13" fill={p.sombra} />
      <ellipse cx="0" cy="0" rx="56" ry="66" fill={p.pele} />
      <Cabelo p={p} />
      {olhosFechados ? (
        <g stroke="#2a1d18" strokeWidth="3.2" strokeLinecap="round" fill="none">
          <path d="M-30 4 q10 8 20 0" />
          <path d="M10 4 q10 8 20 0" />
        </g>
      ) : (
        <g fill="#2a1d18">
          <ellipse cx="-20" cy="2" rx="4.5" ry="5.5" />
          <ellipse cx="20" cy="2" rx="4.5" ry="5.5" />
        </g>
      )}
      <circle cx="-34" cy="22" r="9" fill="#e8806f" opacity="0.28" />
      <circle cx="34" cy="22" r="9" fill="#e8806f" opacity="0.28" />
      <path d="M0 8 q-5 12 2 14" stroke={p.sombra} strokeWidth="3" fill="none" strokeLinecap="round" />
      {sorriso && <path d="M-14 34 q14 12 28 0" stroke="#7a2e2a" strokeWidth="3.4" fill="none" strokeLinecap="round" />}
    </g>
  )
}

/** Cena principal: pessoa aplicando hidratante no rosto, com folhas e gotas. */
export function CenaHero() {
  const p = PESSOAS[0]
  return (
    <svg viewBox="0 0 520 560" className="cena-hero" role="img" aria-label="Ilustração de uma pessoa sorrindo, de olhos fechados, aplicando hidratante no rosto">
      <path d="M78 470 C 10 380 40 220 140 150 C 250 72 420 90 476 214 C 530 334 470 470 360 512 C 260 550 140 548 78 470 Z" fill="#dde7df" />
      <path d="M150 548 L150 250 C150 160 210 112 290 112 C 370 112 430 160 430 250 L430 548 Z" fill="#fbf7f2" opacity="0.85" />
      <g transform="translate(290 330) scale(1.55)">
        <Rosto p={p} olhosFechados />
        {/* mão no rosto */}
        <g>
          <path d="M96 172 C 98 130 92 96 74 60" stroke={p.roupa} strokeWidth="34" strokeLinecap="round" fill="none" />
          <path d="M74 64 C 66 48 62 40 58 30" stroke={p.sombra} strokeWidth="24" strokeLinecap="round" fill="none" />
          <ellipse cx="56" cy="22" rx="17" ry="21" fill={p.pele} transform="rotate(-18 56 22)" />
          <rect x="40" y="-14" width="12" height="34" rx="6" fill={p.pele} transform="rotate(-10 46 3)" />
          <rect x="52" y="-12" width="12" height="34" rx="6" fill={p.pele} transform="rotate(-4 58 5)" />
          <rect x="63" y="-6" width="11" height="30" rx="5.5" fill={p.pele} transform="rotate(4 68 9)" />
          <ellipse cx="34" cy="10" rx="10" ry="6" fill="#ffffff" opacity="0.9" />
        </g>
      </g>
      {/* folhas */}
      <g fill="#3e6b57" opacity="0.9">
        <path d="M92 210 C 70 170 92 128 128 120 C 134 160 120 196 92 210 Z" />
        <path d="M70 262 C 40 246 34 210 52 186 C 78 204 86 238 70 262 Z" opacity="0.7" />
      </g>
      <path d="M92 210 C 100 180 112 150 128 120" stroke="#fbf7f2" strokeWidth="2" fill="none" />
      {/* gotas */}
      <g fill="#0b4a82" opacity="0.85">
        <path d="M452 150 c 0 0 -14 18 -14 27 a14 14 0 0 0 28 0 c 0 -9 -14 -27 -14 -27 z" />
        <path d="M480 196 c 0 0 -8 10 -8 15 a8 8 0 0 0 16 0 c 0 -5 -8 -15 -8 -15 z" opacity="0.6" />
      </g>
      <g stroke="#8a2233" strokeWidth="3" strokeLinecap="round">
        <path d="M418 88 v18 M409 97 h18" />
        <path d="M120 330 v12 M114 336 h12" opacity="0.7" />
      </g>
    </svg>
  )
}

/** Avatares em grupo — reforçam que a campanha fala com pessoas diversas. */
export function GrupoPessoas() {
  return (
    <svg viewBox="0 0 420 150" className="grupo" role="img" aria-label="Ilustração de quatro pessoas diferentes sorrindo">
      {PESSOAS.map((p, i) => (
        <g key={i} transform={`translate(${60 + i * 100} 70) scale(0.62)`}>
          <circle cx="0" cy="22" r="118" fill={['#f5e3dd', '#dde7df', '#dfe6f2', '#f8ecd9'][i]} />
          <clipPath id={`clip-av-${i}`}>
            <circle cx="0" cy="22" r="118" />
          </clipPath>
          <g clipPath={`url(#clip-av-${i})`}>
            <Rosto p={p} />
          </g>
        </g>
      ))}
    </svg>
  )
}
