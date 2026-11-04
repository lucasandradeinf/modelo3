/**
 * Selo "Satisfação Garantida ou seu dinheiro de volta", reproduzido em vetor a
 * partir da peça-chave oficial: check azul no círculo de contorno amarelo,
 * bloco azul arredondado e pílula azul-clara com contorno amarelo.
 * Proporções e cores medidas na arte original (3543 × 4200 px).
 */
type Props = {
  className?: string
  /** Cor de preenchimento do círculo e da pílula. Padrão: azul-claro da peça. */
  claro?: string
  titulo?: string
}

export function Selo({ className, claro = '#86c2eb', titulo = 'Selo Satisfação Garantida ou seu dinheiro de volta' }: Props) {
  const azul = '#094982'
  const amarelo = '#fbbc42'
  return (
    <svg className={className} viewBox="0 0 660 560" role="img" aria-label={titulo}>
      <rect x="20" y="132" width="620" height="250" rx="62" fill={azul} />
      <circle cx="330" cy="96" r="76" fill={claro} stroke={amarelo} strokeWidth="14" />
      <path
        d="M276 92 L318 138 L404 24"
        fill="none"
        stroke={azul}
        strokeWidth="34"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g fill="#fff" fontFamily="var(--fonte-display)" fontWeight="900" fontSize="104" textAnchor="middle">
        <text x="330" y="255" textLength="556" lengthAdjust="spacingAndGlyphs">
          SATISFAÇÃO
        </text>
        <text x="330" y="355" textLength="530" lengthAdjust="spacingAndGlyphs">
          GARANTIDA
        </text>
      </g>
      <rect x="10" y="384" width="640" height="164" rx="82" fill={claro} stroke={amarelo} strokeWidth="14" />
      <g
        fill={azul}
        fontFamily="var(--fonte-display)"
        fontWeight="800"
        fontStyle="italic"
        fontSize="64"
        textAnchor="middle"
      >
        <text x="330" y="456" textLength="472" lengthAdjust="spacingAndGlyphs">
          OU SEU DINHEIRO
        </text>
        <text x="330" y="522" textLength="262" lengthAdjust="spacingAndGlyphs">
          DE VOLTA
        </text>
      </g>
    </svg>
  )
}
