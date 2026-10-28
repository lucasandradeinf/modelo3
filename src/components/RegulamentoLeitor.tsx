import { useEffect, useRef } from 'react'
import { X, FileDown } from 'lucide-react'
import regulamento from '../content/regulamento.json'
import { APROVACAO, CAMPANHA } from '../content/campanha'

type Bloco = { k: 'titulo' | 'h' | 'p' | 'sub' | 'anexo' | 'nota'; t: string }

/**
 * Exibe a íntegra do regulamento (transcrição literal do DOCX v02) em um
 * diálogo legível no celular. As observações de revisão do documento são
 * mantidas e identificadas como tal — não são removidas nem reescritas.
 */
export function RegulamentoLeitor({ aberto, onFechar }: { aberto: boolean; onFechar: () => void }) {
  const ref = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const d = ref.current
    if (!d) return
    if (aberto && !d.open) d.showModal()
    if (!aberto && d.open) d.close()
  }, [aberto])

  return (
    <dialog ref={ref} className="reg-dialog" aria-labelledby="reg-titulo" onClose={onFechar}>
      <div className="reg-topo">
        <div>
          <p className="reg-versao">{APROVACAO.versaoRegulamento}</p>
          <h2 id="reg-titulo">Regulamento completo</h2>
        </div>
        <button type="button" className="reg-fechar" onClick={onFechar} aria-label="Fechar regulamento">
          <X aria-hidden="true" />
        </button>
      </div>
      {APROVACAO.modoAprovacao && (
        <p className="reg-alerta" role="note">
          Documento em revisão: a versão disponível contém observações internas de revisão, destacadas abaixo. Ela não
          deve ser tratada como versão final aprovada.
        </p>
      )}
      <div className="reg-corpo">
        {(regulamento as Bloco[]).map((b, i) => {
          switch (b.k) {
            case 'titulo':
              return <p key={i} className="reg-b-titulo">{b.t}</p>
            case 'h':
              return <h3 key={i}>{b.t}</h3>
            case 'sub':
              return <p key={i} className="reg-b-sub">{b.t}</p>
            case 'anexo':
              return <p key={i} className="reg-b-anexo">{b.t}</p>
            case 'nota':
              return (
                <aside key={i} className="reg-b-nota" aria-label="Observação de revisão presente no documento original">
                  <strong>Observação de revisão no documento original</strong>
                  <span>{b.t}</span>
                </aside>
              )
            default:
              return <p key={i}>{b.t}</p>
          }
        })}
        <p className="reg-b-meta">
          Transcrição do texto do arquivo original, sem alteração de conteúdo. Cabeçalhos, rodapés e campos de assinatura
          do arquivo não foram transcritos; consulte o PDF ou o DOCX para a formatação original.
        </p>
      </div>
      <div className="reg-rodape">
        <a href={CAMPANHA.regulamentoPdf} download className="reg-baixar">
          <FileDown aria-hidden="true" /> Baixar PDF
        </a>
        <a href={CAMPANHA.regulamentoDocx} download className="reg-baixar reg-baixar--sec">
          Arquivo original (DOCX)
        </a>
      </div>
    </dialog>
  )
}
