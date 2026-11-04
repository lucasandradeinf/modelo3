/**
 * Conteúdo da campanha "Satisfação Garantida ou Seu Dinheiro de Volta".
 *
 * Fonte de verdade das condições: Regulamento v02 (atualizado em 21/08/2026).
 * Fonte de linguagem, identidade e organização: peça-chave e apresentação
 * "Guia de Treinamento de Campo". Onde as duas divergem, prevalece o
 * regulamento e a divergência está registrada em PENDENCIAS-APROVACAO.md.
 * Arquivo idêntico nos três modelos.
 */

const base = import.meta.env.BASE_URL

/* ------------------------------------------------------------------ */
/* Pontos que dependem de aprovação — altere aqui após a validação     */
/* ------------------------------------------------------------------ */
export const APROVACAO = {
  /** Exibe a faixa "versão para aprovação" e as notas de conferência. */
  modoAprovacao: true,
  /**
   * Vigência (cláusula 3.1 do regulamento v02). A apresentação de treinamento
   * informa 14/12/2026 a 14/03/2027 — divergência pendente de confirmação.
   * Ao confirmar a nova data, altere somente estes dois campos.
   */
  vigenciaInicio: '14/09/2026',
  vigenciaFim: '31/12/2026',
  /**
   * Redes participantes (cláusula 3.4). Lista pronta para exibição, mas só
   * aparece quando `exibirRedes` for true: falta confirmar a lista final e a
   * autorização de uso dos nomes (cláusula 18.2).
   */
  exibirRedes: false,
  redesParticipantes: ['Tatico', 'Bretas', 'SuperVi', 'Supermercado 007', 'Raio de Sol', 'Rede Store'],
  versaoRegulamento: 'Versão 02 — atualizada em 21/08/2026 (minuta com observações de revisão)',
}

const { vigenciaInicio: INICIO, vigenciaFim: FIM } = APROVACAO

export const CAMPANHA = {
  nome: 'Satisfação Garantida ou Seu Dinheiro de Volta',
  acao: 'Ação Promocional 2026/27',
  promotora: 'FranceFarma Indústria de Cosméticos Ltda.',
  sacEmail: 'sac@francefarma.com.br',
  siteOficial: 'https://www.francefarma.com.br/',
  vigencia: `${INICIO} a ${FIM}`,
  regulamentoPdf: `${base}regulamento/regulamento-satisfacao-garantida-v02-21-08-2026.pdf`,
  regulamentoDocx: `${base}regulamento/regulamento-satisfacao-garantida-v02-21-08-2026.docx`,
  avisoParticipacao:
    'Participação sujeita às condições do regulamento. O reembolso depende da solicitação no prazo, da devolução do produto e da análise da FranceFarma.',
}

/** Textos da peça-chave oficial. */
export const PECA = {
  apoio: 'Para você experimentar nossos produtos com',
  apoioDestaque: 'total confiança!',
  beneficios: [
    { id: 'qualidade', texto: 'Qualidade que protege seu dinheiro' },
    { id: 'reembolso', texto: 'Reembolso total do valor pago*' },
  ],
  asterisco: '*Valor efetivamente pago, conforme a nota fiscal, considerados descontos e promoções (cláusula 11).',
  promessa:
    'O objetivo é permitir que você experimente os produtos FranceFarma com total confiança. Se não ficar satisfeito, devolvemos o valor pago.',
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
/* Jornada do consumidor — estrutura da apresentação, texto do         */
/* regulamento (cláusulas 3, 6, 7, 8, 12 e 14)                          */
/* ------------------------------------------------------------------ */
export const JORNADA = [
  {
    id: 'compra',
    titulo: 'Compra',
    texto: `Compre um produto participante de ${INICIO} a ${FIM} em rede participante, em loja situada em Goiás ou no site/app da própria rede com nota emitida em Goiás. Guarde a nota fiscal.`,
    clausula: 'Cláusulas 3.1, 3.4 e 3.5',
    foto: 'jornada-1',
    alt: 'Consumidora escolhe um produto na gôndola de produtos FranceFarma',
  },
  {
    id: 'uso',
    titulo: 'Uso',
    texto: 'Use o produto normalmente, conforme as instruções da embalagem. Guarde a embalagem original.',
    clausula: 'Cláusulas 6.1 e 9.1.6',
    foto: 'jornada-2',
    alt: 'Consumidora usa o produto no banho',
  },
  {
    id: 'avaliacao',
    titulo: 'Não ficou satisfeito?',
    texto: 'A avaliação é sua: o motivo da insatisfação não é julgado pela FranceFarma. Basta que ainda reste conteúdo visível na embalagem.',
    clausula: 'Cláusulas 9.1.5 e 14.3',
    foto: 'jornada-3',
    alt: 'Consumidora observa a embalagem do produto',
  },
  {
    id: 'sac',
    titulo: 'Escreva ao SAC',
    texto: 'Envie um e-mail para sac@francefarma.com.br em até 30 dias corridos da emissão da nota, com os documentos exigidos. O protocolo é confirmado em até 2 dias úteis.',
    clausula: 'Cláusulas 6.1 a 6.4 e 7',
    foto: 'jornada-4',
    alt: 'Consumidora escreve um e-mail pelo celular',
  },
  {
    id: 'reembolso',
    titulo: 'Devolução e reembolso',
    texto: 'Devolva o produto pelos Correios, sem custo. Aprovada a análise, o valor pago é devolvido por PIX ou transferência para conta em seu nome.',
    clausula: 'Cláusulas 8, 12.1 e 14.1',
    foto: 'jornada-5',
    alt: 'Consumidora sorri ao ver no celular a confirmação de um PIX recebido',
  },
]

/** "Depois do protocolo" — prazos (apresentação, slide 7, conferidos com o regulamento). */
export const PRAZOS = [
  { valor: '2', unidade: 'dias úteis', titulo: 'Protocolo', texto: 'O SAC confirma o recebimento da solicitação com número de protocolo.', clausula: '6.4' },
  { valor: 'R$ 0', unidade: 'de frete', titulo: 'Código de postagem', texto: 'Confirmado o protocolo, você recebe por e-mail um código de logística reversa dos Correios.', clausula: '8.1' },
  { valor: '10', unidade: 'dias corridos', titulo: 'Postagem', texto: 'Para postar o produto, na embalagem original e com o conteúdo restante, em qualquer agência dos Correios.', clausula: '8.2 e 8.3' },
  { valor: '10', unidade: 'dias úteis', titulo: 'Análise', texto: 'Contados do recebimento do produto. A decisão é comunicada por escrito.', clausula: '14.1 e 14.4' },
  { valor: '15', unidade: 'dias corridos', titulo: 'Pagamento', texto: 'Após a aprovação, por PIX ou transferência, somente para conta do mesmo CPF.', clausula: '12.1' },
]

/* ------------------------------------------------------------------ */
/* Condições principais                                                */
/* ------------------------------------------------------------------ */
export const CONDICOES = [
  { id: 'vigencia', rotulo: 'Vigência', valor: `${INICIO} a ${FIM}`, detalhe: 'Vale a data de emissão da nota ou do cupom fiscal.', clausula: '3.1' },
  { id: 'onde', rotulo: 'Onde', valor: 'Goiás', detalhe: 'Para residentes em Goiás, em lojas das redes participantes situadas no estado ou no site/app próprio da rede com nota emitida em Goiás. Marketplaces e aplicativos de entrega de terceiros não valem.', clausula: '3.4 e 3.5' },
  { id: 'quem', rotulo: 'Quem', valor: 'Maiores de 18 anos', detalhe: 'Pessoas físicas, consumidores finais. Não participam pessoas jurídicas, revendedores, nem sócios, empregados e prestadores da FranceFarma e das agências e fornecedores envolvidos.', clausula: '5.1 e 5.2' },
  { id: 'prazo', rotulo: 'Prazo para pedir', valor: '30 dias corridos', detalhe: 'Contados da emissão da nota. Vale a data de envio do e-mail.', clausula: '6.2 e 6.3' },
  { id: 'embalagem', rotulo: 'Embalagem', valor: 'Original, com conteúdo', detalhe: 'O produto volta na embalagem original e com conteúdo restante visível.', clausula: '9.1.4 e 9.1.5' },
  { id: 'limite', rotulo: 'Limite por CPF', valor: 'Até 2 unidades', detalhe: 'Durante toda a campanha, de produtos iguais ou diferentes. Cada unidade admite uma única solicitação.', clausula: '13.1 e 13.2' },
  { id: 'valor', rotulo: 'Valor do reembolso', valor: 'O valor pago', detalhe: 'Exatamente o valor da nota, considerados descontos e promoções. Não inclui deslocamento ou outros custos indiretos.', clausula: '11.1 e 11.2' },
  { id: 'pagamento', rotulo: 'Pagamento', valor: 'PIX ou transferência', detalhe: 'Em até 15 dias corridos após a aprovação, em conta do mesmo CPF da solicitação.', clausula: '12.1' },
]

/** Cláusula 10.1 — o reembolso não é aceito quando: */
export const NEGADO = [
  'Não houver nota ou cupom fiscal.',
  'A compra tiver ocorrido fora da vigência.',
  'A embalagem original tiver sido descartada.',
  'O conteúdo tiver sido totalmente consumido.',
  'O uso estiver em desacordo com as instruções da embalagem.',
  'Houver indício de adulteração do produto.',
  'A compra for para revenda ou em nome de pessoa jurídica.',
]

export const DESTAQUES_RESTRICOES = [
  'Não é sorteio nem concurso: é uma garantia de satisfação com regras claras.',
  'O reembolso não é automático: depende da solicitação no prazo, da devolução do produto e da análise.',
  'A devolução é feita pelos Correios, após contato com o SAC. As lojas não fazem devolução no balcão.',
  'Não participam brindes, amostras grátis, kits promocionais gratuitos, produtos de doação nem produtos comprados fora das redes participantes.',
]

/* ------------------------------------------------------------------ */
/* Documentos — cláusula 7                                             */
/* ------------------------------------------------------------------ */
export const DOCUMENTOS = [
  { id: 'nota', titulo: 'Nota ou cupom fiscal', texto: 'Legível, da compra do produto participante.', clausula: '7.1.1' },
  { id: 'dados', titulo: 'Seus dados', texto: 'Nome completo, CPF, telefone e endereço.', clausula: '7.1.2' },
  { id: 'motivo', titulo: 'O motivo', texto: 'Um relato livre sobre por que você não ficou satisfeito.', clausula: '7.1.3' },
  { id: 'fotos', titulo: 'Duas fotos', texto: 'Uma do produto com o número do lote visível e outra do conteúdo restante na embalagem.', clausula: '7.1.4' },
  { id: 'conta', titulo: 'Conta para receber', texto: 'Chave PIX ou dados bancários de conta em seu nome.', clausula: '7.1.5' },
  { id: 'declaracao', titulo: 'Declaração, se preciso', texto: 'Se a nota não tiver seu CPF, uma declaração simples e assinada de que você fez a compra.', clausula: '7.2' },
]

/* ------------------------------------------------------------------ */
/* FAQ — respostas restritas ao regulamento                            */
/* ------------------------------------------------------------------ */
const ondeComprar =
  APROVACAO.exibirRedes && APROVACAO.redesParticipantes.length
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
    r: `Valem compras realizadas entre ${INICIO} e ${FIM}, considerando a data de emissão da nota ou do cupom fiscal. A solicitação pode ser enviada mesmo depois de encerrada a campanha, desde que dentro do prazo de 30 dias da compra.`,
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
    p: 'Posso devolver o produto no supermercado?',
    r: 'Não. A devolução é feita pelos Correios, com o código de logística reversa enviado pela FranceFarma depois da confirmação do protocolo. O reembolso é responsabilidade exclusiva da FranceFarma: as lojas e redes participantes não analisam solicitações nem fazem o pagamento.',
  },
  {
    p: 'Posso solicitar reembolso de mais de um produto?',
    r: 'Sim, até 2 unidades por CPF durante toda a campanha, de produtos participantes iguais ou diferentes. Cada unidade só pode ser objeto de uma solicitação.',
  },
  {
    p: 'Preciso devolver a embalagem?',
    r: 'Sim. Após a confirmação do protocolo, você recebe por e-mail um código de logística reversa dos Correios, sem custo, e deve postar o produto com a embalagem original em até 10 dias corridos. Sem a postagem no prazo, a solicitação é arquivada. Se a embalagem original tiver sido descartada, a solicitação não é aceita.',
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
