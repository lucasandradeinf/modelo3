# Pendências para aprovação — Campanha “Satisfação Garantida ou Seu Dinheiro de Volta”

**Atualizado em:** 04/11/2026 (reformulação com os materiais oficiais)
**Documentos comparados:** regulamento v02 (DOCX, 21/08/2026), apresentação `slides campanha.pdf` / PPTX “Guia de Treinamento de Campo” e peça-chave oficial.

> As três landing pages são **ambientes de demonstração** (faixa “versão para avaliação”, `noindex`).
> Regra aplicada: **o regulamento prevalece** em tudo que é condição. Quando a apresentação diverge, as páginas seguem o
> regulamento e o ponto fica registrado abaixo até a FranceFarma confirmar.

---

## 0. Divergências entre a apresentação e o regulamento (novas)

| # | Tema | Apresentação / peça | Regulamento v02 | O que as páginas mostram | Decisão necessária |
|---|---|---|---|---|---|
| 0.1 | **Vigência** | “Ação Promocional 2026/27” e **14/12/2026 a 14/03/2027** (slide 2) | **14/09/2026 a 31/12/2026** (cl. 3.1) | Regulamento (14/09 a 31/12/2026), com o selo “Ação Promocional 2026/27” | **Crítica.** Confirmar a vigência e emitir regulamento com a data correta. Na página, a troca é feita em um só lugar (`APROVACAO.vigenciaInicio/Fim` em `src/shared/campanha.ts`). |
| 0.2 | Código de postagem | “O SAC envia um código dos Correios em até 2 dias úteis” (slide 7) | Os 2 dias úteis são para **confirmar o protocolo** (6.4); o código é enviado “confirmado o protocolo”, **sem prazo** (8.1) | Regulamento: protocolo em até 2 dias úteis; código enviado após o protocolo | Definir se haverá prazo para o código e incluí-lo no regulamento, ou corrigir o slide. |
| 0.3 | Forma de pagamento | “Recebe o valor pago via PIX” (slide 5); “Se aprovado, o PIX é feito em até 15 dias” (slide 7) | **PIX ou transferência bancária** (12.1) | PIX ou transferência | Corrigir o slide ou o regulamento. |
| 0.4 | Redes participantes | “Tatico, Bretas, SuperVi, Supermercado 007, Raio de Sol e Rede Store” (slide 3) | “Tatico, **Bretas/Prezunic**, SuperVi, Supermercado 007, Raio de Sol, **Supermercado Rede Store**” (3.4), com nota interna dizendo que o Prezunic foi retirado | Nomes **ocultos** (`exibirRedes: false`); a página remete à cláusula 3.4. A lista do slide já está carregada no código para ser ativada. | Lista final com razão social/CNPJ e **autorização das redes** para uso dos nomes (18.2). |
| 0.5 | Hidratante “500 ml” | “Hidratante 500ml” (slide 4) | “Hidratante 500 ml” (Anexo I) | Fotos das embalagens com válvula, que indicam **425 g**, com nota de conferência | Confirmar se o item do Anexo I é a embalagem de 425 g (e corrigir o texto) ou se existe uma de 500 ml. |
| 0.6 | Embalagem Tá na Hora | A peça-chave mostra embalagens com **ilustração infantil** (Shampoo Cachinhos laranja, Condicionador Lisinhos roxo) | — | Packshots do site oficial (embalagem com mascotes), porque a pasta `TA NA HORA` veio vazia | Confirmar qual embalagem está nas gôndolas e enviar fotos em alta resolução. |
| 0.7 | Creme para pentear (Tá na Hora) | Listado no slide 4 | Listado no Anexo I | Citado no texto do Anexo I, **sem foto** | O produto não aparece no site oficial nem nas fotos. Confirmar se existe e enviar foto. |
| 0.8 | “Reembolso total do valor pago*” | Texto da peça, com asterisco | “Valor efetivamente pago… consideradas promoções e descontos” (11.1) | Frase da peça mantida, com a nota do asterisco por extenso logo abaixo | Validar a redação do asterisco com o jurídico. |
| 0.9 | Endereço do regulamento | QR Code da peça leva a `www.francefarma.com.br/regulamento` | Preâmbulo: “endereço eletrônico indicado no material da Campanha” | As páginas estão em `lucasandradeinf.github.io/modeloN/` (demonstração) | Publicar o regulamento final no endereço do QR Code ou ajustar o QR para a página escolhida. |
| 0.10 | “Usa … por alguns dias” | Slide 5 | O regulamento não exige tempo mínimo de uso (6.1) | “Use o produto normalmente, conforme as instruções da embalagem” | Retirar “por alguns dias” do treinamento para não criar uma condição inexistente. |
| 0.11 | Quem não participa | “Funcionários da Francefarma e agências envolvidas” (slide 3) | Lista mais ampla: sócios, administradores, prestadores, fornecedores, PJ, revendedores (5.2) | Texto completo do regulamento | Nenhuma: é uma simplificação do slide. Registrado para alinhamento do treinamento. |

## 1. Pendências presentes no próprio regulamento (mantidas da rodada anterior)

| # | Onde | O que diz o documento | O que precisa ser validado |
|---|---|---|---|
| 1.1 | Cláusula 3.4 | `[PENDÊNCIA: confirmar a lista final das redes…; o Prezunic foi retirado da lista…]` | Lista definitiva com razão social e CNPJ. Inconsistência: a nota diz que o Prezunic foi retirado, mas o texto ainda lista “Bretas/Prezunic”. |
| 1.2 | Cláusula 18.2 | `[PENDÊNCIA: confirmar se há autorização das redes para o uso de seus nomes…]` | Autorização formal de cada rede. |
| 1.3 | Após a cláusula 18.2 | Parágrafo “MOTIVAÇÃO: …” | Justificativa interna do escritório: **remover** da versão publicada. |
| 1.4 | Anexo I | Tá na Hora e Gel de Massagem no mesmo parágrafo | Separar os itens. |
| 1.5 | Anexo I — Vidália | Itens sem versões | As fotos mostram 14 versões (3 hidratantes 200 ml, 3 com válvula, 3 sabonetes faciais, 3 sabonetes líquidos, 2 águas micelares). Confirmar se todas participam (ideal: lista de SKU/EAN). |
| 1.6 | Anexo I — Íntimo pH | “Todos os itens da linha” | As fotos mostram 7 versões. O site oficial também lista kits: confirmar se kits pagos participam e como contar “Unidade” (1.1.3). |
| 1.7 | Anexo I — Gel de Massagem | “Doutormax; Tandrimax” | As fotos mostram 4 versões Doutormax e 2 Tandrimax. Confirmar quais participam. |
| 1.8 | Página 9 | Blocos de assinatura sem assinatura | Definir o signatário pela Promotora. |
| 1.9 | Cabeçalho/rodapé | Identidade do escritório de advocacia | Avaliar a versão pública com a identidade da Promotora. |

## 2. Materiais e uso de imagem

- **Peça-chave derivada:** para usar o selo em vetor (nítido em qualquer tela), foi gerada uma versão da peça **sem o selo e sem os textos** (`kv-cena`), preenchendo o fundo azul-claro. A modelo, as embalagens e a prateleira não foram alteradas. Validar com a agência/branding.
- **Selo em vetor:** reproduzido a partir da peça (cores e proporções medidas). A fonte do selo foi aproximada pela Source Sans 3; se a agência tiver o arquivo vetorial original (AI/SVG/PDF), substituir `Selo.tsx` pela arte oficial.
- **Direito de imagem da modelo** da peça-chave e das fotos da jornada (slide 5): confirmar a licença para uso **web** e por quanto tempo. As fotos da jornada parecem geradas ou de banco de imagens; confirmar a origem.
- **Logo:** usada em aplicação monocromática azul (como na peça) e branca (como nos slides), gerada pela máscara do arquivo oficial, sem redesenho. Confirmar com o branding.
- **Tá na Hora:** imagens de 600 px do site oficial (abaixo do padrão das demais). Pedir packshots em alta.
- **Fotos não usadas:** 31 versos e 13 tomadas alternativas (ver `INVENTARIO-ASSETS.md`). O verso P1020441 (Íntimo pH Floral) está na pasta `GEL MASSAGEM`.

## 3. Elementos de marketing que precisam de aprovação

- **Escolha do modelo** (ver `COMPARATIVO-MODELOS.md`).
- **Frases criativas** (fora do texto oficial da peça): “Experimente. Se não gostar, a gente devolve.” (M1), “Experimente sem medo. Não gostou, o dinheiro volta.” (M2), “Uma garantia simples, com regras claras” (M3), “Procure o selo nas gôndolas”, “Tire suas dúvidas”.
- **Números em destaque do Modelo 2:** “30 dias”, “2 unidades”, “100% do valor pago*”. O “100%” traduz o “Reembolso total” da peça e leva o mesmo asterisco.
- **Selo informativo:** a seção de PDV reforça que o selo na embalagem é apenas sinalização (cl. 4.2).

## 4. Antes da publicação oficial

1. Resolver 0.1 (vigência) e emitir o regulamento final, sem notas internas (1.1–1.3, 1.8).
2. Substituir `public/regulamento/*.pdf|docx` e regenerar `src/shared/regulamento.json`.
3. Em `_assets/v2/shared/campanha.ts`, bloco `APROVACAO`: `modoAprovacao: false`, datas de vigência, `exibirRedes`/`redesParticipantes` com a lista autorizada e `versaoRegulamento`. Depois, `bash _assets/v2/sync.sh modeloN` para cada modelo.
4. Ajustar `src/shared/produtos.ts` ao Anexo I final (versões e notas). As notas de conferência só aparecem com `modoAprovacao: true`.
5. Remover `<meta name="robots" content="noindex, nofollow">` do `index.html`.
6. Validar o FAQ e o texto do e-mail pré-preenchido (`MAILTO_SAC`) com o jurídico.
7. Definir o domínio final (ex.: `francefarma.com.br/regulamento`) e ajustar `og:url`, `canonical` e o `base` do `vite.config.ts`.
8. `npm run typecheck && npm run build` e testes de navegação.

## 5. Fontes consultadas

- Arquivos locais: regulamento DOCX (íntegra), apresentação PDF (12 páginas renderizadas) e PPTX (mídias e fontes), logo oficial e 78 fotografias.
- `francefarma.com.br` (04/11/2026): categoria e páginas de produto Tá na Hora (8 produtos; nenhum creme para pentear).
- As páginas mostram **apenas** o e-mail do SAC como canal da campanha, conforme o regulamento.
