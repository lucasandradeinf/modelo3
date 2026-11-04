import { useEffect, useMemo, useRef, useState, type KeyboardEvent } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Check,
  CircleCheck,
  CircleX,
  FileDown,
  Mail,
  Maximize2,
  Menu,
  Search,
  ShieldCheck,
  X,
} from 'lucide-react'
import {
  APROVACAO,
  CAMPANHA,
  CONDICOES,
  DESTAQUES_RESTRICOES,
  DOCUMENTOS,
  FAQ,
  JORNADA,
  MAILTO_SAC,
  NEGADO,
  PECA,
  PRAZOS,
} from './shared/campanha'
import { AVISO_PRODUTOS, LINHAS, imgCampanha, type Produto } from './shared/produtos'
import { RegulamentoLeitor } from './shared/RegulamentoLeitor'
import { Selo } from './shared/Selo'
import { Faq, FotoProduto, IconeEscudo, IconeReembolso, Marca, useMenu, useRevelar, useRolou } from './shared/ui'

const NAV = [
  { href: '#campanha', rotulo: 'A campanha' },
  { href: '#produtos', rotulo: 'Produtos' },
  { href: '#participar', rotulo: 'Como participar' },
  { href: '#condicoes', rotulo: 'Condições' },
  { href: '#duvidas', rotulo: 'Dúvidas' },
]

const retrato = imgCampanha('kv-retrato')
const retratoSm = imgCampanha('kv-retrato-sm')
const pdv = imgCampanha('pdv')
const flutuantes = ['iph-irresistivel', 'tnh-sh-cachinhos', 'gel-tm-arnica'].map(
  (id) => LINHAS.flatMap((l) => l.familias.flatMap((f) => f.itens)).find((p) => p.id === id)!,
)

export function App() {
  const [regAberto, setRegAberto] = useState(false)
  const [menu, setMenu] = useMenu()
  const rolou = useRolou()
  useRevelar()

  return (
    <>
      <a className="pular" href="#conteudo">
        Ir para o conteúdo
      </a>
      {APROVACAO.modoAprovacao && (
        <p className="faixa-aprovacao">
          Versão para avaliação interna · conteúdo sujeito à aprovação do regulamento final.{' '}
          <a href="#regulamento">Ver regulamento</a>
        </p>
      )}

      <header className={`topo${rolou ? ' topo--fixo' : ''}`}>
        <div className="container topo-in">
          <a href="#inicio" className="topo-marca" aria-label="FranceFarma Cosméticos — início">
            <Marca cor="azul" forma="horizontal" />
          </a>
          <nav className="topo-nav" aria-label="Seções da página">
            {NAV.map((n) => (
              <a key={n.href} href={n.href}>
                {n.rotulo}
              </a>
            ))}
          </nav>
          <a className="btn btn--amarelo topo-cta" href="#regulamento">
            <BookOpen aria-hidden="true" /> Regulamento
          </a>
          <button
            type="button"
            className="topo-menu"
            aria-expanded={menu}
            aria-controls="menu-movel"
            onClick={() => setMenu(!menu)}
          >
            {menu ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            <span className="sr-only">{menu ? 'Fechar menu' : 'Abrir menu'}</span>
          </button>
        </div>
        <div id="menu-movel" className={`menu-movel${menu ? ' aberto' : ''}`} hidden={!menu}>
          <nav aria-label="Seções da página">
            {[...NAV, { href: '#regulamento', rotulo: 'Regulamento' }, { href: '#atendimento', rotulo: 'Atendimento' }].map((n) => (
              <a key={n.href} href={n.href} onClick={() => setMenu(false)}>
                {n.rotulo}
                <ArrowRight aria-hidden="true" />
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main id="conteudo">
        {/* HERO ---------------------------------------------------------- */}
        <section className="hero" id="inicio" aria-labelledby="hero-titulo">
          <div className="container hero-grid">
            <div className="hero-texto">
              <p className="hero-pilula">
                <ShieldCheck aria-hidden="true" /> {CAMPANHA.acao} · Goiás
              </p>
              <h1 id="hero-titulo" className="hero-titulo">
                Satisfação Garantida <span>ou Seu Dinheiro de Volta</span>
              </h1>
              <p className="hero-sub">
                {PECA.apoio} <strong>{PECA.apoioDestaque}</strong> Experimente os produtos participantes e, se não
                ficar satisfeito, a FranceFarma devolve o valor pago, conforme o regulamento.
              </p>
              <div className="hero-ctas">
                <a className="btn btn--azul" href="#participar">
                  Conheça as regras <ArrowRight aria-hidden="true" />
                </a>
                <a className="btn btn--suave" href="#produtos">
                  Consultar produtos
                </a>
              </div>
              <p className="hero-vig">
                <span>Compras de</span> {CAMPANHA.vigencia}
              </p>
            </div>

            <div className="hero-visual">
              <div className="hero-cartao">
                <img
                  src={retrato.src}
                  srcSet={`${retratoSm.src} ${retratoSm.w}w, ${retrato.src} ${retrato.w}w`}
                  sizes="(min-width: 960px) 520px, 90vw"
                  width={retrato.w}
                  height={retrato.h}
                  alt="Mulher sorridente segura o sabonete facial Vidália junto ao rosto"
                  {...{ fetchpriority: 'high' }}
                />
                <Selo className="hero-selo" />
              </div>
              <ul className="hero-chips" aria-label="Resumo das regras">
                <li>
                  <b>30 dias</b> para pedir
                </li>
                <li>
                  <b>Até 2</b> unidades por CPF
                </li>
                <li>
                  <b>Devolução</b> sem custo
                </li>
              </ul>
              <div className="hero-produtos" aria-hidden="true">
                {flutuantes.map((p) => (
                  <FotoProduto key={p.id} foto={p.foto} sizes="120px" className="produto-img" />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* EM 1 MINUTO / A CAMPANHA -------------------------------------- */}
        <section className="secao campanha" id="campanha" aria-labelledby="campanha-titulo">
          <div className="container">
            <div className="cab-centro revelar">
              <p className="sobre">Conheça a campanha</p>
              <h2 id="campanha-titulo" className="titulo">
                Uma garantia simples, com regras claras
              </h2>
              <p className="lead">{PECA.promessa}</p>
            </div>
            <ul className="valores">
              <li className="revelar">
                <IconeEscudo className="valor-icone" />
                <h3>Qualidade que protege seu dinheiro</h3>
                <p>A FranceFarma confia nos próprios produtos e convida você a experimentar sem receio.</p>
              </li>
              <li className="revelar">
                <IconeReembolso className="valor-icone" />
                <h3>Reembolso do valor pago*</h3>
                <p>Exatamente o valor da nota fiscal, considerados descontos, por PIX ou transferência.</p>
              </li>
              <li className="revelar">
                <CircleCheck className="valor-icone" aria-hidden="true" />
                <h3>A avaliação é sua</h3>
                <p>O motivo da insatisfação não é julgado. A análise confere apenas os requisitos do regulamento.</p>
              </li>
            </ul>
            <p className="asterisco">{PECA.asterisco}</p>
          </div>
        </section>

        <Produtos />

        <Jornada />

        {/* CONDIÇÕES ----------------------------------------------------- */}
        <section className="secao condicoes" id="condicoes" aria-labelledby="condicoes-titulo">
          <div className="container">
            <div className="cab-centro revelar">
              <p className="sobre">Condições da campanha</p>
              <h2 id="condicoes-titulo" className="titulo">
                O que vale e o que não vale
              </h2>
            </div>
            <div className="vale-grid">
              <div className="vale revelar">
                <h3>
                  <CircleCheck aria-hidden="true" /> Para ter direito ao reembolso
                </h3>
                <ul>
                  <li>Nota fiscal emitida dentro da vigência ({CAMPANHA.vigencia}).</li>
                  <li>Solicitação em até 30 dias corridos da compra.</li>
                  <li>Conteúdo restante visível na embalagem.</li>
                  <li>Uso normal, conforme as instruções da embalagem.</li>
                  <li>Devolução do produto, na embalagem original, pelos Correios.</li>
                </ul>
                <small>Cláusulas 6.2, 8 e 9.1</small>
              </div>
              <div className="naovale revelar">
                <h3>
                  <CircleX aria-hidden="true" /> O reembolso não é aceito quando
                </h3>
                <ul>
                  {NEGADO.map((n) => (
                    <li key={n}>{n}</li>
                  ))}
                </ul>
                <small>Cláusula 10.1</small>
              </div>
            </div>

            <ul className="cond-cartoes">
              {CONDICOES.map((c) => (
                <li key={c.id} className="revelar">
                  <p className="cond-rot">{c.rotulo}</p>
                  <p className="cond-val">{c.valor}</p>
                  <p className="cond-det">{c.detalhe}</p>
                  <small>Cláusula {c.clausula}</small>
                </li>
              ))}
            </ul>

            <ul className="importantes revelar">
              {DESTAQUES_RESTRICOES.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>

            <Checklist />
          </div>
        </section>

        {/* PDV ----------------------------------------------------------- */}
        <section className="pdv" aria-labelledby="pdv-titulo">
          <div className="container pdv-grid">
            <img className="revelar" src={pdv.src} width={pdv.w} height={pdv.h} loading="lazy" alt="Materiais de ponto de venda da campanha com o selo Satisfação Garantida: wobbler, régua de gôndola e display de flyers" />
            <div className="revelar">
              <p className="sobre">No supermercado</p>
              <h2 id="pdv-titulo" className="titulo">
                Encontre o selo na gôndola
              </h2>
              <p>
                Os materiais da campanha sinalizam os produtos participantes e trazem o QR Code para o regulamento. A
                devolução não é feita no balcão: ela é sempre combinada com o SAC da FranceFarma.
              </p>
            </div>
          </div>
        </section>

        <Duvidas />

        {/* REGULAMENTO + ATENDIMENTO ------------------------------------- */}
        <div className="secao fim">
          <div className="container fim-grid">
            <section className="fim-cartao fim-cartao--reg revelar" id="regulamento" aria-labelledby="regulamento-titulo">
              <BookOpen className="fim-icone" aria-hidden="true" />
              <h2 id="regulamento-titulo">Regulamento</h2>
              <p>Leia a íntegra no site ou baixe o arquivo. {APROVACAO.versaoRegulamento}.</p>
              <div className="fim-acoes">
                <button type="button" className="btn btn--azul" onClick={() => setRegAberto(true)}>
                  Ler regulamento
                </button>
                <a className="btn btn--suave" href={CAMPANHA.regulamentoPdf} download>
                  <FileDown aria-hidden="true" /> PDF
                </a>
                <a className="btn btn--suave" href={CAMPANHA.regulamentoDocx} download>
                  DOCX
                </a>
              </div>
            </section>
            <section className="fim-cartao fim-cartao--sac revelar" id="atendimento" aria-labelledby="atendimento-titulo">
              <Mail className="fim-icone" aria-hidden="true" />
              <h2 id="atendimento-titulo">Atendimento</h2>
              <p>
                Não ficou satisfeito? A solicitação é feita somente pelo e-mail do SAC. O botão abre seu e-mail com um
                roteiro dos documentos.
              </p>
              <a className="btn btn--amarelo fim-email" href={MAILTO_SAC}>
                <Mail aria-hidden="true" /> {CAMPANHA.sacEmail}
              </a>
            </section>
          </div>
        </div>
      </main>

      <footer className="rodape">
        <div className="container rodape-in">
          <Marca cor="azul" className="rodape-logo" />
          <div className="rodape-info">
            <p>
              <b>{CAMPANHA.nome}</b>
            </p>
            <p>
              {CAMPANHA.acao} · Compras de {CAMPANHA.vigencia} · Goiás
            </p>
          </div>
          <ul className="rodape-links">
            <li>
              <button type="button" onClick={() => setRegAberto(true)}>
                Regulamento
              </button>
            </li>
            <li>
              <a href={MAILTO_SAC}>{CAMPANHA.sacEmail}</a>
            </li>
            <li>
              <a href={CAMPANHA.siteOficial} target="_blank" rel="noopener noreferrer">
                francefarma.com.br
              </a>
            </li>
          </ul>
          <p className="rodape-aviso">
            {CAMPANHA.avisoParticipacao} Promoção: {CAMPANHA.promotora}
          </p>
        </div>
      </footer>

      <RegulamentoLeitor aberto={regAberto} onFechar={() => setRegAberto(false)} />
    </>
  )
}

/* ------------------------------------------------------------------ */
/* Produtos: abas por linha, filtro por família e ampliação            */
/* ------------------------------------------------------------------ */
function Produtos() {
  const [ativa, setAtiva] = useState(0)
  const [familia, setFamilia] = useState('todas')
  const [zoom, setZoom] = useState<(Produto & { familia: string }) | null>(null)
  const abas = useRef<(HTMLButtonElement | null)[]>([])
  const linha = LINHAS[ativa]
  const itens = linha.familias
    .filter((f) => familia === 'todas' || f.id === familia)
    .flatMap((f) => f.itens.map((p) => ({ ...p, familia: f.nome })))

  const escolher = (i: number) => {
    setAtiva(i)
    setFamilia('todas')
  }

  const teclado = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    const n = LINHAS.length
    const alvo = e.key === 'ArrowRight' ? (i + 1) % n : e.key === 'ArrowLeft' ? (i - 1 + n) % n : e.key === 'Home' ? 0 : e.key === 'End' ? n - 1 : -1
    if (alvo < 0) return
    e.preventDefault()
    escolher(alvo)
    abas.current[alvo]?.focus()
  }

  return (
    <section className="secao produtos" id="produtos" aria-labelledby="produtos-titulo">
      <div className="container">
        <div className="cab-centro revelar">
          <p className="sobre">Produtos participantes</p>
          <h2 id="produtos-titulo" className="titulo">
            Escolha uma linha e conheça os produtos
          </h2>
        </div>

        <div className="abas revelar" role="tablist" aria-label="Linhas de produtos">
          {LINHAS.map((l, i) => (
            <button
              key={l.id}
              ref={(el) => {
                abas.current[i] = el
              }}
              type="button"
              role="tab"
              id={`aba-${l.id}`}
              aria-selected={ativa === i}
              aria-controls={`painel-${l.id}`}
              tabIndex={ativa === i ? 0 : -1}
              className="aba"
              onClick={() => escolher(i)}
              onKeyDown={(e) => teclado(e, i)}
            >
              <span className="aba-foto" aria-hidden="true">
                <FotoProduto foto={l.familias[0].itens[0].foto} sizes="64px" />
              </span>
              <span className="aba-txt">
                <b>{l.nome}</b>
                <small>{l.familias.reduce((s, f) => s + f.itens.length, 0)} produtos</small>
              </span>
            </button>
          ))}
        </div>

        <div className="painel" role="tabpanel" id={`painel-${linha.id}`} aria-labelledby={`aba-${linha.id}`} key={linha.id}>
          <div className="painel-cab">
            <div>
              <h3>{linha.marca}</h3>
              <p>{linha.chamada}</p>
            </div>
            <p className="painel-anexo">
              <b>Participam (Anexo I):</b> {linha.anexo}
            </p>
          </div>

          {linha.familias.length > 1 && (
            <div className="filtros" role="group" aria-label={`Filtrar ${linha.nome} por tipo`}>
              {[{ id: 'todas', nome: 'Todos' }, ...linha.familias].map((f) => (
                <button key={f.id} type="button" className="filtro" aria-pressed={familia === f.id} onClick={() => setFamilia(f.id)}>
                  {f.nome}
                </button>
              ))}
            </div>
          )}

          <ul className="grade" aria-live="polite">
            {itens.map((p) => (
              <li key={p.id} className="produto">
                <button type="button" className="produto-btn" onClick={() => setZoom(p)} aria-label={`Ampliar ${p.nome}`}>
                  <span className="produto-foto">
                    <FotoProduto foto={p.foto} sizes="(min-width: 1100px) 220px, 42vw" />
                  </span>
                  <Maximize2 className="produto-lupa" aria-hidden="true" />
                </button>
                <p className="produto-fam">{p.familia}</p>
                <p className="produto-nome">{p.nome}</p>
                <p className="produto-det">{p.detalhe}</p>
              </li>
            ))}
          </ul>

          {APROVACAO.modoAprovacao &&
            [linha.nota, ...linha.familias.map((f) => f.nota)].filter(Boolean).map((n) => (
              <p key={n} className="nota-conferencia">
                {n}
              </p>
            ))}
        </div>
        <p className="aviso-produtos">{AVISO_PRODUTOS}</p>
      </div>

      <Ampliacao produto={zoom} linha={linha.marca} onFechar={() => setZoom(null)} />
    </section>
  )
}

function Ampliacao({ produto, linha, onFechar }: { produto: (Produto & { familia: string }) | null; linha: string; onFechar: () => void }) {
  const ref = useRef<HTMLDialogElement>(null)
  useEffect(() => {
    const d = ref.current
    if (!d) return
    if (produto && !d.open) d.showModal()
    if (!produto && d.open) d.close()
  }, [produto])
  return (
    <dialog
      ref={ref}
      className="ampliacao"
      aria-labelledby="amp-titulo"
      onClose={onFechar}
      onClick={(e) => e.target === ref.current && onFechar()}
    >
      {produto && (
        <div className="amp-in">
          <div className="amp-foto">
            <img src={produto.foto.src} width={produto.foto.w} height={produto.foto.h} alt={produto.foto.alt} className="produto-img" />
          </div>
          <div className="amp-txt">
            <p className="produto-fam">
              {linha} · {produto.familia}
            </p>
            <h3 id="amp-titulo">{produto.nome}</h3>
            <p>{produto.detalhe}</p>
            <p className="amp-nota">Produto participante conforme o Anexo I do regulamento. Imagem ilustrativa.</p>
            <button type="button" className="btn btn--azul" onClick={onFechar}>
              Fechar
            </button>
          </div>
          <button type="button" className="amp-fechar" onClick={onFechar} aria-label="Fechar ampliação">
            <X aria-hidden="true" />
          </button>
        </div>
      )}
    </dialog>
  )
}

/* ------------------------------------------------------------------ */
/* Jornada em etapas                                                   */
/* ------------------------------------------------------------------ */
function Jornada() {
  const [passo, setPasso] = useState(0)
  const j = JORNADA[passo]
  const f = imgCampanha(j.foto)
  return (
    <section className="secao jornada" id="participar" aria-labelledby="participar-titulo">
      <div className="container">
        <div className="cab-centro revelar">
          <p className="sobre">Como participar</p>
          <h2 id="participar-titulo" className="titulo">
            A jornada em 5 etapas
          </h2>
        </div>

        <ol className="etapas revelar" style={{ ['--progresso' as string]: `${(passo / (JORNADA.length - 1)) * 100}%` }}>
          {JORNADA.map((e, i) => (
            <li key={e.id}>
              <button type="button" className={`etapa${i <= passo ? ' feita' : ''}`} aria-current={i === passo ? 'step' : undefined} onClick={() => setPasso(i)}>
                <span className="etapa-n">{i < passo ? <Check aria-hidden="true" /> : i + 1}</span>
                <span className="etapa-t">{e.titulo}</span>
              </button>
            </li>
          ))}
        </ol>

        <div className="etapa-painel revelar" aria-live="polite">
          <img key={j.foto} src={f.src} width={f.w} height={f.h} alt={j.alt} loading="lazy" />
          <div className="etapa-txt">
            <p className="etapa-cont">
              Etapa {passo + 1} de {JORNADA.length}
            </p>
            <h3>{j.titulo}</h3>
            <p>{j.texto}</p>
            <small>{j.clausula}</small>
            <div className="etapa-nav">
              <button type="button" className="btn btn--suave" onClick={() => setPasso(passo - 1)} disabled={passo === 0}>
                <ArrowLeft aria-hidden="true" /> Anterior
              </button>
              <button type="button" className="btn btn--azul" onClick={() => setPasso(passo + 1)} disabled={passo === JORNADA.length - 1}>
                Próxima <ArrowRight aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        <div className="linha-tempo revelar">
          <h3>Depois do protocolo</h3>
          <ol>
            {PRAZOS.map((p) => (
              <li key={p.titulo}>
                <p className="lt-valor">
                  {p.valor} <span>{p.unidade}</span>
                </p>
                <p className="lt-tit">{p.titulo}</p>
                <p className="lt-txt">{p.texto}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Checklist de documentos (fica só na tela; nada é enviado)           */
/* ------------------------------------------------------------------ */
function Checklist() {
  const [marcados, setMarcados] = useState<string[]>([])
  const alternar = (id: string) => setMarcados((m) => (m.includes(id) ? m.filter((x) => x !== id) : [...m, id]))
  const obrigatorios = DOCUMENTOS.filter((d) => d.id !== 'declaracao')
  const prontos = obrigatorios.filter((d) => marcados.includes(d.id)).length
  return (
    <div className="checklist revelar" id="documentos">
      <div className="checklist-cab">
        <div>
          <h3>Antes de escrever ao SAC</h3>
          <p>Marque o que você já separou. Esta lista fica só na sua tela: nada é enviado.</p>
        </div>
        <p className="checklist-prog" aria-live="polite">
          <b>{prontos}</b> de {obrigatorios.length} itens prontos
        </p>
      </div>
      <div className="checklist-barra" aria-hidden="true">
        <span style={{ width: `${(prontos / obrigatorios.length) * 100}%` }} />
      </div>
      <ul>
        {DOCUMENTOS.map((d) => (
          <li key={d.id}>
            <label className={marcados.includes(d.id) ? 'marcado' : ''}>
              <input type="checkbox" checked={marcados.includes(d.id)} onChange={() => alternar(d.id)} />
              <span className="caixa" aria-hidden="true">
                <Check />
              </span>
              <span>
                <b>{d.titulo}</b> {d.texto} <small>({d.clausula})</small>
              </span>
            </label>
          </li>
        ))}
      </ul>
      {prontos === obrigatorios.length && (
        <a className="btn btn--amarelo" href={MAILTO_SAC}>
          <Mail aria-hidden="true" /> Tudo pronto: escrever ao SAC
        </a>
      )}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* FAQ com busca                                                       */
/* ------------------------------------------------------------------ */
const normalizar = (s: string) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()

function Duvidas() {
  const [busca, setBusca] = useState('')
  const filtradas = useMemo(() => {
    const q = normalizar(busca.trim())
    return q ? FAQ.filter((f) => normalizar(f.p + ' ' + f.r).includes(q)) : FAQ
  }, [busca])
  return (
    <section className="secao duvidas" id="duvidas" aria-labelledby="duvidas-titulo">
      <div className="container duvidas-in">
        <div className="cab-centro revelar">
          <p className="sobre">Perguntas frequentes</p>
          <h2 id="duvidas-titulo" className="titulo">
            Tire suas dúvidas
          </h2>
        </div>
        <label className="busca revelar">
          <Search aria-hidden="true" />
          <span className="sr-only">Buscar nas perguntas frequentes</span>
          <input type="search" value={busca} onChange={(e) => setBusca(e.target.value)} placeholder="Busque por prazo, embalagem, PIX, nota fiscal…" />
        </label>
        <p className="busca-res" aria-live="polite">
          {busca ? `${filtradas.length} ${filtradas.length === 1 ? 'resposta encontrada' : 'respostas encontradas'}` : `${FAQ.length} perguntas`}
        </p>
        {filtradas.length ? (
          <Faq key={busca} itens={filtradas} className="faq-m3" inicial={busca ? 0 : null} />
        ) : (
          <div className="busca-vazia">
            <p>Nenhuma resposta encontrada para “{busca}”.</p>
            <a className="btn btn--azul" href={MAILTO_SAC}>
              <Mail aria-hidden="true" /> Pergunte ao SAC
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
