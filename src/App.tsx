import { useEffect, useState } from 'react'
import { ArrowDown, ArrowUpRight, Check, CheckCircle2, FileText, Mail, Menu, X, XCircle } from 'lucide-react'
import '@fontsource-variable/fraunces'
import '@fontsource-variable/nunito-sans'
import {
  APROVACAO,
  AVISO_PRODUTOS,
  CAMPANHA,
  CONDICOES,
  DOCUMENTOS,
  FAQ,
  LINHAS,
  MAILTO_SAC,
  PASSOS,
} from './content/campanha'
import { RegulamentoLeitor } from './components/RegulamentoLeitor'
import { CenaHero, GrupoPessoas } from './components/Ilustracoes'

const base = import.meta.env.BASE_URL

const NAV = [
  { href: '#jornada', label: 'Como funciona' },
  { href: '#produtos', label: 'Produtos' },
  { href: '#condicoes', label: 'Condições' },
  { href: '#documentos', label: 'Documentos' },
  { href: '#duvidas', label: 'Dúvidas' },
]

/* Quadro de transparência: o que vale e o que não vale (cláusulas 9, 10, 11, 15) */
const VALE = [
  'Pessoa física maior de 18 anos, residente em Goiás',
  'Produto do Anexo I comprado de 14/09 a 31/12/2026, com nota ou cupom fiscal',
  'Compra em loja de rede participante situada em Goiás, ou no site/app da própria rede com nota emitida em Goiás',
  'Pedido enviado ao SAC em até 30 dias corridos da emissão da nota',
  'Produto usado conforme a embalagem, devolvido na embalagem original e com conteúdo restante',
  'Reembolso do valor efetivamente pago, por PIX ou transferência para conta em seu nome',
]
const NAO_VALE = [
  'Compra sem nota ou cupom fiscal, ou fora da vigência',
  'Embalagem descartada ou produto totalmente consumido',
  'Uso em desacordo com as instruções ou indício de adulteração',
  'Compra para revenda, em nome de pessoa jurídica ou em marketplaces e apps de entrega de terceiros',
  'Brindes, amostras grátis, kits promocionais gratuitos e produtos de campanhas de doação',
  'Deslocamento e outros custos indiretos',
]

export function App() {
  const [menu, setMenu] = useState(false)
  const [regAberto, setRegAberto] = useState(false)
  const [marcados, setMarcados] = useState<boolean[]>(() => DOCUMENTOS.map(() => false))
  const prontos = marcados.filter(Boolean).length

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenu(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <a className="pular" href="#conteudo">Pular para o conteúdo</a>
      {APROVACAO.modoAprovacao && (
        <p className="faixa-aprovacao" role="note">
          Versão para avaliação interna — conteúdo sujeito à aprovação final do regulamento.
        </p>
      )}

      <header className="topo">
        <div className="topo-inner">
          <a href="#inicio" className="topo-logo" aria-label="FranceFarma Cosméticos — início">
            <img src={`${base}img/marca/francefarma-logo-480.webp`} alt="FranceFarma Cosméticos" width="480" height="145" />
          </a>
          <nav id="menu-principal" className={`topo-nav ${menu ? 'aberto' : ''}`} aria-label="Principal">
            <ul>
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href} onClick={() => setMenu(false)}>{n.label}</a>
                </li>
              ))}
            </ul>
            <button type="button" className="btn btn-suave" onClick={() => { setMenu(false); setRegAberto(true) }}>
              <FileText aria-hidden="true" /> Regulamento
            </button>
          </nav>
          <button type="button" className="topo-menu" aria-expanded={menu} aria-controls="menu-principal" onClick={() => setMenu((v) => !v)}>
            {menu ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            <span className="sr">{menu ? 'Fechar menu' : 'Abrir menu'}</span>
          </button>
        </div>
      </header>

      <main id="conteudo">
        {/* HERO -------------------------------------------------- */}
        <section id="inicio" className="hero" aria-labelledby="hero-titulo">
          <div className="hero-texto">
            <p className="selo-texto">
              <span className="ponto" aria-hidden="true" /> Satisfação Garantida ou Seu Dinheiro de Volta
            </p>
            <h1 id="hero-titulo">
              Experimente com liberdade. <em>Sua opinião é respeitada.</em>
            </h1>
            <p className="hero-sub">
              Na campanha da FranceFarma em Goiás, se você usar um produto participante e não ficar satisfeito, pode
              pedir o reembolso do valor pago — com regras claras, explicadas aqui passo a passo.
            </p>
            <div className="hero-ctas">
              <a href="#jornada" className="btn btn-pri">
                Entenda como funciona <ArrowDown aria-hidden="true" />
              </a>
              <a href="#produtos" className="btn btn-link">Ver produtos participantes</a>
            </div>
            <ol className="mini-jornada" aria-label="Resumo da jornada">
              <li>Compre em Goiás</li>
              <li>Experimente</li>
              <li>Não gostou? Fale com o SAC</li>
              <li>Devolva e aguarde a análise</li>
            </ol>
            <p className="hero-nota">Compras de 14/09 a 31/12/2026 · Até 2 unidades por CPF · Sujeito ao regulamento</p>
          </div>
          <div className="hero-arte">
            <CenaHero />
            <div className="prateleira">
              <img src={`${base}img/produtos/vid-hidratante-ureia.webp`} alt="Hidratante corporal Vidália" width="256" height="760" fetchPriority="high" />
              <img src={`${base}img/produtos/intimo-neutro.webp`} alt="Sabonete íntimo Íntimo pH" width="265" height="760" />
            </div>
            <p className="ilustr">Ilustração e imagens de embalagens meramente ilustrativas</p>
          </div>
        </section>

        {/* GARANTIA ---------------------------------------------- */}
        <section className="garantia" aria-labelledby="garantia-titulo">
          <GrupoPessoas />
          <h2 id="garantia-titulo">Sua experiência importa</h2>
          <p className="garantia-lead">
            Cada pele, cada cabelo e cada rotina são diferentes. Por isso, a FranceFarma criou uma garantia para você
            experimentar com mais confiança: se depois de usar o produto conforme a embalagem você não ficar satisfeito,
            pode solicitar o reembolso do valor efetivamente pago.
          </p>
          <div className="garantia-cards">
            <div>
              <h3>Você decide</h3>
              <p>O motivo da insatisfação é seu e não passa por julgamento. A análise confere apenas os requisitos do regulamento e indícios de fraude.</p>
            </div>
            <div>
              <h3>Com análise</h3>
              <p>O reembolso não é automático: depende do pedido no prazo, da devolução do produto e da análise da FranceFarma.</p>
            </div>
            <div>
              <h3>Sem perder direitos</h3>
              <p>A campanha é um benefício adicional. Ela não é sorteio e não substitui os seus direitos pelo Código de Defesa do Consumidor.</p>
            </div>
          </div>
        </section>

        {/* JORNADA ------------------------------------------------ */}
        <section id="jornada" className="jornada" aria-labelledby="jornada-titulo">
          <div className="cab">
            <p className="sobre">Como funciona</p>
            <h2 id="jornada-titulo">A jornada, do começo ao fim</h2>
            <p>Seis etapas simples. Cada uma indica a cláusula do regulamento em que se baseia.</p>
          </div>
          <ol className="jornada-lista">
            {PASSOS.map((p, i) => (
              <li key={p.titulo}>
                <span className="j-marca" aria-hidden="true">{i + 1}</span>
                <div className="j-card">
                  <h3>{p.titulo}</h3>
                  <p>{p.texto}</p>
                  <p className="j-cl">{p.clausula}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* TRANSPARÊNCIA ------------------------------------------ */}
        <section className="transparencia" aria-labelledby="transp-titulo">
          <div className="cab">
            <p className="sobre">Transparência</p>
            <h2 id="transp-titulo">O que vale e o que não vale</h2>
          </div>
          <div className="transp-grade">
            <div className="transp-col transp-sim">
              <h3><CheckCircle2 aria-hidden="true" /> Vale</h3>
              <ul>
                {VALE.map((t) => <li key={t}>{t}</li>)}
              </ul>
            </div>
            <div className="transp-col transp-nao">
              <h3><XCircle aria-hidden="true" /> Não vale</h3>
              <ul>
                {NAO_VALE.map((t) => <li key={t}>{t}</li>)}
              </ul>
            </div>
          </div>
        </section>

        {/* PRODUTOS ----------------------------------------------- */}
        <section id="produtos" className="produtos" aria-labelledby="produtos-titulo">
          <div className="cab">
            <p className="sobre">Produtos participantes</p>
            <h2 id="produtos-titulo">Para a sua rotina de cuidado</h2>
            <p>{AVISO_PRODUTOS}</p>
          </div>
          <div className="prod-lista">
            {LINHAS.map((l) => (
              <article key={l.id} className={`prod prod-${l.id}`}>
                <div className="prod-fotos">
                  {l.imagens.slice(0, 3).map((im) => (
                    <img key={im.src} src={im.src} alt={im.alt} loading="lazy" decoding="async" />
                  ))}
                </div>
                <div className="prod-txt">
                  <h3>{l.nome}</h3>
                  <ul>
                    {l.itens.map((it) => (
                      <li key={it}><Check aria-hidden="true" /> {it}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CONDIÇÕES ---------------------------------------------- */}
        <section id="condicoes" className="condicoes" aria-labelledby="cond-titulo">
          <div className="cab">
            <p className="sobre">Condições principais</p>
            <h2 id="cond-titulo">As regras, em linguagem simples</h2>
          </div>
          <dl className="cond-grade">
            {CONDICOES.map((c) => (
              <div key={c.rotulo} className="cond">
                <dt>{c.rotulo}</dt>
                <dd>
                  <strong>{c.valor}</strong>
                  <span>{c.detalhe}</span>
                  <small>Cláusula {c.clausula}</small>
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* DOCUMENTOS --------------------------------------------- */}
        <section id="documentos" className="documentos" aria-labelledby="docs-titulo">
          <div className="docs-caixa">
            <div className="docs-txt">
              <p className="sobre">Documentos</p>
              <h2 id="docs-titulo">Organize antes de escrever</h2>
              <p>
                Use esta lista para conferir o que separar. As marcações ficam só na sua tela: nada é enviado ou salvo
                por este site.
              </p>
              <p className="docs-progresso" aria-live="polite">
                {prontos} de {DOCUMENTOS.length} itens conferidos
              </p>
              <div className="barra" aria-hidden="true"><span style={{ width: `${(prontos / DOCUMENTOS.length) * 100}%` }} /></div>
            </div>
            <ul className="docs-lista">
              {DOCUMENTOS.map((d, i) => (
                <li key={d.titulo}>
                  <label>
                    <input
                      type="checkbox"
                      checked={marcados[i]}
                      onChange={() => setMarcados((m) => m.map((v, j) => (j === i ? !v : v)))}
                    />
                    <span className="caixa" aria-hidden="true"><Check /></span>
                    <span>
                      <strong>{d.titulo}</strong>
                      <span className="docs-desc">{d.texto}</span>
                    </span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SAC ---------------------------------------------------- */}
        <section id="sac" className="sac" aria-labelledby="sac-titulo">
          <div className="sac-card">
            <div>
              <h2 id="sac-titulo">Não ficou satisfeito? Estamos ouvindo.</h2>
              <p>
                O canal indicado no regulamento para a solicitação é o SAC da FranceFarma, pelo e-mail{' '}
                <strong>{CAMPANHA.sacEmail}</strong>. O botão abre o seu programa de e-mail com um roteiro do que enviar.
              </p>
              <p className="sac-obs">Este site não recebe, armazena nem processa solicitações ou dados pessoais.</p>
            </div>
            <div className="sac-acao">
              <a href={MAILTO_SAC} className="btn btn-pri btn-g">
                <Mail aria-hidden="true" /> Escrever para o SAC
              </a>
              <p>Até 30 dias corridos da emissão da nota fiscal</p>
            </div>
          </div>
        </section>

        {/* FAQ ---------------------------------------------------- */}
        <section id="duvidas" className="faq" aria-labelledby="faq-titulo">
          <div className="cab">
            <p className="sobre">Perguntas frequentes</p>
            <h2 id="faq-titulo">Ficou alguma dúvida?</h2>
          </div>
          <div className="faq-lista">
            {FAQ.map((f) => (
              <details key={f.p}>
                <summary>{f.p}</summary>
                <p>{f.r}</p>
              </details>
            ))}
          </div>
        </section>

        {/* REGULAMENTO -------------------------------------------- */}
        <section id="regulamento" className="regulamento" aria-labelledby="reg-sec-titulo">
          <h2 id="reg-sec-titulo">Regulamento completo</h2>
          <p>Transparência também é poder ler tudo. A participação implica a aceitação integral do regulamento.</p>
          {APROVACAO.modoAprovacao && <p className="reg-status">{APROVACAO.versaoRegulamento}</p>}
          <div className="reg-acoes">
            <button type="button" className="btn btn-pri" onClick={() => setRegAberto(true)}>
              <FileText aria-hidden="true" /> Ler regulamento completo
            </button>
            <a href={CAMPANHA.regulamentoPdf} className="btn btn-suave" download>Baixar em PDF</a>
          </div>
        </section>
      </main>

      <footer className="rodape">
        <div className="rodape-inner">
          <img src={`${base}img/marca/francefarma-logo-480.webp`} alt="FranceFarma Cosméticos" width="480" height="145" loading="lazy" />
          <div>
            <p className="rodape-camp">{CAMPANHA.nome}</p>
            <p>{CAMPANHA.avisoParticipacao}</p>
          </div>
          <ul className="rodape-links">
            <li><button type="button" onClick={() => setRegAberto(true)}>Regulamento</button></li>
            <li><a href={`mailto:${CAMPANHA.sacEmail}`}>{CAMPANHA.sacEmail}</a></li>
            <li>
              <a href={CAMPANHA.siteOficial} target="_blank" rel="noopener noreferrer">
                Site oficial FranceFarma <ArrowUpRight aria-hidden="true" /><span className="sr"> (abre em nova aba)</span>
              </a>
            </li>
          </ul>
        </div>
        <p className="rodape-legal">
          Promotora: {CAMPANHA.promotora}. Campanha de garantia de satisfação: não é sorteio, concurso ou vale-brinde e não
          substitui os direitos previstos no Código de Defesa do Consumidor.
        </p>
      </footer>

      <RegulamentoLeitor aberto={regAberto} onFechar={() => setRegAberto(false)} />
    </>
  )
}
