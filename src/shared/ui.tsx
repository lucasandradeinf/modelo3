import { useEffect, useId, useState, type ReactNode } from 'react'
import { ChevronDown } from 'lucide-react'
import type { Foto } from './produtos'

const base = import.meta.env.BASE_URL

/* ------------------------------------------------------------------ */
/* Logo oficial — aplicações monocromáticas usadas na peça e nos slides */
/* ------------------------------------------------------------------ */
type MarcaProps = {
  cor?: 'azul' | 'branco' | 'colorido'
  /** "assinatura": símbolo + FRANCEFARMA + COSMÉTICOS; "horizontal": símbolo + FRANCEFARMA. */
  forma?: 'assinatura' | 'horizontal'
  className?: string
}

export function Marca({ cor = 'azul', forma = 'assinatura', className }: MarcaProps) {
  const arquivo = forma === 'horizontal' ? `logo-h-${cor === 'colorido' ? 'azul' : cor}` : `logo-${cor}`
  const [w, h] = forma === 'horizontal' ? [1200, 95] : [1000, 302]
  return (
    <img
      className={className}
      src={`${base}img/marca/${arquivo}.png`}
      width={w}
      height={h}
      alt="FranceFarma Cosméticos"
      decoding="async"
    />
  )
}

/* ------------------------------------------------------------------ */
/* Fotografia de produto (recorte com fundo transparente)              */
/* ------------------------------------------------------------------ */
type FotoProps = {
  foto: Foto
  sizes: string
  className?: string
  prioridade?: boolean
}

export function FotoProduto({ foto, sizes, className = 'produto-img', prioridade }: FotoProps) {
  return (
    <img
      className={className}
      src={foto.src}
      srcSet={`${foto.srcSm} ${foto.wSm}w, ${foto.src} ${foto.w}w`}
      sizes={sizes}
      width={foto.w}
      height={foto.h}
      alt={foto.alt}
      loading={prioridade ? 'eager' : 'lazy'}
      decoding="async"
      {...(prioridade ? { fetchpriority: 'high' } : {})}
    />
  )
}

/* ------------------------------------------------------------------ */
/* Ícones da peça-chave                                                */
/* ------------------------------------------------------------------ */
/** Escudo com o símbolo FranceFarma — "Qualidade que protege seu dinheiro". */
export function IconeEscudo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" aria-hidden="true">
      <path
        d="M32 4 56 12v18c0 15-10.4 25.6-24 30C18.4 55.6 8 45 8 30V12Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="4.5"
        strokeLinejoin="round"
      />
      <path d="M21 19h22a11 9 0 0 1-22 0Z" fill="currentColor" />
      <path d="M21 45h22a11 9 0 0 0-22 0Z" fill="currentColor" />
    </svg>
  )
}

/** Cifrão com setas circulares — "Reembolso total do valor pago". */
export function IconeReembolso({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M53 26A22 22 0 0 0 14.5 17" />
      <path d="M11 38a22 22 0 0 0 38.5 9" />
      <path d="M14 8v10h10" />
      <path d="M50 56V46H40" />
      <path d="M38.5 24.5c-1.2-2-3.6-3.3-6.5-3.3-3.9 0-6.6 2.1-6.6 5s2.7 4.2 6.6 5 6.6 2.2 6.6 5.2-2.9 5-6.6 5c-3 0-5.5-1.3-6.8-3.4M32 17v4.2M32 42.8V47" />
    </svg>
  )
}

/* ------------------------------------------------------------------ */
/* FAQ acessível (botão + região, animação por grid-template-rows)     */
/* ------------------------------------------------------------------ */
type FaqProps = {
  itens: { p: string; r: string }[]
  className?: string
  icone?: ReactNode
  inicial?: number | null
}

export function Faq({ itens, className = '', icone, inicial = 0 }: FaqProps) {
  const [aberto, setAberto] = useState<number | null>(inicial)
  const uid = useId()
  return (
    <div className={`faq ${className}`}>
      {itens.map((item, i) => {
        const on = aberto === i
        const bid = `${uid}-b${i}`
        const pid = `${uid}-p${i}`
        return (
          <div className={`faq-item${on ? ' aberto' : ''}`} key={item.p}>
            <h3 className="faq-titulo">
              <button
                type="button"
                id={bid}
                className="faq-q"
                aria-expanded={on}
                aria-controls={pid}
                onClick={() => setAberto(on ? null : i)}
              >
                <span>{item.p}</span>
                <span className="faq-icone" aria-hidden="true">
                  {icone ?? <ChevronDown />}
                </span>
              </button>
            </h3>
            <div id={pid} role="region" aria-labelledby={bid} className="faq-a" {...{ inert: on ? undefined : "" }}>
              <div>
                <p>{item.r}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Revelação suave ao rolar                                            */
/* ------------------------------------------------------------------ */
export function useRevelar() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('.revelar')
    if (!('IntersectionObserver' in window)) {
      els.forEach((e) => e.classList.add('visivel'))
      return
    }
    const io = new IntersectionObserver(
      (entradas) =>
        entradas.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add('visivel')
            io.unobserve(en.target)
          }
        }),
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    )
    els.forEach((e) => io.observe(e))
    return () => io.disconnect()
  }, [])
}

/** Fecha o menu móvel com Esc e bloqueia a rolagem enquanto aberto. */
export function useMenu() {
  const [aberto, setAberto] = useState(false)
  useEffect(() => {
    if (!aberto) return
    const tecla = (e: KeyboardEvent) => e.key === 'Escape' && setAberto(false)
    document.addEventListener('keydown', tecla)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', tecla)
      document.body.style.overflow = ''
    }
  }, [aberto])
  return [aberto, setAberto] as const
}

/** Indica se a página já rolou além de `limite` px (cabeçalho compacto). */
export function useRolou(limite = 24) {
  const [rolou, setRolou] = useState(false)
  useEffect(() => {
    const f = () => setRolou(window.scrollY > limite)
    f()
    window.addEventListener('scroll', f, { passive: true })
    return () => window.removeEventListener('scroll', f)
  }, [limite])
  return rolou
}
