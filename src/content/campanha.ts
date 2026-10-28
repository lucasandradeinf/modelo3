/**
 * Conteúdo da campanha "Satisfação Garantida ou Seu Dinheiro de Volta".
 *
 * Fonte: Regulamento v02 (atualizado em 21/08/2026). Todo texto abaixo foi
 * escrito para corresponder ao regulamento; as cláusulas de origem estão
 * indicadas em `clausula`. Itens que dependem de aprovação estão isolados no
 * bloco APROVACAO — ver PENDENCIAS-APROVACAO.md antes de publicar.
 */

const base = import.meta.env.BASE_URL

/* ------------------------------------------------------------------ */
/* Pontos que dependem de aprovação — altere aqui após a validação     */
/* ------------------------------------------------------------------ */
export const APROVACAO = {
  /** Exibe a faixa "versão para aprovação" e marca o regulamento como minuta. */
  modoAprovacao: true,
  /**
   * Nomes das redes participantes (cláusula 3.4). Há pendência no próprio
   * regulamento sobre a lista final e sobre a autorização de uso dos nomes
   * no material publicitário (cláusula 18.2). Enquanto `exibirRedes` for
   * false, a página apenas remete à cláusula 3.4.
   */
  exibirRedes: false,
  redesParticipantes: [] as string[],
  /** Identificação da versão do regulamento disponibilizada. */
  versaoRegulamento: 'Versão 02 — atualizada em 21/08/2026 (minuta com observações de revisão)',
}

export const CAMPANHA = {
  nome: 'Satisfação Garantida ou Seu Dinheiro de Volta',
  promotora: 'FranceFarma Indústria de Cosméticos Ltda.',
  sacEmail: 'sac@francefarma.com.br',
  siteOficial: 'https://www.francefarma.com.br/',
  vigenciaInicio: '14/09/2026',
  vigenciaFim: '31/12/2026',
  regulamentoPdf: `${base}regulamento/regulamento-satisfacao-garantida-v02-21-08-2026.pdf`,
  regulamentoDocx: `${base}regulamento/regulamento-satisfacao-garantida-v02-21-08-2026.docx`,
  avisoParticipacao:
    'Participação sujeita às condições do regulamento. O reembolso depende do envio da solicitação no prazo, da devolução do produto e da análise da FranceFarma.',
}

const assunto = 'Solicitação de reembolso – Campanha Satisfação Garantida'
const corpo = [
  'Olá, SAC FranceFarma.',
  '',
  'Desejo solicitar o reembolso pela campanha "Satisfação Garantida ou Seu Dinheiro de Volta".',
  '',
  'Seguem anexos e informações (cláusula 7 do regulamento):',
  '- Nota ou cupom fiscal da compra (anexo)',
  '- Nome completo:',
  '- CPF:',
  '- Telefone:',
  '- Endereço:',
  '- Motivo da insatisfação:',
  '- Foto do produto exibindo o número do lote (anexo)',
  '- Foto do conteúdo restante na embalagem (anexo)',
  '- Chave PIX ou dados bancários de conta em meu nome:',
  '- Declaração simples e assinada, se o CPF não constar no documento fiscal (anexo)',
].join('\n')

export const MAILTO_SAC = `mailto:${CAMPANHA.sacEmail}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpo)}`

/* ------------------------------------------------------------------ */
/* Como funciona — cláusulas 4, 3, 6, 7, 8, 9, 12, 14                 */
/* ------------------------------------------------------------------ */
export const PASSOS = [
  {
    titulo: 'Confira o produto',
    texto:
      'Verifique se o produto está na lista do Anexo I do regulamento e se a compra atende às condições da campanha.',
    clausula: 'Cláusulas 4.1 e 9.1',
  },
  {
    titulo: 'Compre em Goiás',
    texto:
      'Compre entre 14/09/2026 e 31/12/2026 em loja de rede participante situada em Goiás, ou no site/app da própria rede com nota emitida em Goiás. Guarde a nota ou o cupom fiscal.',
    clausula: 'Cláusulas 3.1, 3.4 e 3.5',
  },
  {
    titulo: 'Use conforme a embalagem',
    texto: 'Utilize o produto normalmente, seguindo as instruções da embalagem. Guarde a embalagem original.',
    clausula: 'Cláusulas 6.1 e 9.1.6',
  },
  {
    titulo: 'Não gostou? Escreva ao SAC',
    texto:
      'Envie e-mail para sac@francefarma.com.br em até 30 dias corridos da emissão da nota, com os documentos exigidos. Você recebe a confirmação com número de protocolo em até 2 dias úteis.',
    clausula: 'Cláusulas 6.1 a 6.4 e 7',
  },
  {
    titulo: 'Devolva pelos Correios',
    texto:
      'Com o protocolo confirmado, você recebe por e-mail um código de postagem sem custo. Poste o produto, na embalagem original e com conteúdo restante, em até 10 dias corridos.',
    clausula: 'Cláusulas 8.1 a 8.3',
  },
  {
    titulo: 'Análise e reembolso',
    texto:
      'A análise é concluída em até 10 dias úteis após o recebimento do produto. Se aprovada, o reembolso é pago em até 15 dias corridos, por PIX ou transferência para conta em seu nome.',
    clausula: 'Cláusulas 12.1 e 14.1',
  },
]

/* ------------------------------------------------------------------ */
/* Condições principais — leitura rápida                              */
/* ------------------------------------------------------------------ */
export const CONDICOES = [
  { rotulo: 'Vigência', valor: 'Compras de 14/09/2026 a 31/12/2026', detalhe: 'Vale a data de emissão do documento fiscal.', clausula: '3.1' },
  { rotulo: 'Onde', valor: 'Goiás', detalhe: 'Consumidores residentes em Goiás, em lojas das redes participantes situadas no estado. Compras em marketplaces e aplicativos de entrega de terceiros não valem.', clausula: '3.4 e 3.5' },
  { rotulo: 'Quem', valor: 'Pessoas físicas maiores de 18 anos', detalhe: 'Não participam pessoas jurídicas, revendedores, nem sócios, empregados e prestadores da Promotora e de agências e fornecedores envolvidos.', clausula: '5.1 e 5.2' },
  { rotulo: 'Prazo para pedir', valor: '30 dias corridos', detalhe: 'Contados da emissão da nota. Se o prazo terminar em dia não útil, passa para o primeiro dia útil seguinte. Vale a data de envio do e-mail.', clausula: '6.2 e 6.3' },
  { rotulo: 'Embalagem', valor: 'Original e com conteúdo visível', detalhe: 'O produto é devolvido na embalagem original, com conteúdo restante. Produto totalmente consumido ou embalagem descartada não são aceitos.', clausula: '9.1.4, 9.1.5 e 10.1' },
  { rotulo: 'Devolução', valor: 'Até 10 dias corridos para postar', detalhe: 'Contados do recebimento do código de logística reversa dos Correios, sem custo. Sem postagem no prazo, a solicitação é arquivada.', clausula: '8.1 a 8.3' },
  { rotulo: 'Limite', valor: 'Até 2 unidades por CPF', detalhe: 'Durante toda a campanha, de produtos iguais ou diferentes. Cada unidade pode ser objeto de uma única solicitação.', clausula: '13.1 e 13.2' },
  { rotulo: 'Valor', valor: 'O valor efetivamente pago', detalhe: 'Conforme o documento fiscal, considerados descontos e promoções. Deslocamento e outros custos indiretos não são reembolsados.', clausula: '11.1 e 11.2' },
  { rotulo: 'Pagamento', valor: 'Até 15 dias corridos após a aprovação', detalhe: 'Por PIX ou transferência, somente para conta de titularidade do solicitante (mesmo CPF).', clausula: '12.1' },
]

export const DESTAQUES_RESTRICOES = [
  'Não é sorteio nem concurso: é uma garantia de satisfação sujeita a regras.',
  'O reembolso não é automático: depende de solicitação no prazo, devolução do produto e análise.',
  'Não participam brindes, amostras grátis, kits promocionais gratuitos, produtos de campanhas de doação nem produtos comprados fora das redes participantes.',
  'A campanha não substitui seus direitos legais como consumidor (Código de Defesa do Consumidor).',
]

/* ------------------------------------------------------------------ */
/* Documentos — cláusula 7                                             */
/* ------------------------------------------------------------------ */
export const DOCUMENTOS = [
  { titulo: 'Nota ou cupom fiscal', texto: 'Da compra do produto participante.', clausula: '7.1.1' },
  { titulo: 'Seus dados', texto: 'Nome completo, CPF, telefone e endereço.', clausula: '7.1.2' },
  { titulo: 'O motivo', texto: 'Um relato livre sobre por que você não ficou satisfeito.', clausula: '7.1.3' },
  { titulo: 'Duas fotos', texto: 'Uma do produto mostrando o número do lote e outra mostrando o conteúdo restante na embalagem.', clausula: '7.1.4' },
  { titulo: 'Conta para receber', texto: 'Chave PIX ou dados bancários de conta em seu nome.', clausula: '7.1.5' },
  { titulo: 'Declaração, se preciso', texto: 'Se a nota não tiver seu CPF, envie uma declaração simples e assinada de que você mesmo fez a compra.', clausula: '7.2' },
]

/* ------------------------------------------------------------------ */
/* Produtos — Anexo I                                                  */
/* Textos dos itens reproduzem o Anexo I. Imagens: embalagens oficiais */
/* publicadas em francefarma.com.br, de caráter ilustrativo.           */
/* ------------------------------------------------------------------ */
export type Linha = {
  id: string
  nome: string
  descricao: string
  itens: string[]
  imagens: { src: string; alt: string }[]
}

const img = (n: string) => `${base}img/produtos/${n}.webp`

export const LINHAS: Linha[] = [
  {
    id: 'vidalia',
    nome: 'Linha Vidália',
    descricao: 'Itens participantes:',
    itens: ['Hidratante 200 ml', 'Hidratante 500 ml', 'Sabonete facial', 'Sabonete líquido', 'Água Micelar'],
    imagens: [
      { src: img('vid-hidratante-ureia'), alt: 'Embalagem do hidratante corporal Vidália' },
      { src: img('vid-sabonete-facial'), alt: 'Embalagem do sabonete facial Vidália' },
      { src: img('vid-sabonete-liquido-cha'), alt: 'Embalagem do sabonete líquido Vidália' },
    ],
  },
  {
    id: 'intimoph',
    nome: 'Linha Íntimo pH',
    descricao: 'Itens participantes:',
    itens: ['Todos os itens da linha'],
    imagens: [
      { src: img('intimo-suave'), alt: 'Embalagem do sabonete íntimo Íntimo pH Suave' },
      { src: img('intimo-floral'), alt: 'Embalagem do sabonete íntimo Íntimo pH Floral' },
      { src: img('intimo-neutro'), alt: 'Embalagem do sabonete íntimo Íntimo pH Neutro' },
    ],
  },
  {
    id: 'tanahora',
    nome: 'Linha Tá na Hora',
    descricao: 'Itens participantes:',
    itens: ['Condicionador', 'Shampoo', 'Creme para pentear'],
    imagens: [
      { src: img('tnh-shampoo-cachinhos'), alt: 'Embalagem do shampoo Tá na Hora' },
      { src: img('tnh-condicionador-princesa'), alt: 'Embalagem do condicionador Tá na Hora' },
      { src: img('tnh-shampoo-todos'), alt: 'Embalagem do shampoo Tá na Hora para todos os tipos de cabelo' },
    ],
  },
  {
    id: 'gel',
    nome: 'Gel de Massagem',
    descricao: 'Itens participantes:',
    itens: ['Doutormax', 'Tandrimax'],
    imagens: [
      { src: img('gel-doutormax'), alt: 'Embalagem do gel Doutormax' },
      { src: img('gel-tandrimax'), alt: 'Embalagem do gel Tandrimax' },
    ],
  },
]

export const AVISO_PRODUTOS =
  'Imagens ilustrativas. Participam exclusivamente os produtos relacionados no Anexo I do regulamento. O selo da campanha na embalagem é apenas informativo: a ausência do selo não exclui um produto do Anexo I, e a presença do selo não inclui um produto que não esteja nele.'

/* ------------------------------------------------------------------ */
/* FAQ — respostas restritas ao regulamento                            */
/* ------------------------------------------------------------------ */
const ondeComprar = APROVACAO.exibirRedes && APROVACAO.redesParticipantes.length
  ? `Nas lojas situadas em Goiás das redes participantes: ${APROVACAO.redesParticipantes.join(', ')}. Também valem compras no site ou aplicativo próprio da rede, desde que a nota seja emitida por estabelecimento em Goiás. Compras em marketplaces e aplicativos de entrega de terceiros não participam.`
  : 'Nas lojas situadas em Goiás das redes participantes relacionadas na cláusula 3.4 do regulamento. Também valem compras no site ou aplicativo próprio da rede, desde que a nota seja emitida por estabelecimento em Goiás. Compras em marketplaces e aplicativos de entrega de terceiros não participam.'

export const FAQ = [
  {
    p: 'Quem pode participar?',
    r: 'Pessoas físicas maiores de 18 anos, residentes no Estado de Goiás, que comprarem um produto participante durante a vigência. Não podem participar sócios, administradores, empregados e prestadores da FranceFarma; empregados e prestadores das agências e fornecedores envolvidos na campanha; pessoas jurídicas; distribuidores e quem compra para revenda.',
  },
  {
    p: 'Quais produtos participam?',
    r: 'Somente os relacionados no Anexo I do regulamento: Linha Vidália (Hidratante 200 ml, Hidratante 500 ml, Sabonete facial, Sabonete líquido e Água Micelar); Linha Íntimo pH (todos os itens da linha); Linha Tá na Hora (Condicionador, Shampoo e Creme para pentear); e Gel de Massagem (Doutormax e Tandrimax). Brindes, amostras grátis, kits promocionais gratuitos e produtos de campanhas de doação não participam.',
  },
  { p: 'Em quais lojas posso comprar?', r: ondeComprar },
  {
    p: 'Qual é o período da campanha?',
    r: 'Valem compras realizadas entre 14/09/2026 e 31/12/2026, considerando a data de emissão da nota ou do cupom fiscal. A solicitação pode ser enviada mesmo depois de encerrada a campanha, desde que dentro do prazo de 30 dias da compra.',
  },
  {
    p: 'Como faço a solicitação?',
    r: 'Depois de usar o produto conforme as instruções da embalagem, se não ficar satisfeito, envie um e-mail para sac@francefarma.com.br em até 30 dias corridos da emissão da nota, com os documentos e as informações exigidos. O SAC confirma o recebimento com número de protocolo em até 2 dias úteis; se a confirmação não chegar, o comprovante de envio do seu e-mail vale como prova.',
  },
  {
    p: 'Quais documentos preciso apresentar?',
    r: 'Nota ou cupom fiscal; nome completo, CPF, telefone e endereço; o motivo da insatisfação; duas fotos (uma do produto mostrando o número do lote e outra do conteúdo restante na embalagem); e chave PIX ou dados bancários de conta em seu nome. Se a nota não tiver seu CPF, inclua uma declaração simples e assinada de que você fez a compra.',
  },
  {
    p: 'Posso solicitar reembolso de mais de um produto?',
    r: 'Sim, até 2 unidades por CPF durante toda a campanha, de produtos participantes iguais ou diferentes. Cada unidade só pode ser objeto de uma solicitação.',
  },
  {
    p: 'Preciso devolver a embalagem?',
    r: 'Sim. Após a confirmação do protocolo, você recebe por e-mail um código de logística reversa dos Correios, sem custo, e deve postar o produto com a embalagem original em até 10 dias corridos. Sem a postagem no prazo, a solicitação é arquivada.',
  },
  {
    p: 'Quanto tempo demora a análise?',
    r: 'Até 10 dias úteis contados do recebimento do produto devolvido. Se a FranceFarma pedir informações complementares (uma única vez), o prazo fica suspenso até a sua resposta, e você terá 10 dias corridos para responder. A análise verifica os requisitos do regulamento e indícios de fraude; o motivo da sua insatisfação não é julgado.',
  },
  {
    p: 'Como o reembolso será pago?',
    r: 'Se a solicitação for aprovada, em até 15 dias corridos, por PIX ou transferência bancária, exclusivamente para conta em nome do solicitante (mesmo CPF). O valor é o efetivamente pago pelo produto, conforme a nota fiscal, considerados descontos e promoções.',
  },
  {
    p: 'Quem devo contatar para solicitar o reembolso?',
    r: 'O SAC da FranceFarma, pelo e-mail sac@francefarma.com.br. O reembolso é responsabilidade exclusiva da FranceFarma: as lojas e redes participantes não analisam solicitações nem fazem o pagamento.',
  },
  {
    p: 'E se a solicitação for negada?',
    r: 'A negativa é sempre comunicada por escrito, com os motivos. Você pode pedir uma reanálise por e-mail em até 10 dias corridos da comunicação.',
  },
  {
    p: 'Não fiquei satisfeito, mas já usei todo o produto. Posso pedir?',
    r: 'Não. Pelo regulamento, é preciso restar conteúdo visível na embalagem, e solicitações de produtos totalmente consumidos não são aceitas.',
  },
  {
    p: 'E se o produto estiver vencido?',
    r: 'A compra de produto já vencido não é tratada por esta campanha. Isso não prejudica seus direitos legais de consumidor perante o vendedor e o fabricante (arts. 18 e 26 do Código de Defesa do Consumidor), que podem ser exercidos pelos canais ordinários de atendimento.',
  },
  {
    p: 'Como meus dados pessoais são tratados?',
    r: 'Os dados enviados na solicitação são usados pela FranceFarma exclusivamente para operacionalizar a campanha (análise, logística reversa e pagamento) e prevenir fraudes. São guardados por 5 anos e depois eliminados ou anonimizados, não são compartilhados com terceiros além dos operadores necessários (transporte, pagamento e atendimento) e não são usados para publicidade sem seu consentimento específico. Para exercer seus direitos previstos na LGPD, escreva para sac@francefarma.com.br. Este site não coleta dados pessoais.',
  },
]
